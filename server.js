// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // OK with Node 18+, keeps your original structure
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import csv from "csv-parser";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Resolve __dirname in ESM ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === Static file serving (matches your current repo structure) ===
// Serve the project root (index.html, script.js, style.css)
app.use(express.static(__dirname, { extensions: ["html"] }));

// Serve feature folders explicitly
app.use("/states", express.static(path.join(__dirname, "states")));
app.use("/data", express.static(path.join(__dirname, "data")));
app.use("/icons", express.static(path.join(__dirname, "icons")));

// Root route → index.html in project root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Optional: simple health check
app.get("/healthz", (req, res) => res.json({ ok: true }));

// ✅ Client record lookup route (with logging)
app.post("/check-client", (req, res) => {
  const { phone, email } = req.body || {};
  const results = [];

  console.log("🔍 Incoming /check-client request:", req.body);

  const csvPath = path.join(__dirname, "data", "client_data.csv");
  if (!fs.existsSync(csvPath)) {
    console.error("❌ CSV not found at:", csvPath);
    return res.status(500).json({ error: "client_data.csv not found" });
  }

  const normPhone = (v) => (v || "").replace(/\D/g, "");
  const inputPhone = normPhone(phone);
  const inputEmail = (email || "").toLowerCase();

  fs.createReadStream(csvPath)
    .pipe(csv())
    .on("data", (row) => {
      // Your CSV headers:
      // client first name,client last name,client email,client phone,vehicle year,vehicle make,vehicle model,city,state,zip-code,internal title status,title remedy
      try {
        const csvPhone = normPhone(row["client phone"]);
        const csvEmail = (row["client email"] || "").toLowerCase();

        if (
          (inputPhone && csvPhone && csvPhone === inputPhone) ||
          (inputEmail && csvEmail && csvEmail === inputEmail)
        ) {
          console.log("✅ Match found:", row);
          results.push(row);
        }
      } catch (e) {
        console.warn("⚠️ Row parse issue:", e);
      }
    })
    .on("end", () => {
      if (results.length > 0) {
        res.json({ match: true, data: results[0] });
      } else {
        console.log("❌ No match found for:", email || phone);
        res.json({ match: false });
      }
    })
    .on("error", (err) => {
      console.error("❌ CSV Read Error:", err);
      res.status(500).json({ error: "Error reading client records." });
    });
});

// 🔁 OpenAI chat route (keeps your constraints & behavior)
app.post("/chat", async (req, res) => {
  try {
    const { userMessage } = req.body || {};
    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({ error: "Missing userMessage" });
    }

    const lowerMsg = userMessage.toLowerCase();

    // --- Local AL form library (same structure you had) ---
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
      (s || "")
        .toLowerCase()
        .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uFE58\uFE63\uFF0D\u2043\u002D]/g, "-")
        .replace(/[\s_]+/g, "-")
        .trim();

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

    if (matchedForm) {
      const { label, path } = matchedForm.meta;
      return res.json({
        reply: `📄 <strong>${label}</strong><br><br>👉 <a href="${path}" target="_blank"><strong>Open Form</strong></a>`,
      });
    }

    // --- Otherwise, call OpenAI normally (same constraints) ---
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
You help users understand and resolve vehicle title issues in clear, straightforward language.
Keep responses concise (3–5 sentences or about 500 characters).

Whenever it fits naturally, you may mention trusted partners like:
 - You Call We Haul (https://www.youcallwehaul.com/) for fast vehicle pickup and removal.
 - Advanced Remarketing Services (https://www.arscars.com/) for remarketing and title management.
 - SHiFT (https://shift4tomorrow.org/) for sustainable vehicle recycling and EV education.
 - Car Donation Wizard (https://www.cardonationwizard.com/) for charitable vehicle donations.

Integrate mentions gently and only when relevant — never force or repeat them. 
Do not fabricate information.

If a user asks about ANYTHING unrelated to vehicle titles, ownership, registration, or these services, 
respond exactly with:
"I'm here to provide you with real-time information regarding your title questions. Was there something else I could help you with?"

Do not attempt to answer or comment on unrelated topics.
Keep responses concise (no more than 3–5 sentences) and professional.
            `,
          },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();
    const aiReply =
      data?.choices?.[0]?.message?.content || "Sorry, I couldn’t get a response.";

    return res.json({ reply: aiReply });
  } catch (error) {
    console.error("❌ OpenAI fetch error:", error);
    return res.status(500).json({ error: "Error contacting OpenAI" });
  }
});

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));