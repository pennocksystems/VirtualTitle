export default function () {

  // Forms specific to Georgia (DOR Forms)
  const formLibrary = {
    "mv-1": {
      label: "MV-1 - Title/Tag Application",
      path: "https://dor.georgia.gov/mv-1-dor-motor-vehicle-titletag-application"
    },

    "mv-1s": {
      label: "MV-1S - Salvage Title Application",
      path: "https://dor.georgia.gov/document/form/form-mv-1s-salvage-title-application/download"
    },

    "t-7": {
      label: "T-7 - Bill of Sale",
      path: "https://dor.georgia.gov/document/form/form-t-7-bill-sale/download"
    },

    "t-8": {
      label: "T-8 - Limited Power of Attorney",
      path: "https://dor.georgia.gov/document/form/form-t-8-limited-power-attorney/download"
    },

    "t-20": {
      label: "T-20 - Affidavit of Inheritance",
      path: "https://dor.georgia.gov/document/form/form-t-20-affidavit-inheritance/download"
    }
  };

  // GA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Georgia title</strong>, use blue or black ink and navigate to the back of the document.
      <ul>
        <li>
          <strong>Seller Section:</strong> Print your name and sign exactly as it appears on the front of the title.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If the front says "AND," both owners must sign. If it says "OR," only one owner is required to sign.
        </li>
        <li>
          Car Donation Wizard GA Title Tips:
          <a href="https://www.cardonationwizard.com/title/10/georgia-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Note: Georgia law requires you to remove your license plate before the vehicle is picked up.</em>
    `,

    "No Title or Missing Title": `
  If you've lost your Georgia title, you can apply for a replacement at your <strong>County Tag Office</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard replacement fee is <strong>$8.00</strong> (additional service fees may apply by county).
    </li>
    <li>
      <strong>Requirements:</strong> You must submit form <strong>MV-1</strong> and provide a valid Georgia ID.
    </li>
    <li>
      Most Georgia residents can now start this process online via the <strong>DRIVES e-Services</strong> portal:
      <a href="https://eservices.drives.ga.gov/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Visit GA DRIVES
      </a>
    </li>
  </ul>
  <br>
  Need help with a replacement? Email us at titles@arscars.com with your VIN and we can guide you through the GA MV-1 process.
`,

    "How to Get Title for Deceased Owner": `
      Georgia uses the <strong>T-20 Affidavit of Inheritance</strong> for transferring vehicles from an estate without a probated will.
      <ul>
        <li>
          <strong>With a Will:</strong> You will need a certified copy of the <strong>Letters of Testamentary</strong>.
        </li>
        <li>
          <strong>Without a Will:</strong> Use Form <strong>T-20</strong>. This certifies that the estate is not indebted and heirs have agreed on the transfer.
        </li>
        <li>
          A certified copy of the death certificate is always required.
        </li>
        <li>More GA Estate Info:
          <a href="https://dor.georgia.gov/vehicle-inherited-or-purchased-estate"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          GA Inheritance Guide
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Georgia, a salvage title is required if a vehicle is a total loss or has damage exceeding 75% of its value.
      <ul>
        <li>Apply using Form <strong>MV-1S</strong> and include the <strong>T-56</strong> (Notice to Owner of Payment of Total Loss).</li>
        <li>To "Rebuild" a title, the vehicle must pass an inspection by a state-approved private inspector (approx. $100 fee) before an <strong>MV-1</strong> can be filed for a Rebuilt brand.</li>
        <li>GA Salvage Details:
          <a href="https://dor.georgia.gov/titles-rebuilt-or-restored-vehicles"
            target="blank"
            style="color:#3b82f6;text-decoration:underline;">
            Salvage & Rebuilt Info
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Georgia:
      <ul>
        <li>The lienholder can sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is unavailable, the lender must provide a completed and signed <strong>Form T-4 (Lien or Security Interest Release)</strong>.</li>
        <li>Georgia also utilizes an Electronic Lien and Title (ELT) system; if the lien is electronic, the lender must release it through the system before a paper title will be printed.</li>
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
    stateName: "Georgia",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}