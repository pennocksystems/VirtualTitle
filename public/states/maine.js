export default function () {

  // Forms specific to Maine (BMV / MVT Forms)
  const formLibrary = {
    "mvt-2": {
      label: "MVT-2 - Application for Certificate of Title",
      path: "https://www.maine.gov/sos/bmv/vehicles/titles/types-of-title-certificates"
    },

    "mvt-8": {
      label: "MVT-8 - Application for Duplicate Title",
      path: "https://www.maine.gov/sos/bmv/forms/MVT-8.pdf"
    },

    "mvt-22": {
      label: "MVT-22 - Affidavit of Surviving Spouse or Personal Representative",
      path: "https://www.maine.gov/sos/bmv/forms/MVT-22.pdf"
    },

    "mvt-102": {
      label: "MVT-102 - Application for Certificate of Salvage",
      path: "https://www.maine.gov/sos/bmv/vehicles/titles/types-of-title-certificates"
    },

    "mvt-103": {
      label: "MVT-103 - Affidavit of Rebuilt or Repaired Salvage Vehicle",
      path: "https://www.maine.gov/sos/bmv/forms/MVT-103.pdf"
    }
  };

  // ME-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Maine title</strong>, use blue or black ink only. Any erasures or white-out will void the document.
      <ul>
        <li>
          <strong>Transfer of Ownership:</strong> The seller must sign and print their name in the "Assignment of Title" section on the back.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If the names on the front are joined by "AND," both owners must sign. If joined by "OR," only one signature is required.
        </li>
        <li>
          <strong>Odometer:</strong> You must enter the exact mileage. If the vehicle is more than 20 years old, it may be exempt from odometer disclosure.
        </li>
      </ul>
      <em>Note: In Maine, you must remove your license plates upon sale. They remain your property.</em>
    `,

    "No Title or Missing Title": `
  If your Maine title is lost or destroyed, you can apply for a duplicate via form <strong>MVT-8</strong>.
  <ul>
    <li>
      <strong>Online Service:</strong> If you have a valid Maine driver’s license and are the current owner, you can order a duplicate online:
      <a href="https://www.maine.gov/online/bmv/title-replacement/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Online
      </a>
    </li>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$33.00</strong>.
    </li>
    <li>
      <strong>Rush Service:</strong> For an additional <strong>$10.00</strong>, the BMV will expedite the processing to 3-5 business days.
    </li>
  </ul>
  <br>
  Donating? If your vehicle is 2000 or older, you may not need a title at all! Contact us at titles@arscars.com to verify your vehicle's requirements.
`,

    "How to Get Title for Deceased Owner": `
      Maine allows for a simplified transfer to a surviving spouse or heir using form <strong>MVT-22</strong>.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> Ownership passes to the spouse for <strong>No Fee</strong> if no will dictates otherwise. You must provide the MVT-22 and a Death Certificate.
        </li>
        <li>
          <strong>Heirship:</strong> If there is no surviving spouse and no probated will, immediate heirs (children/parents) can use the MVT-22 (notarized).
        </li>
        <li>
          <strong>Probate:</strong> If a Personal Representative has been appointed, they must sign the title and provide their <strong>Letters of Authority</strong>.
        </li>
        <li>
          Download MVT-22:
          <a href="https://www.maine.gov/sos/bmv/forms/MVT-22.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form MVT-22
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Maine requires a "Certificate of Salvage" for vehicles declared a total loss.
      <ul>
        <li>Apply using form <strong>MVT-102</strong> and pay the <strong>$33.00</strong> fee.</li>
        <li>If a salvage vehicle is rebuilt, the owner must submit form <strong>MVT-103</strong> along with receipts for parts used.</li>
        <li>The vehicle must pass a <strong>Safety Inspection</strong>, and the new title will be branded as <strong>"Rebuilt Salvage"</strong> or <strong>"Repaired."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Maine:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide a <strong>Lien Release (Form MVT-27)</strong> or a letter on their official letterhead.</li>
        <li>Maine also uses <strong>Electronic Lien Titling (ELT)</strong>. If your lien is electronic, the lender must release it through the BMV system before a paper title can be generated.</li>
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
    stateName: "Maine",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}