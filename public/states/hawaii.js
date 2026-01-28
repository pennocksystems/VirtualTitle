export default function () {

  // Forms specific to Hawaii (primarily Honolulu County / City & County of Honolulu)
  const formLibrary = {
    "cs-l-mvr-1": {
      label: "CS-L(MVR) 1 - Application for Registration",
      path: "http://www.honolulu.gov/rep/site/csd/online_forms/cslmvr1.pdf"
    },

    "cs-l-mvr-10": {
      label: "CS-L(MVR) 10 - Application for Duplicate Title",
      path: "https://www.honolulu.gov/rep/site/csd/online_forms/cslmvr10.pdf"
    },

    "cs-l-mvr-53": {
      label: "CS-L(MVR) 53 - Notice of Transfer",
      path: "https://www.honolulu.gov/rep/site/csd/online_forms/cslmvr53.pdf"
    },

    "3c-e-312": {
      label: "Affidavit for Collection of Personal Property (Deceased Owner)",
      path: "https://www.courts.state.hi.us/docs/form/hawaii/3CE312.pdf"
    },

    "bill-of-sale": {
      label: "Hawaii Motor Vehicle Bill of Sale",
      path: "https://www.honolulu.gov/rep/site/csd/online_forms/cslmvrbillofsale.pdf"
    }
  };

  // HI-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Hawaii title</strong>, use blue or black ink. Hawaii titles have a specific layout:
      <ul>
        <li>
          <strong>Section A (Front):</strong> The registered owner(s) must sign here to release interest.
        </li>
        <li>
          <strong>Notice of Transfer:</strong> You must detach and mail the "Notice of Transfer" form (top of the title) to your specific County DMV within 10 days of the sale.
        </li>
        <li>
          Car Donation Wizard Hawaii Title Tips:
          <a href="https://www.cardonationwizard.com/title/15/hawaii-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: Because Hawaii is county-based, ensure you are sending documents to the correct island's DMV!</em>
    `,

    "No Title or Missing Title": `
  If your Hawaii title is lost or defaced, you must apply for a duplicate in the <strong>county where the vehicle was last registered</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> Usually <strong>$10.00</strong> (Honolulu).
    </li>
    <li>
      <strong>Notarization:</strong> Application Form <strong>CS-L(MVR) 10</strong> must be <strong>notarized</strong> if you are not submitting it in person.
    </li>
    <li>
      <strong>County-Specific Links:</strong>
      <ul>
        <li><a href="https://www.honolulu.gov/csd/mvr.html" target="_blank">Honolulu</a></li>
        <li><a href="https://www.mauicounty.gov/1328/Motor-Vehicle-Licensing" target="_blank">Maui</a></li>
        <li><a href="https://www.vrl.hawaiicounty.gov/" target="_blank">Hawaii (Big Island)</a></li>
        <li><a href="https://www.kauai.gov/MVR" target="_blank">Kauai</a></li>
      </ul>
    </li>
  </ul>
`,

    "How to Get Title for Deceased Owner": `
      In Hawaii, if the estate is small, you can use the <strong>Affidavit for Collection of Personal Property (Form 3C-E-312)</strong>.
      <ul>
        <li>
          <strong>The Process:</strong> The successor must complete the affidavit and provide a certified copy of the Death Certificate.
        </li>
        <li>
          If the vehicle has a joint owner (the title says "OR"), the survivor can often transfer ownership by simply providing the death certificate and signing as the survivor.
        </li>
        <li>
          Download the Affidavit:
          <a href="https://www.courts.state.hi.us/docs/form/hawaii/3CE312.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          3C-E-312 Form
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Hawaii Revised Statutes §286-48 requires a salvage certificate for total loss vehicles.
      <ul>
        <li>The insurance company or owner must submit the title and application for a salvage certificate to the County Director of Finance.</li>
        <li>To return a salvage vehicle to the road, it must undergo a <strong>Safety Inspection</strong> and the new title will be branded as <strong>"Rebuilt Vehicle."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Hawaii:
      <ul>
        <li>The lienholder must sign <strong>Section B</strong> on the reverse side of the Certificate of Title.</li>
        <li>If the lienholder is a financial institution, they must include their official stamp next to the signature.</li>
        <li>Once signed, you should take the title to the DMV to have a "clean" title issued in your name (Transfer fee is usually $5.00 - $10.00).</li>
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
    stateName: "Hawaii",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}