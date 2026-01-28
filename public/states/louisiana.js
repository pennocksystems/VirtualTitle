export default function () {

  // Forms specific to Louisiana (OMV / DPSMV Forms)
  const formLibrary = {
    "dpsmv-1799": {
      label: "DPSMV 1799 - Vehicle Application (Title & Registration)",
      path: "https://library.expresslane.org/omv/form/dpsmv-1799"
    },

    "dpsmv-1658": {
      label: "DPSMV 1658 - Notice of Transfer (Seller's Report of Sale)",
      path: "https://library.expresslane.org/omv/form/dpsmv-1658"
    },

    "dpsmv-1696": {
      label: "DPSMV 1696 - Affidavit of Heirship (Deceased Owner)",
      path: "https://library.expresslane.org/omv/form/dpsmv-1696"
    },

    "dpsmv-1637": {
      label: "DPSMV 1637 - Salvage-Reconstructed Motor Vehicle Application",
      path: "https://library.expresslane.org/omv/form/dpsmv-1637"
    },

    "bill-of-sale": {
      label: "Louisiana Notarized Bill of Sale",
      path: "https://library.expresslane.org/omv/form/bill-of-sale"
    }
  };

  // LA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Louisiana title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> Your state requires a notary signature. You must sign the title in the presence of a notary public.
        </li>
        <li>
          <strong>Seller Section:</strong> All sellers listed on the front must print and sign their names <strong>EXACTLY</strong> as they appear on the front of the title.
        </li>
        <li>
          Car Donation Wizard Louisiana Title Tips:
          <a href="https://www.cardonationwizard.com/title/19/louisiana-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: Remove your license plates before the car is picked up. You can keep them or return them to an OMV office.</em>
    `,

    "No Title or Missing Title": `
  If your Louisiana title is lost, stolen, or mutilated, you must apply for a duplicate via form <strong>DPSMV 1799</strong>.
  <ul>
    <li>
      <strong>Notary Required:</strong> The "Duplicate Title Affidavit" section of the application <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Fees:</strong> The standard duplicate title fee is <strong>$68.50</strong> plus a variable handling fee (usually $8.00).
    </li>
    <li>
      <strong>How to Apply:</strong> You can submit the application in person at an OMV office, a Public Tag Agency, or by mail to the Baton Rouge headquarters.
    </li>
  </ul>
  <br>
  Donating? If your title is missing, we can help you prepare the DPSMV 1799 correctly. Email us at titles@arscars.com for assistance!
`,

    "How to Get Title for Deceased Owner": `
      Louisiana uses the <strong>Affidavit of Heirship (DPSMV 1696)</strong> to confirm ownership interest for heirs.
      <ul>
        <li>
          <strong>The Affidavit:</strong> This form must be completed by all heirs and <strong>notarized</strong>.
        </li>
        <li>
          <strong>Transfer:</strong> If there is a surviving spouse, they are typically the only one required to execute a notarized Bill of Sale to a new owner, provided the Affidavit of Heirship is attached.
        </li>
        <li>
          A copy of the Death Certificate or a published obituary must be attached to the application.
        </li>
        <li>
          Download LA Heirship Form:
          <a href="https://library.expresslane.org/omv/form/dpsmv-1696"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form DPSMV 1696
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Louisiana requires a salvage title if a vehicle is declared a "total loss" due to damage exceeding 75% of its market value.
      <ul>
        <li>Owners or insurance companies must apply using form <strong>DPSMV 1637</strong> within 30 days of settlement.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Physical Inspection</strong> by an OMV officer.</li>
        <li>The resulting title will be branded as <strong>"RECONSTRUCTED"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Louisiana:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is lost, you must obtain a <strong>Lien Release Letter</strong> on the lender's letterhead (including VIN, year, make, and owner's name) or a notarized <strong>Affidavit of Non-Possession</strong>.</li>
        <li>A clear title fee of roughly <strong>$76.50</strong> (title + handling) is usually required to remove the lien from the state records.</li>
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
    stateName: "Louisiana",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}