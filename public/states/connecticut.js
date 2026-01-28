export default function () {

  // Forms specific to Connecticut
  const formLibrary = {
    "h-13b": {
      label: "H-13B - Application for Registration and Title",
      path: "https://portal.ct.gov/-/media/DMV/20/29/H13Bpdf.pdf"
    },

    "h-6b": {
      label: "H-6B - Application for Replacement Certificate of Title",
      path: "https://portal.ct.gov/-/media/dmv/20/29/h6bpdf.pdf"
    },

    "q-1": {
      label: "Q-1 - Supplemental Assignment of Ownership",
      path: "https://portal.ct.gov/-/media/dmv/20/29/q1pdf.pdf"
    },

    "h-31": {
      label: "H-31 - Bill of Sale",
      path: "https://portal.ct.gov/-/media/DMV/20/29/h31pdf.pdf"
    },

    "b-256": {
      label: "B-256 - Salvage Vehicle Information Sheet",
      path: "https://portal.ct.gov/-/media/dmv/20/29/b256pdf.pdf"
    }
  };

  // CT-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Connecticut title</strong>, use blue or black ink and sign in the "Transfer by Owner" section on the back.
      <ul>
        <li>
          <strong>Check the Conjunction:</strong> If the front says "AND," both owners must sign. If it says "OR," only one is required.
        </li>
        <li>
          Car Donation Wizard CT Title Tips:
          <a href="https://www.cardonationwizard.com/title/6/connecticut-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Official CT DMV Selling Guide:
          <a href="https://portal.ct.gov/dmv/vehicle-services/sell-your-vehicle"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
  If you've lost your Connecticut title, you can request a replacement online or by mail.
  <ul>
    <li>
      <strong>Online Replacement:</strong> Most owners can request a duplicate through the CT DMV portal:
      <a href="https://portal.ct.gov/dmv/vehicle-services/replace-your-title"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Get Started Online
      </a>
    </li>
    <li>
      <strong>Mail-In Option:</strong> Complete Form <strong>H-6B</strong>. If you are selling the car simultaneously, you must also include the <strong>Q-1 Supplemental Assignment</strong>.
    </li>
    <li>
      The replacement fee is currently <strong>$25.00</strong>.
    </li>
  </ul>
  <br>
  Donating? We can assist with the H-6B paperwork. Email us at titles@arscars.com with your vehicle details!
`,

    "How to Get Title for Deceased Owner": `
      In Connecticut, transferring a vehicle from a deceased owner requires specific probate documents.
      <ul>
        <li>
          <strong>Probate Forms:</strong> You will generally need a certified document such as a <strong>PC-160</strong> (Decree) or <strong>PC-450</strong> (Fiduciary's Certificate).
        </li>
        <li>
          The Executor/Administrator must sign the title (or H-6B) and provide a copy of the Death Certificate.
        </li>
        <li>View the full CT DMV list of acceptable probate documents:
          <a href="https://portal.ct.gov/dmv/vehicle-services/transfer-vehicle-deceased-owner"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          CT DMV Deceased Owner Guide
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      If a vehicle is declared "Salvage" in Connecticut, the title must be updated before it can be sold or rebuilt.
      <ul>
        <li>Owners must obtain a replacement title bearing the "Salvage" legend using form <strong>H-6B</strong>.</li>
        <li>For rebuilt vehicles, a <strong>Salvage Inspection</strong> is required at a DMV inspection station (fee is roughly $88).</li>
        <li>Detailed Salvage Info:
          <a href="https://portal.ct.gov/dmv/vehicle-services/salvaged-vehicles"
            target="blank"
            style="color:#3b82f6;text-decoration:underline;">
            CT DMV: Salvaged (Totaled) Vehicles
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Connecticut:
      <ul>
        <li>The lienholder can sign off directly on the front of the original title.</li>
        <li>If the title is lost, a <strong>Lien Release Letter</strong> on the lender's letterhead is required to accompany a duplicate title application (H-6B).</li>
        <li>CT does not require you to get a "clean" title immediately after paying off a loan; you can keep the stamped title and the release letter for future sale.</li>
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
    stateName: "Connecticut",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}