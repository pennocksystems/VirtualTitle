export default function () {

  // Forms specific to Pennsylvania (PennDOT MV-series)
  const formLibrary = {
    "mv-1": {
      label: "MV-1 - Application for Certificate of Title (Not available online; must be obtained from an agent)",
      path: "https://www.pa.gov/services/dmv/transfer-vehicle-registration-from-another-state"
    },

    "mv-38o": {
      label: "MV-38O - Application for Duplicate Certificate of Title by Owner",
      path: "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bmv/bmv-forms/mv-38o.pdf"
    },

    "mv-39": {
      label: "MV-39 - Notification of Assignment/Correction of Title Upon Death of Owner",
      path: "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bmv/bmv-forms/mv-39.pdf"
    },

    "mv-4st": {
      label: "MV-4ST - Vehicle Sales and Use Tax Return/Application for Registration",
      path: "https://www.dmv.pa.gov/Pages/FAQ%20Pages/Buying-or-Selling-a-Vehicle-in-PA.aspx"
    },

    "mv-6": {
      label: "MV-6 - Application for Salvage Certificate",
      path: "https://www.pa.gov/services/dmv/submit-a-vehicle-salvage-certificate"
    }
  };

  // PA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Pennsylvania title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> Pennsylvania is very strict. The seller <strong>must</strong> sign the title in the presence of an authorized PennDOT agent or Notary Public. 
        </li>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, complete Section A. All sellers must sign exactly as their names appear on the front.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> In PA, if the title lists multiple owners, <strong>all</strong> owners must sign the title in the presence of a notary to transfer ownership.
        </li>
      </ul>
      
      <em>Important: Remove your license plates! You must return them to PennDOT or transfer them to another vehicle. Do not leave them on the car.</em>
    `,

    "No Title or Missing Title": `
  If your Pennsylvania title is lost or defaced, you must apply for a duplicate via form <strong>MV-38O</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> As of 2026, the standard fee for a duplicate title is <strong>$72.00</strong>.
    </li>
    <li>
      <strong>Notary Required:</strong> The signature(s) on the MV-38O <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Processing:</strong> Duplicate titles are mailed from Harrisburg. If there is an active lien, the title will be sent to the lienholder unless a lien release is provided.
    </li>
  </ul>
  <br>
  Donating? We can help you prepare the MV-38O correctly to avoid delays in the donation process. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Pennsylvania uses form <strong>MV-39</strong> for transfers involving a deceased owner.
      <ul>
        <li>
          <strong>Joint Owners (WROS):</strong> If the title is held by spouses or as "Joint Tenants with Right of Survivorship," the survivor can transfer the title using form <strong>MV-39</strong> and a Death Certificate.
        </li>
        <li>
          <strong>Heirship:</strong> If there is no will and the estate is small, the <strong>Affidavit of Heirship</strong> section of the MV-39 can be used by the next of kin.
        </li>
        <li>
          <strong>Probate:</strong> For larger estates, the Executor must provide <strong>Short Form Certificates</strong> (Letters Testamentary) and sign the title.
        </li>
        <li>
          Download MV-39:
          <a href="https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bmv/bmv-forms/mv-39.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form MV-39
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Pennsylvania, a vehicle is branded salvage if it is "totaled" by an insurance company or the cost of repairs exceeds its value.
      <ul>
        <li>The owner must surrender the title and file form <strong>MV-6</strong> (Application for Salvage Certificate).</li>
        <li>To return a salvage vehicle to the road, it must pass an <strong>Enhanced Vehicle Safety Inspection</strong> at a specialized station.</li>
        <li>The resulting title will be branded as <strong>"RECONSTRUCTED."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Pennsylvania:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> Most modern liens are electronic. Once the loan is paid, the lender releases the lien digitally, and PennDOT automatically mails a clean paper title to you.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Lien Satisfaction" section on the front of the title.</li>
        <li>If the title is lost, you will need a <strong>Lien Release Letter</strong> on the lender's letterhead to accompany your duplicate title application.</li>
      </ul>
    `
  };

  const orderedOptions = [
    "How to Sign My Title",
    "Ask Me Anything",
    "No Title or Missing Title",
    "How to Get Title for Deceased Owner",
    "Applying for Salvage/Nonrepairable Titles",
    "Lien Release"
  ];

  return {
    stateName: "Pennsylvania",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}