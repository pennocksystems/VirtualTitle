export default function () {

  // Forms specific to Mississippi (DOR Forms)
  const formLibrary = {
    "78-006": {
      label: "Form 78-006 - Application for Replacement Certificate of Title",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78006178_0.pdf"
    },

    "78-026": {
      label: "Form 78-026 - FAST TRACK Replacement Title Application",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78026178%20Fast%20Track%20Replacement%20Title.pdf"
    },

    "78-014": {
      label: "Form 78-014 - Affidavit of Heirship for a Motor Vehicle",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78014178%20Affidavit%20of%20Heirship%20for%20a%20motor%20vehicle%2020210817.pdf"
    },

    "78-003": {
      label: "Form 78-003 - Power of Attorney",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78003178%20Power%20of%20Attorney.pdf"
    },

    "78-021": {
      label: "Form 78-021 - Application for Inspection of a Salvage/Rebuilt Vehicle",
      path: "https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78021178%2520Application%2520for%2520Inspection%2520for%2520a%2520Salvage%2520Vehicle.pdf"
    }
  };

  // MS-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Mississippi title</strong>, use blue or black ink only. Any erasures, white-out, or alterations will void the document.
      <ul>
        <li>
          <strong>Assignment of Title:</strong> Flip to the back of the title. Print your name exactly as it appears on the front, then sign on the "Signature of Seller(s)" line.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If joined by "AND," both owners must sign. If joined by "OR" or "AND/OR," only one signature is required.
        </li>
        <li>
          Car Donation Wizard Mississippi Title Tips:
          <a href="https://www.cardonationwizard.com/title/25/mississippi-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: Remove your license plates before the vehicle is picked up. Return them to your local County Tax Collector's office.</em>
    `,

    "No Title or Missing Title": `
  If your Mississippi title is lost or stolen, you can apply for a duplicate via form <strong>78-006</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$9.00</strong>.
    </li>
    <li>
      <strong>Fast Track:</strong> Mississippi offers a "Fast Track" program for <strong>$39.00</strong> (Form 78-026). This service typically processes the title within 72 hours of receipt.
    </li>
    <li>
      <strong>Mailing Address:</strong> Mail standard applications to: MS Dept of Revenue, Motor Vehicle Services, P.O. Box 1383, Jackson, MS 39215.
    </li>
  </ul>
  <br>
  Donating? We can help you process your duplicate title application. Email us at titles@arscars.com to get started!
`,

    "How to Get Title for Deceased Owner": `
      Mississippi uses the <strong>Affidavit of Heirship (Form 78-014)</strong> for estates that are not probated.
      <ul>
        <li>
          <strong>The Process:</strong> All heirs must sign the affidavit, and the signature(s) <strong>must be notarized</strong>.
        </li>
        <li>
          <strong>Requirements:</strong> You will need the original title (if available) and a copy of the Death Certificate.
        </li>
        <li>
          If the estate is in probate, the Executor must provide court-certified <strong>Letters of Administration</strong>.
        </li>
        <li>
          Download Heirship Form:
          <a href="https://www.dor.ms.gov/sites/default/files/tax-forms/motor-vehicle/78014178%20Affidavit%20of%20Heirship%20for%20a%20motor%20vehicle%2020210817.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form 78-014
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Mississippi, a "Salvage Certificate" is issued to total loss vehicles.
      <ul>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Salvage Inspection</strong> by the Dept of Public Safety (Form 78-021).</li>
        <li>The inspection fee is <strong>$75.00</strong> (certified funds only).</li>
        <li>You must provide notarized bills of sale for all major component parts replaced. The new title will be branded as <strong>"REBUILT."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Mississippi:
      <ul>
        <li><strong>E-Lien Program:</strong> As of Jan 1, 2025, most lienholders must release liens electronically. Once satisfied, the DOR system is updated, and a paper title is mailed to the owner.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Release of Lien" section on the front of the title.</li>
        <li>If the title is lost, the lender must provide a notarized lien release letter or complete form <strong>78-006</strong> with the owner.</li>
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
    stateName: "Mississippi",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}