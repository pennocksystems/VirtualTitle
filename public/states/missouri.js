export default function () {

  // Forms specific to Missouri (DOR Forms)
  const formLibrary = {
    "dor-108": {
      label: "DOR-108 - Application for Missouri Title and License",
      path: "https://dor.mo.gov/forms/108.pdf"
    },

    "dor-2519": {
      label: "DOR-2519 - Application for Duplicate Title",
      path: "https://dor.mo.gov/forms/2519.pdf"
    },

    "dor-5049": {
      label: "DOR-5049 - Notice of Sale (Liability Release)",
      path: "https://dor.mo.gov/forms/5049.pdf"
    },

    "dor-4809": {
      label: "DOR-4809 - Notice of Lien / Lien Release",
      path: "https://dor.mo.gov/forms/4809.pdf"
    },

    "dor-2305": {
      label: "DOR-2305 - Affidavit of Heirship",
      path: "https://dor.mo.gov/forms/2305.pdf"
    }
  };

  // MO-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Missouri title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, sign your name exactly as it appears on the front in the "Signature of Seller" block.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," both owners must sign. If joined by "OR," either owner can sign alone.
        </li>
        <li>
          Car Donation Wizard Missouri Title Tips:
          <a href="https://www.cardonationwizard.com/title/26/missouri-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: You must remove your license plates! They do not stay with the vehicle in Missouri.</em>
    `,

    "No Title or Missing Title": `
  If your Missouri title is lost, stolen, or mutilated, you must apply for a duplicate via form <strong>DOR-2519</strong>.
  <ul>
    <li>
      <strong>Notary Required:</strong> This application <strong>must be notarized</strong> before submission.
    </li>
    <li>
      <strong>Fee:</strong> The duplicate title fee is <strong>$8.50</strong> plus a <strong>$6.00</strong> processing fee (Total: <strong>$14.50</strong>).
    </li>
    <li>
      <strong>Where to Apply:</strong> You can submit this at any Missouri license office or mail it to the Jefferson City central office.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the notarization requirements for form 2519. Email us at titles@arscars.com with your VIN!
`,

    "How to Get Title for Deceased Owner": `
      Missouri provides several paths for transferring a deceased owner's vehicle.
      <ul>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary is named on the front of the title, they can transfer it simply by providing a Death Certificate and form DOR-108.
        </li>
        <li>
          <strong>Small Estates:</strong> If the total estate value is under $40,000, you may use the <strong>Affidavit of Heirship (DOR-2305)</strong>. All heirs must sign, and it <strong>must be notarized</strong>.
        </li>
        <li>
          <strong>Surviving Spouse:</strong> A spouse can often transfer a title for a single vehicle into their name without probate by providing a death certificate.
        </li>
        <li>
          Download Heirship Form:
          <a href="https://dor.mo.gov/forms/2305.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form DOR-2305
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Missouri, a salvage title is required if a vehicle is damaged to the point that repairs exceed 80% of its fair market value.
      <ul>
        <li>Apply using Form <strong>DOR-108</strong> and check the "Salvage" box.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Missouri State Highway Patrol inspection</strong> (Form DOR-551).</li>
        <li>Once passed, the new title will be branded as <strong>"Prior Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Missouri:
      <ul>
        <li>The lienholder must complete form <strong>DOR-4809 (Notice of Lien/Lien Release)</strong>.</li>
        <li>The lender's signature on the form <strong>must be notarized</strong>.</li>
        <li>Once you have the notarized release, you must submit it along with the title to the DOR to receive a clear title (standard title fees apply).</li>
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
    stateName: "Missouri",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}