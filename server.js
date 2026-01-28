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

// ─────────────────────────────────────────────────────────────
// Static: serve frontend (public as web root) + states + data
// ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));
app.use("/states", express.static(path.join(__dirname, "public", "states"))); // states live in /public/states
app.use("/data", express.static(path.join(__dirname, "data")));
app.use("/forms", express.static(path.join(__dirname, "forms")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check for Render
app.get("/healthz", (_req, res) => res.type("text").send("ok"));

// ─────────────────────────────────────────────────────────────
// Server-side CSV record lookup
// ─────────────────────────────────────────────────────────────
app.post("/check-client", (req, res) => {
  const { phone, email } = req.body;
  const results = [];

  console.log("🔍 /check-client:", req.body);

  fs.createReadStream(path.join(__dirname, "data", "client_data.csv"))
    .pipe(csv())
    .on("data", (data) => {
      const csvPhone = data["client phone"]?.replace(/\D/g, "");
      const csvEmail = (data["client email"] || "").toLowerCase();
      const inputPhone = phone?.replace(/\D/g, "");
      const inputEmail = (email || "").toLowerCase();

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

// ─────────────────────────────────────────────────────────────
// State config registry for prompts + form autolink
//   • Add more states by extending STATE_CONFIG
// ─────────────────────────────────────────────────────────────
const STATE_CONFIG = {
  Alabama: {
    code: "AL",
    agencyName: "Alabama Department of Revenue (Motor Vehicle Division)",
    agencyUrl: "https://www.revenue.alabama.gov/division/motor-vehicle/",
    forms: {
      "mvt-5-13": {
        label: "MVT-5-13 (Power of Attorney) — Alabama",
        path: "https://eforms.com/download/2015/09/Alabama-Motor-Vehicle-Power-of-Attorney-Form-MVT-5-13.pdf",
      },
      "mvt-41-1": {
        label: "MVT-41-1 (Application for Salvage/Non-Repairable) — Alabama",
        path: "https://drive.google.com/file/d/1J3jB9wuNE0l4zqxgvIumvRehJmtwF7g8/view",
      },
      "mvt-12-1": {
        label: "MVT-12-1 (Application for Replacement Title) — Alabama",
        path: "https://www.formalu.com/forms/506/application-for-replacement-title",
      },
      "mvt-5-7": {
        label: "MVT-5-7 (VIN Inspection) — Alabama",
        path: "https://www.revenue.alabama.gov/wp-content/uploads/2021/10/MVT-5-7-8-19.pdf",
      },
      "mvt-5-6": {
        label: "MVT-5-6 — Alabama",
        path: "https://drive.google.com/file/d/1oWm0T7w9C0UsaNcw5S0nt5pYWzmRBTrW/view",
      },
    },
    keywordMap: [
      { keyword: "power of attorney", code: "mvt-5-13" },
      { keyword: "salvage", code: "mvt-41-1" },
      { keyword: "duplicate", code: "mvt-12-1" },
      { keyword: "replacement title", code: "mvt-12-1" },
      { keyword: "vin inspection", code: "mvt-5-7" },
    ],
  },

  California: {
    code: "CA",
    agencyName: "California Department of Motor Vehicles (DMV)",
    agencyUrl: "https://www.dmv.ca.gov/",
    forms: {
      "reg-227": {
        label: "REG 227 (Application for Duplicate or Paperless Title) — California",
        path: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg227.pdf",
      },
      "reg-262": {
        label: "REG 262 (Vehicle/Vessel Transfer and Reassignment) — California",
        path: "https://www.dmv.ca.gov/portal/file/vehicle-vessel-transfer-and-reassignment-form-reg-262-pdf/",
      },
      "reg-156": {
        label: "REG 156 (Application for Replacement Plates, Stickers, Documents) — California",
        path: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
      },
      "reg-5": {
        label: "REG 5 (Statement of Facts) — California",
        path: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg5.pdf",
      },
    },
    keywordMap: [
      { keyword: "duplicate", code: "reg-227" },
      { keyword: "replacement title", code: "reg-227" },
      { keyword: "transfer and reassignment", code: "reg-262" },
      { keyword: "statement of facts", code: "reg-5" },
      { keyword: "replacement stickers", code: "reg-156" },
    ],
  },
  Alaska: {
    code: "AK",
    agencyName: "Alaska Division of Motor Vehicles (DMV)",
    agencyUrl: "https://dmv.alaska.gov/vehicle-services/vehicle-services/",
    forms: {
      "ak-809": {
        label: "Form 809 (Application for Duplicate Title) — Alaska",
        path: "https://doa.alaska.gov/dmv/forms/pdfs/809.pdf",
      },
      "ak-811": {
        label: "Form 811 (Verification of Vehicle / VIN) — Alaska",
        path: "https://doa.alaska.gov/dmv/forms/pdfs/811.pdf",
      },
      "ak-827": {
        label: "Form 827 (Vehicle Power of Attorney) — Alaska",
        path: "https://doa.alaska.gov/dmv/forms/pdfs/827.pdf",
      },
      "ak-857": {
        label: "Form 857 (Affidavit – Death/No Probate) — Alaska",
        path: "https://doa.alaska.gov/dmv/forms/pdfs/857.pdf",
      },
    },
    keywordMap: [
      { keyword: "duplicate", code: "ak-809" },
      { keyword: "replacement title", code: "ak-809" },
      { keyword: "vin inspection", code: "ak-811" },
      { keyword: "power of attorney", code: "ak-827" },
      { keyword: "no probate", code: "ak-857" },
      { keyword: "affidavit death", code: "ak-857" },
    ],
  },
  Arizona: {
    code: "AZ",
    agencyName: "Arizona Department of Transportation (Motor Vehicle Division)",
    agencyUrl: "https://azdot.gov/mvd",
    forms: {
      "96-0236": {
        label: "Form 96-0236 (Title and Registration Application) — Arizona",
        path: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/96-0236.pdf",
      },
      "48-7104": {
        label: "Form 48-7104 (POA with Odometer Disclosure) — Arizona",
        path: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/48-7104.pdf",
      },
    },
    keywordMap: [
      { keyword: "duplicate", code: "96-0236" },
      { keyword: "replacement", code: "96-0236" },
      { keyword: "power of attorney", code: "48-7104" },
    ],
  },
  Arkansas: {
  code: "AR",
  agencyName: "Arkansas Department of Finance and Administration (Office of Motor Vehicle)",
  agencyUrl: "https://www.dfa.arkansas.gov/office/motor-vehicle/",
  forms: {
    "10-381": {
      label: "Form 10-381 (Vehicle Registration Application) — Arkansas",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/VehicleRegistrationApplication.pdf",
    },
    "10-313": {
      label: "Form 10-313 (Bill of Sale) — Arkansas",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/BillofSale.pdf",
    },
    "POA-01": {
      label: "Power of Attorney for Vehicle Transactions — Arkansas",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/POWER_OF_ATTORNEYforDUPLICATE_TITLE_VEHICLE_TRANSACTIONS.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "10-381" },
    { keyword: "replacement", code: "10-381" },
    { keyword: "registration", code: "10-381" },
    { keyword: "bill of sale", code: "10-313" },
    { keyword: "power of attorney", code: "POA-01" },
  ],
},
};

// Helpers for form matching
const normalizeForMatch = (s = "") =>
  s
    .toLowerCase()
    .replace(/[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D\u2043-]/g, "-")
    .replace(/[\s_]+/g, "-")
    .trim();

function findMatchedFormForState(stateName, userMsgLower) {
  const cfg = STATE_CONFIG[stateName];
  if (!cfg) return null;

  // 1) Direct code/label match
  for (const [code, meta] of Object.entries(cfg.forms)) {
    const normCode = normalizeForMatch(code);
    if (
      userMsgLower.includes(normCode) ||
      userMsgLower.includes(meta.label.toLowerCase()) ||
      userMsgLower.includes(meta.label.toLowerCase().split("(")[0].trim())
    ) {
      return { code, meta };
    }
  }
  // 2) Keyword match
  const found = cfg.keywordMap.find((k) => userMsgLower.includes(k.keyword));
  return found ? { code: found.code, meta: cfg.forms[found.code] } : null;
}

function buildSystemPrompt(stateName) {
  const cfg = STATE_CONFIG[stateName];

  if (!cfg) {
    // Fallback: generic US title help
    return `
You are "Title Tom" — a friendly, professional US vehicle title specialist.
Keep responses concise (3–5 sentences).
Only answer title-related questions. If asked anything unrelated, reply:
"I'm here to provide you with real-time information regarding your title questions. Was there something else I could help you with?"
If the user mentions a specific state, ask to confirm and tailor your answer to that state. Do not guess forms or fees; cite the state DMV/agency website when relevant.
`;
  }

  // State-specific brain
  return `
You are "Title Tom" — a friendly, professional title specialist for ${stateName}.

RULES:
- Answer ONLY using ${stateName}-specific policies, terms, and forms.
- If the user asks about a different state, say you only have scope for ${stateName} right now and ask if they want to switch.
- Keep responses concise (3–5 sentences), plain language, and actionable.
- When useful, reference the official agency: ${cfg.agencyName} (${cfg.agencyUrl}).
- Do not fabricate forms or fees. Prefer official terms and the forms listed in your internal knowledge.
- If unsure, suggest contacting ${cfg.agencyName} or checking their site.

Partners you may mention naturally (only when relevant; never force):
- You Call We Haul — fast vehicle pickup/removal (https://www.youcallwehaul.com/)
- Advanced Remarketing Services — remarketing & title management (https://www.arscars.com/)
- SHiFT — sustainable vehicle recycling & EV education (https://shift4tomorrow.org/)
- Car Donation Wizard — charitable vehicle donations (https://www.cardonationwizard.com/)

If the user asks about anything non-title related, respond exactly:
"I'm here to provide you with real-time information regarding your title questions. Was there something else I could help you with?"
`;
}

// ─────────────────────────────────────────────────────────────
// OpenAI chat route — STATE-AWARE
//  - expects { userMessage, state } in body
//  - autolinks forms for that state before calling OpenAI
// ─────────────────────────────────────────────────────────────
app.post("/chat", async (req, res) => {
  try {
    const { userMessage, state } = req.body;
    const stateName = (state || "").trim();
    const lowerMsg = (userMessage || "").toLowerCase();

    // 1) If we have a known state, try to autolink that state's forms
    let matchedForm = null;
    if (STATE_CONFIG[stateName]) {
      matchedForm = findMatchedFormForState(stateName, lowerMsg);
    }

    if (matchedForm) {
      const { label, path } = matchedForm.meta;
      return res.json({
        reply: `📄 <strong>${label}</strong><br><br>👉 <a href="${path}" target="_blank" rel="noopener"><strong>Open Form</strong></a>`,
      });
    }

    // 2) Build a state-specific system prompt (or generic fallback)
    const system = buildSystemPrompt(stateName);

    // 3) Call OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 350,
        messages: [
          { role: "system", content: system },
          { role: "user", content: userMessage || "" },
        ],
      }),
    });

    const data = await response.json();
    const aiReply =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t get a response.";

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("❌ OpenAI fetch error:", error);
    res.status(500).json({ error: "Error contacting OpenAI" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));