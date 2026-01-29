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
Florida: {
  code: "FL",
  agencyName: "Florida Department of Highway Safety and Motor Vehicles",
  agencyUrl: "https://www.flhsmv.gov/",
  forms: {
    "82040": {
      label: "Form 82040 (Application for Certificate of Title With/Without Registration) — Florida",
      path: "https://www.flhsmv.gov/pdf/forms/82040.pdf",
    },
    "82101": {
      label: "Form 82101 (Application for Duplicate or Lost in Transit Title Certificate) — Florida",
      path: "https://www.flhsmv.gov/pdf/forms/82101.pdf",
    },
    "82053": {
      label: "Form 82053 (Power of Attorney) — Florida",
      path: "https://www.flhsmv.gov/pdf/forms/82053.pdf",
    },
    "82050": {
      label: "Form 82050 (Notice of Sale / Bill of Sale) — Florida",
      path: "https://www.flhsmv.gov/pdf/forms/82050.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "82101" },
    { keyword: "replacement", code: "82101" },
    { keyword: "lost title", code: "82101" },
    { keyword: "original title", code: "82040" },
    { keyword: "transfer", code: "82040" },
    { keyword: "power of attorney", code: "82053" },
    { keyword: "bill of sale", code: "82050" },
  ],
},
Colorado: {
  code: "CO",
  agencyName: "Colorado Department of Revenue (Division of Motor Vehicles)",
  agencyUrl: "https://dmv.colorado.gov/",
  forms: {
    "DR 2395": {
      label: "Form DR 2395 (Application for Title and/or Registration) — Colorado",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR2395_0.pdf",
    },
    "DR 2539A": {
      label: "Form DR 2539A (Duplicate Title/Lien Request and Receipt) — Colorado",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR_2539A.pdf",
    },
    "DR 2175": {
      label: "Form DR 2175 (Motor Vehicle Power of Attorney) — Colorado",
      path: "https://dmv.colorado.gov/sites/dmv/files/DR2175.pdf",
    },
    "DR 2444": {
      label: "Form DR 2444 (Statement of Fact) — Colorado",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR%202444_e_wo.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "DR 2539A" },
    { keyword: "replacement", code: "DR 2539A" },
    { keyword: "lost title", code: "DR 2539A" },
    { keyword: "new title", code: "DR 2395" },
    { keyword: "registration", code: "DR 2395" },
    { keyword: "power of attorney", code: "DR 2175" },
    { keyword: "statement of fact", code: "DR 2444" },
  ],
},
Connecticut: {
  code: "CT",
  agencyName: "Connecticut Department of Motor Vehicles",
  agencyUrl: "https://portal.ct.gov/dmv",
  forms: {
    "H-13B": {
      label: "Form H-13B (Registration and Title Application) — Connecticut",
      path: "https://portal.ct.gov/-/media/dmv/20/29/h13bpdf.pdf",
    },
    "H-6B": {
      label: "Form H-6B (Application for Replacement Certificate of Title) — Connecticut",
      path: "https://portal.ct.gov/-/media/dmv/20/29/h6bpdf.pdf",
    },
    "A-83": {
      label: "Form A-83 (Special Power of Attorney) — Connecticut",
      path: "https://portal.ct.gov/-/media/dmv/20/29/a83pdf.pdf",
    },
    "H-31": {
      label: "Form H-31 (Bill of Sale) — Connecticut",
      path: "https://portal.ct.gov/-/media/dmv/20/29/h31pdf.pdf",
    },
    "Q-1": {
      label: "Form Q-1 (Supplemental Assignment of Ownership) — Connecticut",
      path: "https://portal.ct.gov/-/media/dmv/20/29/q1pdf.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "H-6B" },
    { keyword: "replacement", code: "H-6B" },
    { keyword: "lost title", code: "H-6B" },
    { keyword: "new title", code: "H-13B" },
    { keyword: "registration", code: "H-13B" },
    { keyword: "power of attorney", code: "A-83" },
    { keyword: "bill of sale", code: "H-31" },
    { keyword: "transfer ownership", code: "Q-1" },
  ],
},
Delaware: {
  code: "DE",
  agencyName: "Delaware Division of Motor Vehicles",
  agencyUrl: "https://dmv.de.gov/",
  forms: {
    "MV-212": {
      label: "Form MV-212 (Application for Title) — Delaware",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_mv212.pdf",
    },
    "MV-213": {
      label: "Form MV-213 (Application for Duplicate Title) — Delaware",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_mv213.pdf",
    },
    "MV-386": {
      label: "Form MV-386 (Power of Attorney to Transfer a Motor Vehicle Title) — Delaware",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_poa.pdf",
    },
    "MV-35": {
      label: "Form MV-35 (Request of Title from Lienholder to DMV) — Delaware",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_mv35.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "MV-213" },
    { keyword: "replacement", code: "MV-213" },
    { keyword: "lost title", code: "MV-213" },
    { keyword: "new title", code: "MV-212" },
    { keyword: "registration", code: "MV-212" },
    { keyword: "power of attorney", code: "MV-386" },
    { keyword: "lienholder request", code: "MV-35" },
  ],
},
Georgia: {
  code: "GA",
  agencyName: "Georgia Department of Revenue (Motor Vehicle Division)",
  agencyUrl: "https://dor.georgia.gov/motor-vehicles",
  forms: {
    "MV-1": {
      label: "Form MV-1 (Motor Vehicle Title/Tag Application) — Georgia",
      path: "https://dor.georgia.gov/document/document/mv-1-dor-motor-vehicle-titletag-application-revised-6-2020/download",
    },
    "T-8": {
      label: "Form T-8 (Limited Power of Attorney) — Georgia",
      path: "https://dor.georgia.gov/document/form/t-8limitedpowerofattorneypdf/download",
    },
    "T-7": {
      label: "Form T-7 (Bill of Sale) — Georgia",
      path: "https://dor.georgia.gov/document/form/t-7billofsalepdf/download",
    },
    "T-4": {
      label: "Form T-4 (Lien Release) — Georgia",
      path: "https://dor.georgia.gov/document/form/t-4lienreleasepdf/download",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "MV-1" },
    { keyword: "replacement", code: "MV-1" },
    { keyword: "lost title", code: "MV-1" },
    { keyword: "new title", code: "MV-1" },
    { keyword: "registration", code: "MV-1" },
    { keyword: "power of attorney", code: "T-8" },
    { keyword: "bill of sale", code: "T-7" },
    { keyword: "lien release", code: "T-4" },
  ],
},
Hawaii: {
  code: "HI",
  agencyName: "City and County of Honolulu (Department of Customer Services)",
  agencyUrl: "https://www.honolulu.gov/csd/mvehicle.html",
  forms: {
    "CS-L(MVR)1": {
      label: "Form CS-L(MVR)1 (Application for Registration) — Honolulu",
      path: "https://www.honolulu.gov/csd/wp-content/uploads/sites/6/2023/09/CS-LMVR1-fillable-form.pdf",
    },
    "CS-L(MVR)10": {
      label: "Form CS-L(MVR)10 (Application for Duplicate Motor Vehicle Title) — Honolulu",
      path: "https://www.honolulu.gov/csd/wp-content/uploads/sites/6/2024/01/CS-LMVR10_fillable.pdf",
    },
    "CS-L(MVR)5": {
      label: "Form CS-L(MVR)5 (Application for Duplicate Certificate of Registration) — Honolulu",
      path: "https://www.honolulu.gov/csd/wp-content/uploads/sites/6/2023/09/CS-LMVR5-fillable-form.pdf",
    },
    "G-27": {
      label: "Form G-27 (Motor Vehicle Use Tax Certification) — Hawaii State",
      path: "https://files.hawaii.gov/tax/forms/2023/g27.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate title", code: "CS-L(MVR)10" },
    { keyword: "lost title", code: "CS-L(MVR)10" },
    { keyword: "duplicate registration", code: "CS-L(MVR)5" },
    { keyword: "new title", code: "CS-L(MVR)1" },
    { keyword: "transfer", code: "CS-L(MVR)1" },
    { keyword: "use tax", code: "G-27" },
  ],
},
Idaho: {
  code: "ID",
  agencyName: "Idaho Transportation Department (Division of Motor Vehicles)",
  agencyUrl: "https://itd.idaho.gov/dmv/",
  forms: {
    "ITD 3337": {
      label: "Form ITD 3337 (Application for Certificate of Title) — Idaho",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/04/3337.pdf",
    },
    "ITD 3367": {
      label: "Form ITD 3367 (Duplicate Idaho Title Application) — Idaho",
      path: "https://itd.idaho.gov/wp-content/uploads/2021/09/3367.pdf",
    },
    "ITD 3738": {
      label: "Form ITD 3738 (Bill of Sale) — Idaho",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/03/3738.pdf",
    },
    "ITD 3368": {
      label: "Form ITD 3368 (Limited Power of Attorney) — Idaho",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/03/3368.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "ITD 3367" },
    { keyword: "replacement", code: "ITD 3367" },
    { keyword: "lost title", code: "ITD 3367" },
    { keyword: "new title", code: "ITD 3337" },
    { keyword: "registration", code: "ITD 3337" },
    { keyword: "bill of sale", code: "ITD 3738" },
    { keyword: "power of attorney", code: "ITD 3368" },
  ],
},
Illinois: {
  code: "IL",
  agencyName: "Illinois Secretary of State (Vehicle Services Department)",
  agencyUrl: "https://www.ilsos.gov/",
  forms: {
    "VSD 190": {
      label: "Form VSD 190 (Application for Vehicle Transaction) — Illinois",
      path: "https://www.ilsos.gov/publications/pdf_publications/vsd190.pdf",
    },
    "RT-5": {
      label: "Form RT-5 (Motor Vehicle Power of Attorney) — Illinois",
      path: "https://www.ilsos.gov/publications/pdf_publications/rt5.pdf",
    },
    "VSD 657": {
      label: "Form VSD 657 (Electronic Registration and Title Application) — Illinois",
      path: "https://www.ilsos.gov/publications/pdf_publications/vsd657.pdf",
    },
    "RUT-50": {
      label: "Form RUT-50 (Private Party Vehicle Use Tax Transaction Return) — Illinois",
      path: "https://tax.illinois.gov/content/dam/soi/en/web/tax/forms/sales/documents/rut-50-instr.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "VSD 190" },
    { keyword: "replacement", code: "VSD 190" },
    { keyword: "lost title", code: "VSD 190" },
    { keyword: "new title", code: "VSD 190" },
    { keyword: "registration", code: "VSD 190" },
    { keyword: "power of attorney", code: "RT-5" },
    { keyword: "tax", code: "RUT-50" },
    { keyword: "electronic title", code: "VSD 657" },
  ],
},
Indiana: {
  code: "IN",
  agencyName: "Indiana Bureau of Motor Vehicles (BMV)",
  agencyUrl: "https://www.in.gov/bmv/",
  forms: {
    "205": {
      label: "Form 205 (Application for Certificate of Title) — Indiana",
      path: "https://forms.in.gov/Download.aspx?id=12817",
    },
    "1940": {
      label: "Form 1940 (Limited Power of Attorney) — Indiana",
      path: "https://forms.in.gov/download.aspx?id=5592",
    },
    "44237": {
      label: "Form 44237 (Bill of Sale) — Indiana",
      path: "https://forms.in.gov/Download.aspx?id=5521",
    },
    "1014": {
      label: "Form 1014 (Request for Title from Lienholder) — Indiana",
      path: "https://forms.in.gov/Download.aspx?id=5367",
    },
    "43230": {
      label: "Form 43230 (Odometer Disclosure Statement) — Indiana",
      path: "https://forms.in.gov/Download.aspx?id=5165",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "205" },
    { keyword: "replacement", code: "205" },
    { keyword: "lost title", code: "205" },
    { keyword: "new title", code: "205" },
    { keyword: "registration", code: "205" },
    { keyword: "power of attorney", code: "1940" },
    { keyword: "bill of sale", code: "44237" },
    { keyword: "odometer", code: "43230" },
    { keyword: "lienholder request", code: "1014" },
  ],
},
Iowa: {
  code: "IA",
  agencyName: "Iowa Department of Transportation (Motor Vehicle Division)",
  agencyUrl: "https://iowadot.gov/mvd",
  forms: {
    "411007": {
      label: "Form 411007 (Application for Certificate of Title and/or Registration) — Iowa",
      path: "https://iowadot.gov/forms/index.aspx?formid=411007",
    },
    "411033": {
      label: "Form 411033 (Application for Replacement of Iowa Certificate of Title) — Iowa",
      path: "https://iowadot.gov/forms/index.aspx?formid=411033",
    },
    "411021": {
      label: "Form 411021 (Power of Attorney Authorization) — Iowa",
      path: "https://iowadot.gov/forms/index.aspx?formid=411021",
    },
    "Bill of Sale": {
      label: "Bill of Sale (State Standard) — Iowa",
      path: "https://www.iowatreasurers.org/files/Bill%20of%20Sale.pdf",
    },
    "411065": {
      label: "Form 411065 (Damage Disclosure Statement) — Iowa",
      path: "https://iowadot.gov/forms/index.aspx?formid=411065",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "411033" },
    { keyword: "replacement", code: "411033" },
    { keyword: "lost title", code: "411033" },
    { keyword: "new title", code: "411007" },
    { keyword: "registration", code: "411007" },
    { keyword: "power of attorney", code: "411021" },
    { keyword: "bill of sale", code: "Bill of Sale" },
    { keyword: "damage disclosure", code: "411065" },
  ],
},
Kansas: {
  code: "KS",
  agencyName: "Kansas Department of Revenue (Division of Vehicles)",
  agencyUrl: "https://www.ksrevenue.gov/dovforms.html",
  forms: {
    "TR-212a": {
      label: "Form TR-212a (Title and Registration Manual Application) — Kansas",
      path: "https://www.ksrevenue.gov/pdf/tr212.pdf",
    },
    "TR-720B": {
      label: "Form TR-720B (Manual Application for Duplicate, Secured, or Reissued Title) — Kansas",
      path: "https://www.ksrevenue.gov/pdf/tr720b.pdf",
    },
    "TR-41": {
      label: "Form TR-41 (Power of Attorney) — Kansas",
      path: "https://www.ksrevenue.gov/pdf/tr41.pdf",
    },
    "TR-312": {
      label: "Form TR-312 (Bill of Sale) — Kansas",
      path: "https://www.ksrevenue.gov/pdf/tr312.pdf",
    },
    "TR-59": {
      label: "Form TR-59 (Odometer Disclosure Statement) — Kansas",
      path: "https://www.ksrevenue.gov/pdf/tr59.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "TR-720B" },
    { keyword: "replacement", code: "TR-720B" },
    { keyword: "lost title", code: "TR-720B" },
    { keyword: "new title", code: "TR-212a" },
    { keyword: "registration", code: "TR-212a" },
    { keyword: "power of attorney", code: "TR-41" },
    { keyword: "bill of sale", code: "TR-312" },
    { keyword: "odometer", code: "TR-59" },
  ],
},
Kentucky: {
  code: "KY",
  agencyName: "Kentucky Transportation Cabinet (Department of Vehicle Regulation)",
  agencyUrl: "https://drive.ky.gov/",
  forms: {
    "TC 96-182": {
      label: "Form TC 96-182 (Application for Kentucky Certificate of Title or Registration) — Kentucky",
      path: "https://transportation.ky.gov/Organizational-Resources/Forms/TC%2096-182.pdf",
    },
    "TC 96-336": {
      label: "Form TC 96-336 (Limited Power of Attorney) — Kentucky",
      path: "https://transportation.ky.gov/Organizational-Resources/Forms/TC%2096-336.pdf",
    },
    "TC 96-167": {
      label: "Form TC 96-167 (Affidavit for Replacement or Non-Exchange) — Kentucky",
      path: "https://transportation.ky.gov/Organizational-Resources/Forms/TC%2096-167.pdf",
    },
    "TC 96-187": {
      label: "Form TC 96-187 (Title Lien Statement) — Kentucky",
      path: "https://transportation.ky.gov/Organizational-Resources/Forms/TC%2096-187.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "TC 96-182" },
    { keyword: "replacement", code: "TC 96-182" },
    { keyword: "lost title", code: "TC 96-182" },
    { keyword: "new title", code: "TC 96-182" },
    { keyword: "registration", code: "TC 96-182" },
    { keyword: "power of attorney", code: "TC 96-336" },
    { keyword: "plate replacement", code: "TC 96-167" },
    { keyword: "lien", code: "TC 96-187" },
  ],
},
Louisiana: {
  code: "LA",
  agencyName: "Louisiana Office of Motor Vehicles (OMV)",
  agencyUrl: "https://www.expresslane.org/",
  forms: {
    "DPSMV 1799": {
      label: "Form DPSMV 1799 (Vehicle Application) — Louisiana",
      path: "https://public.powerdms.com/LADPSC/documents/355820",
    },
    "DPSMV 1606": {
      label: "Bill of Sale of a Movable — Louisiana",
      path: "https://www.expresslane.org/wp-content/uploads/BillofSale.pdf",
    },
    "DPSMV 1697": {
      label: "Form DPSMV 1697 (Notice of Vehicle Transfer) — Louisiana",
      path: "https://www.expresslane.org/wp-content/uploads/NoticeofTransfer.pdf",
    },
    "LPOA": {
      label: "Limited Power of Attorney — Louisiana",
      path: "https://www.expresslane.org/wp-content/uploads/LimitedPowerofAttorney.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "DPSMV 1799" },
    { keyword: "replacement", code: "DPSMV 1799" },
    { keyword: "lost title", code: "DPSMV 1799" },
    { keyword: "new title", code: "DPSMV 1799" },
    { keyword: "registration", code: "DPSMV 1799" },
    { keyword: "bill of sale", code: "DPSMV 1606" },
    { keyword: "transfer notice", code: "DPSMV 1697" },
    { keyword: "power of attorney", code: "LPOA" },
  ],
},
Maine: {
  code: "ME",
  agencyName: "Maine Bureau of Motor Vehicles (BMV)",
  agencyUrl: "https://www.maine.gov/sos/bmv/",
  forms: {
    "MVT-2": {
      label: "Form MVT-2 (Application for Certificate of Title) — Maine",
      path: "https://www.maine.gov/sos/sites/maine.gov.sos/files/content/assets/MVT-2-20Title-20Application-20Rev-203-23.pdf",
    },
    "MVT-8": {
      label: "Form MVT-8 (Application for Replacement Certificate of Title) — Maine",
      path: "https://www.maine.gov/sos/sites/maine.gov.sos/files/content/assets/MVT-8-20Duplicate-20Title-20Application-2010-2023.pdf",
    },
    "MVT-16": {
      label: "Form MVT-16 (Notice of Vehicle Transfer) — Maine",
      path: "https://www.maine.gov/sos/bmv/forms/MVT-16.pdf",
    },
    "BMV-POA": {
      label: "Motor Vehicle Power of Attorney — Maine",
      path: "https://www.maine.gov/sos/bmv/forms/POA.pdf",
    },
    "Bill of Sale": {
      label: "Maine Vehicle Bill of Sale",
      path: "https://www.maine.gov/sos/bmv/forms/billofsale.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "MVT-8" },
    { keyword: "replacement", code: "MVT-8" },
    { keyword: "lost title", code: "MVT-8" },
    { keyword: "new title", code: "MVT-2" },
    { keyword: "registration", code: "MVT-2" },
    { keyword: "power of attorney", code: "BMV-POA" },
    { keyword: "bill of sale", code: "Bill of Sale" },
    { keyword: "transfer", code: "MVT-16" },
  ],
},
Maryland: {
  code: "MD",
  agencyName: "Maryland Motor Vehicle Administration (MVA)",
  agencyUrl: "https://mva.maryland.gov/",
  forms: {
    "VR-005": {
      label: "Form VR-005 (Application for Certificate of Title) — Maryland",
      path: "https://mva.maryland.gov/Documents/VR-005.pdf",
    },
    "VR-018": {
      label: "Form VR-018 (Application for Duplicate Certificate of Title) — Maryland",
      path: "https://mva.maryland.gov/Documents/VR-018.pdf",
    },
    "VR-470": {
      label: "Form VR-470 (Restricted Power of Attorney) — Maryland",
      path: "https://mva.maryland.gov/Documents/VR-470.pdf",
    },
    "VR-181": {
      label: "Form VR-181 (Bill of Sale) — Maryland",
      path: "https://mva.maryland.gov/Documents/VR-181.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "VR-018" },
    { keyword: "replacement", code: "VR-018" },
    { keyword: "lost title", code: "VR-018" },
    { keyword: "new title", code: "VR-005" },
    { keyword: "registration", code: "VR-005" },
    { keyword: "power of attorney", code: "VR-470" },
    { keyword: "bill of sale", code: "VR-181" },
  ],
},
Massachusetts: {
  code: "MA",
  agencyName: "Massachusetts Registry of Motor Vehicles (RMV)",
  agencyUrl: "https://www.mass.gov/orgs/identity-and-registry-services",
  forms: {
    "RTA": {
      label: "Registration and Title Application — Massachusetts",
      path: "https://www.mass.gov/doc/registration-and-title-application/download",
    },
    "T20558": {
      label: "Form T20558 (Application for Duplicate Certificate of Title) — Massachusetts",
      path: "https://www.mass.gov/doc/application-for-duplicate-certificate-of-title/download",
    },
    "TTLREG109": {
      label: "Form TTLREG109 (Vehicle Owner's Limited Power of Attorney) — Massachusetts",
      path: "https://www.mass.gov/doc/limited-power-of-attorney/download",
    },
    "MVU-24": {
      label: "Form MVU-24 (Gift Affidavit for Motor Vehicle) — Massachusetts",
      path: "https://www.mass.gov/doc/mvu-24-affidavit-in-support-of-a-claim-for-exemption-from-sales-or-use-tax-for-a-motor-vehicle/download",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "T20558" },
    { keyword: "replacement", code: "T20558" },
    { keyword: "lost title", code: "T20558" },
    { keyword: "new title", code: "RTA" },
    { keyword: "registration", code: "RTA" },
    { keyword: "power of attorney", code: "TTLREG109" },
    { keyword: "gift", code: "MVU-24" },
    { keyword: "tax exemption", code: "MVU-24" },
  ],
},
Michigan: {
  code: "MI",
  agencyName: "Michigan Secretary of State",
  agencyUrl: "https://www.michigan.gov/sos",
  forms: {
    "TR-11L": {
      label: "Form TR-11L (Application for Michigan Vehicle Title) — Michigan",
      path: "https://www.michigan.gov/-/media/Project/Websites/sos/27lawensn/tr11L.pdf",
    },
    "TR-128": {
      label: "Form TR-128 (Appointment of Agent) — Michigan",
      path: "https://www.michigan.gov/-/media/Project/Websites/sos/27lawensn/tr128.pdf",
    },
    "TR-207": {
      label: "Form TR-207 (Bill of Sale for Trailer/Watercraft/Snowmobile) — Michigan",
      path: "https://www.michigan.gov/-/media/Project/Websites/sos/24lawensn/tr207.pdf",
    },
    "RD-108": {
      label: "Form RD-108 (Application for Title and Registration - Dealer Use) — Michigan",
      path: "https://www.michigan.gov/-/media/Project/Websites/sos/05preston/RD-108_MI.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "TR-11L" },
    { keyword: "replacement", code: "TR-11L" },
    { keyword: "lost title", code: "TR-11L" },
    { keyword: "new title", code: "TR-11L" },
    { keyword: "registration", code: "TR-11L" },
    { keyword: "appointment of agent", code: "TR-128" },
    { keyword: "power of attorney", code: "TR-128" },
    { keyword: "bill of sale", code: "TR-207" },
  ],
},
Minnesota: {
  code: "MN",
  agencyName: "Minnesota Department of Public Safety (Driver and Vehicle Services)",
  agencyUrl: "https://dps.mn.gov/divisions/dvs",
  forms: {
    "PS2000": {
      label: "Form PS2000 (Application to Title and Register a Motor Vehicle) — Minnesota",
      path: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/MV_ApplicationtoTitleandRegisterMotorVehicle.pdf",
    },
    "PS2067A": {
      label: "Form PS2067A (Application for Duplicate Title, Registration, Cab or Lien Card) — Minnesota",
      path: "https://s3.us-east-2.amazonaws.com/assets.dps.mn.gov/s3fs-public/migrated-files/divisions/dvs/forms-documents/Documents/MV_DuplicateTitle_Reg_Cab_LienCard_Application.pdf",
    },
    "PS2046": {
      label: "Form PS2046 (Motor Vehicle Power of Attorney) — Minnesota",
      path: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/MV_PowerofAttorney.pdf",
    },
    "PS2063": {
      label: "Form PS2063 (Notice of Sale / Affidavit of Sale) — Minnesota",
      path: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/MV_ReportVehicleSoldDonatedRemovedfromState.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "PS2067A" },
    { keyword: "replacement", code: "PS2067A" },
    { keyword: "lost title", code: "PS2067A" },
    { keyword: "new title", code: "PS2000" },
    { keyword: "registration", code: "PS2000" },
    { keyword: "power of attorney", code: "PS2046" },
    { keyword: "sold notice", code: "PS2063" },
    { keyword: "report sale", code: "PS2063" },
  ],
},
Mississippi: {
  code: "MS",
  agencyName: "Mississippi Department of Revenue (Motor Vehicle Services)",
  agencyUrl: "https://www.dor.ms.gov/motor-vehicle",
  forms: {
    "78-002": {
      label: "Form 78-002 (Application for Certificate of Title) — Mississippi",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78002178.pdf",
    },
    "78-006": {
      label: "Form 78-006 (Application for Replacement Certificate of Title) — Mississippi",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78006178_0.pdf",
    },
    "78-026": {
      label: "Form 78-026 (Fast Track Replacement Certificate of Title) — Mississippi",
      path: "https://www.dor.ms.gov/sites/default/files/motor-vehicle-services/78026178%20Fast%20Track%20Application%20for%20Replacement%20Certificate%20of%20Title.pdf",
    },
    "78-003": {
      label: "Form 78-003 (Power of Attorney to Transfer Motor Vehicle) — Mississippi",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78003218.pdf",
    },
    "78-015": {
      label: "Form 78-015 (Odometer Disclosure Statement) — Mississippi",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78015178.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "78-006" },
    { keyword: "replacement", code: "78-006" },
    { keyword: "fast track", code: "78-026" },
    { keyword: "expedited", code: "78-026" },
    { keyword: "lost title", code: "78-006" },
    { keyword: "new title", code: "78-002" },
    { keyword: "power of attorney", code: "78-003" },
    { keyword: "odometer", code: "78-015" },
  ],
},
Missouri: {
  code: "MO",
  agencyName: "Missouri Department of Revenue (Motor Vehicle Bureau)",
  agencyUrl: "https://dor.mo.gov/motor-vehicle/",
  forms: {
    "108": {
      label: "Form 108 (Application for Missouri Title and License) — Missouri",
      path: "https://dor.mo.gov/forms/108.pdf",
    },
    "4809": {
      label: "Form 4809 (Notice of Lien, Lien Release, or Authorization) — Missouri",
      path: "https://dor.mo.gov/forms/4809.pdf",
    },
    "4377": {
      label: "Form 4377 (Power of Attorney) — Missouri",
      path: "https://dor.mo.gov/forms/4377.pdf",
    },
    "1957": {
      label: "Form 1957 (Bill of Sale) — Missouri",
      path: "https://dor.mo.gov/forms/1957.pdf",
    },
    "2519": {
      label: "Form 2519 (Request for Receipt of Title or Registration) — Missouri",
      path: "https://dor.mo.gov/forms/2519.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "108" },
    { keyword: "replacement", code: "108" },
    { keyword: "lost title", code: "108" },
    { keyword: "new title", code: "108" },
    { keyword: "registration", code: "108" },
    { keyword: "lien release", code: "4809" },
    { keyword: "power of attorney", code: "4377" },
    { keyword: "bill of sale", code: "1957" },
    { keyword: "receipt", code: "2519" },
  ],
},
Montana: {
  code: "MT",
  agencyName: "Montana Department of Justice (Motor Vehicle Division)",
  agencyUrl: "https://mvdmt.gov/",
  forms: {
    "MV1": {
      label: "Form MV1 (Application for Certificate of Title for a Motor Vehicle) — Montana",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV1-Application-for-Certificate-of-Title-for-a-Motor-Vehicle-Fillable.pdf",
    },
    "MV7": {
      label: "Form MV7 (Application for Replacement Certificate of Title) — Montana",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV7-Application-for-Replacement-Certificate-of-Title-Fillable-1.pdf",
    },
    "MV65": {
      label: "Form MV65 (Power of Attorney) — Montana",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV65-Power-of-Attorney-Fillable.pdf",
    },
    "MV24": {
      label: "Form MV24 (Bill of Sale) — Montana",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV24-Bill-of-Sale-Fillable.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "MV7" },
    { keyword: "replacement", code: "MV7" },
    { keyword: "lost title", code: "MV7" },
    { keyword: "new title", code: "MV1" },
    { keyword: "registration", code: "MV1" },
    { keyword: "power of attorney", code: "MV65" },
    { keyword: "bill of sale", code: "MV24" },
  ],
},
Nebraska: {
  code: "NE",
  agencyName: "Nebraska Department of Motor Vehicles",
  agencyUrl: "https://dmv.nebraska.gov/",
  forms: {
    "RV-707": {
      label: "Form RV-707 (Application for Certificate of Title) — Nebraska",
      path: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/titleapp.pdf",
    },
    "RV-707a": {
      label: "Form RV-707a (Application for Duplicate Certificate of Title) — Nebraska",
      path: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/dupttlapp.pdf",
    },
    "DMV-POA": {
      label: "Power of Attorney (Vehicle/Motorboat Only) — Nebraska",
      path: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/poa.pdf",
    },
    "Form 6": {
      label: "Form 6 (Nebraska Sales/Use Tax and Tire Fee Statement) — Nebraska",
      path: "https://revenue.nebraska.gov/sites/default/files/doc/tax-forms/f_6.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "RV-707a" },
    { keyword: "replacement", code: "RV-707a" },
    { keyword: "lost title", code: "RV-707a" },
    { keyword: "new title", code: "RV-707" },
    { keyword: "registration", code: "RV-707" },
    { keyword: "power of attorney", code: "DMV-POA" },
    { keyword: "sales tax", code: "Form 6" },
  ],
},
Nevada: {
  code: "NV",
  agencyName: "Nevada Department of Motor Vehicles",
  agencyUrl: "https://dmv.nv.gov/",
  forms: {
    "VP 222": {
      label: "Form VP 222 (Application for Vehicle Registration) — Nevada",
      path: "https://dmv.nv.gov/pdfforms/vp222.pdf",
    },
    "VP 012": {
      label: "Form VP 012 (Application for Duplicate Nevada Certificate of Title) — Nevada",
      path: "https://dmv.nv.gov/pdfforms/vp012.pdf",
    },
    "VP 136": {
      label: "Form VP 136 (Power of Attorney) — Nevada",
      path: "https://dmv.nv.gov/pdfforms/vp136.pdf",
    },
    "VP 104": {
      label: "Form VP 104 (Bill of Sale) — Nevada",
      path: "https://dmv.nv.gov/pdfforms/vp104.pdf",
    },
    "VP 265": {
      label: "Form VP 265 (Application for Expedited Processing of Nevada Title) — Nevada",
      path: "https://dmv.nv.gov/pdfforms/vp265.pdf",
    },
  },
  keywordMap: [
    { keyword: "duplicate", code: "VP 012" },
    { keyword: "replacement", code: "VP 012" },
    { keyword: "lost title", code: "VP 012" },
    { keyword: "new title", code: "VP 222" },
    { keyword: "registration", code: "VP 222" },
    { keyword: "power of attorney", code: "VP 136" },
    { keyword: "bill of sale", code: "VP 104" },
    { keyword: "expedited", code: "VP 265" },
    { keyword: "rush", code: "VP 265" },
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