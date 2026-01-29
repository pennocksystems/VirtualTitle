export default function () {

  // Forms specific to North Carolina (NCDMV MVR Forms)
  const formLibrary = {
    "mvr-1": {
      label: "MVR-1 - Title Application",
      path: "https://www.ncdot.gov/dmv/downloads/Documents/MVR-1.pdf"
    },

    "mvr-4": {
      label: "MVR-4 - Application for Duplicate Title",
      path: "https://www.ncdot.gov/dmv/downloads/Documents/MVR-4.pdf"
    },

    "mvr-317": {
      label: "MVR-317 - Affidavit of Authority to Assign Title (Heirship)",
      path: "https://www.nccourts.gov/assets/documents/local-rules-forms/MVR-317.pdf"
    },

    "mvr-63": {
      label: "MVR-63 - Power of Attorney",
      path: "https://www.ncdot.gov/dmv/downloads/Documents/MVR-63.pdf"
    },

    "mvr-180": {
      label: "MVR-180 - Odometer Disclosure Statement",
      path: "https://www.ncdot.gov/dmv/downloads/Documents/MVR-180.pdf"
    },

    "mvr-181": {
      label: "MVR-181 - Damage Disclosure Statement",
      path: "https://www.ncdot.gov/dmv/downloads/Documents/MVR-181.pdf"
    }
  };

  // NC-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>North Carolina title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> The seller's signature <strong>must</strong> be notarized. Do not sign the title until you are in the presence of a Notary Public.
        </li>
        <li>
          <strong>Seller Section:</strong> On the back of the title, sign and print your name exactly as it appears on the front in the "Assignment of Title" section.
        </li>
        <li>
          <strong>Buyer Info:</strong> You must enter the buyer's name and address before notarization. "Open titles" (missing buyer info) are illegal in NC.
        </li>
        <li>
          Car Donation Wizard North Carolina Title Tips:
          <a href="https://www.cardonationwizard.com/title/34/north-carolina-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      
      <em>Important: You must remove your license plates! Return them to an NCDMV license plate agency or turn them in online before canceling your insurance.</em>
    `,

    "No Title or Missing Title": `
  If your North Carolina title is lost or stolen, you must apply for a duplicate via form <strong>MVR-4</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$25.50</strong>.
    </li>
    <li>
      <strong>Mandatory Wait:</strong> NC law requires a <strong>15-day waiting period</strong> after the application is received before the duplicate title is issued.
    </li>
    <li>
      <strong>Instant Title:</strong> For an additional fee, "Instant Titles" are available in-person at specific locations, but only <strong>after</strong> the 15-day wait has passed.
    </li>
  </ul>
  <br>
  Donating? We can guide you through the MVR-4 process. Email us at titles@arscars.com with your license plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      North Carolina allows for a simplified transfer if no estate administration is pending or expected.
      <ul>
        <li>
          <strong>MVR-317:</strong> This is the <strong>Affidavit of Authority to Assign Title</strong>. All heirs must sign this form in the presence of a notary.
        </li>
        <li>
          <strong>Clerk Certification:</strong> The form must then be certified by the Clerk of Superior Court in the county where the deceased resided.
        </li>
        <li>
          <strong>Small Estates:</strong> If the vehicle is part of a larger estate under $20,000 (or $30,000 for a surviving spouse), a "Collection by Affidavit" (AOC-E-203B) may be used instead.
        </li>
        <li>
          Official NC Judicial Branch Instructions:
          <a href="https://www.nccourts.gov/documents/local-rules-and-forms/mvr-317-instructions-affidavit-of-authority-to-assign-title"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          MVR-317 Guide
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In North Carolina, a vehicle is branded salvage if it is 6 model years old or newer and repairs exceed 75% of its fair market value.
      <ul>
        <li>The primary form is the <strong>MVR-40</strong> (Salvage Certificate of Title).</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>License & Theft Bureau inspection</strong> (Form LT-270).</li>
        <li>You must provide receipts for all major component parts. The resulting title will be branded <strong>"Rebuilt Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in North Carolina:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title. <strong>This signature must be notarized.</strong></li>
        <li>If the title is lost, the lender must provide a notarized <strong>MVR-8 (Lien Release)</strong> or a notarized letter on their letterhead.</li>
        <li><strong>Electronic Liens:</strong> Many NC liens are released electronically. Once the lender transmits the release to NCDMV, a paper title is automatically mailed to the owner.</li>
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
    stateName: "North Carolina",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}