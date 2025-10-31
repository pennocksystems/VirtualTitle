// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import csv from "csv-parser";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Warn if OPENAI_API_KEY is missing (don’t crash in demos)
if (!process.env.OPENAI_API_KEY) {
  console.warn("⚠️  OPENAI_API_KEY is not set. /chat will return an error until you add it.");
}

/* =========================
   Static file hosting
   ========================= */

// Serve the frontend from /public (this becomes your web root)
app.use(express.static(path.join(__dirname, "public")));

// Expose public subfolders explicitly (handy for clarity & CORS/debugging)
app.use("/states", express.static(path.join(__dirname, "public", "states")));
app.use("/icons", express.static(path.join(__dirname, "public", "icons")));

// Expose non-public assets via explicit prefixes
app.use("/data", express.static(path.join(__dirname, "data")));
app.use("/forms", express.static(path.join(__dirname, "forms"))); // optional if you have PDFs

// Root -> serve public/index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* =========================
   API: Client record lookup
   ========================= */

app.post("/check-client", (req, res) => {
  const { phone, email } = req.body;
  const results = [];

  console.log("🔍 /check-client:", req.body);

  fs.createReadStream(path.join(__dirname, "data", "client_data.csv"))
    .pipe(csv())
    .on("data", (data) => {
      const csvPhone = data["client phone"]?.replace(/\D/g, "");
      const csvEmail = data["client email"]?.toLowerCase();
      const inputPhone = phone?.replace(/\D/g, "");
      const inputEmail = email?.toLowerCase();

      if (
        (inputPhone && csvPhone && csvPhone === inputPhone) ||
        (inputEmail && csvEmail && csvEmail === inputEmail)
      ) {
        results.push(data);
      }
    })
    .on("end", () => {
      if (results.length > 0) {
        res.json({ match: true, data: results[0] });
      } else {
        res.json({ match: false });
      }
    })
    .on("error", (err) => {
      console.error("❌ CSV Read Error:", err);
      res.status(500).json({ error: "Error reading client records." });
    });
});

/* =========================
   API: OpenAI chat (form-aware)
   ========================= */

app.post("/chat", async (req, res) => {
  try {
    const { userMessage } = req.body;
    if (!userMessage) {
      return res.status(400).json({ error: "userMessage is required" });
    }

    const lowerMsg = userMessage.toLowerCase();

    // Local form library (same concept as client-side)
    const formLibrary = {
      "mvt-5-13": {
        label: "MVT-5-13 Form (Alabama)",
        path: "https://eforms.com/download/2015/09/Alabama-Motor-Vehicle-Power-of-Attorney-Form-MVT-5-13.pdf",
      },
      "mvt-41-1": {
        label: "MVT-41-1 Form (Alabama)",
        path: "https://drive.google.com/file/d/1J3jB9wuNE0l4zqxgvIumvRehJmtwF7g8/view",
      },
      "mvt-12-1": {
        label: "MVT-12-1 Form (Alabama)",
        path: "https://www.formalu.com/forms/506/application-for-replacement-title",
      },
      "mvt-5-7": {
        label: "MVT-5-7 Form (Alabama)",
        path: "https://www.revenue.alabama.gov/wp-content/uploads/2021/10/MVT-5-7-8-19.pdf",
      },
      "mvt-5-6": {
        label: "MVT-5-6 Form (Alabama)",
        path: "https://drive.google.com/file/d/1oWm0T7w9C0UsaNcw5S0nt5pYWzmRBTrW/view",
      },
    };

    const normalizeForMatch = (s) =>
      s
        .toLowerCase()
        .replace(/[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D\u2043-]/g, "-")
        .replace(/[\s_]+/g, "-")
        .trim();

    // Try to match known form codes or labels
    let matchedForm = null;
    for (const [code, meta] of Object.entries(formLibrary)) {
      const normCode = normalizeForMatch(code);
      if (
        lowerMsg.includes(normCode) ||
        lowerMsg.includes(meta.label.toLowerCase()) ||
        lowerMsg.includes(meta.label.toLowerCase().split("(")[0].trim())
      ) {
        matchedForm = { code, meta };
        break;
      }
    }

    // Keyword fallback (e.g., “power of attorney”)
    if (!matchedForm) {
      const keywordMap = [
        { keyword: "power of attorney", code: "mvt-5-13" },
        { keyword: "salvage", code: "mvt-41-1" },
        { keyword: "duplicate", code: "mvt-12-1" },
        { keyword: "replacement title", code: "mvt-12-1" },
        { keyword: "vin inspection", code: "mvt-5-7" },
      ];
      const found = keywordMap.find((k) => lowerMsg.includes(k.keyword));
      if (found) matchedForm = { code: found.code, meta: formLibrary[found.code] };
    }

    // If a match is found, skip OpenAI and return form link
    if (matchedForm) {
      const { label, path } = matchedForm.meta;
      return res.json({
        reply: `📄 <strong>${label}</strong><br><br>👉 <a href="${path}" target="_blank"><strong>Open Form</strong></a>`,
      });
    }

    // If no API key, return a friendly error
    if (!process.env.OPENAI_API_KEY) {
      return res
        .status(500)
        .json({ error: "OpenAI API key not configured on the server." });
    }

    // Otherwise call OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 300,
        messages: [
          {
            role: "system",
            content: `
              You are "Title Tom" — a friendly, professional title specialist for the state of Alabama.
              Keep responses concise (3–5 sentences).
              Only answer title-related questions; otherwise reply exactly:
              "I'm here to provide you with real-time information regarding your title questions. Was there something else I could help you with?"
            `,
          },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();
    const aiReply = data?.choices?.[0]?.message?.content || "Sorry, I couldn’t get a response.";
    res.json({ reply: aiReply });
  } catch (error) {
    console.error("❌ OpenAI fetch error:", error);
    res.status(500).json({ error: "Error contacting OpenAI" });
  }
});

/* =========================
   Start server
   ========================= */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
