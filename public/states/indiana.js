export default function () {

  // Forms specific to Indiana (BMV State Forms)
  const formLibrary = {
    "form-205": {
      label: "State Form 205 - Application for Certificate of Title",
      path: "https://forms.in.gov/Download.aspx?id=12817"
    },

    "form-44237": {
      label: "State Form 44237 - Bill of Sale",
      path: "https://forms.in.gov/Download.aspx?id=12323"
    },

    "form-18733": {
      label: "State Form 18733 - Affidavit for Transfer of Title Without Administration",
      path: "https://forms.in.gov/Download.aspx?id=15187"
    },

    "form-43230": {
      label: "State Form 43230 - Odometer Disclosure Statement",
      path: "https://forms.in.gov/Download.aspx?id=5165"
    },

    "form-1940": {
      label: "State Form 1940 - Limited Power of Attorney",
      path: "https://forms.in.gov/Download.aspx?id=16260"
    }
  };

  // IN-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Indiana title</strong>, use blue or black ink and sign in the "Seller" section on the back.
      <ul>
        <li>
          <strong>Electronic Titles:</strong> If you have an e-title, you may need to complete <strong>State Form 57738</strong> to transfer ownership to a dealer or authorized entity.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If the names are joined by "AND," both owners must sign. If joined by "OR," either owner can sign alone.
        </li>
        <li>
          Car Donation Wizard Indiana Title Tips:
          <a href="https://www.cardonationwizard.com/title/18/indiana-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Note: You must remove your license plates. They belong to you and can be transferred to a new vehicle at a BMV branch.</em>
    `,

    "No Title or Missing Title": `
  If your Indiana title is lost or you never received a paper copy, you can request a replacement through **myBMV**.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$15.00</strong>.
    </li>
    <li>
      <strong>Speed Title:</strong> For an additional <strong>$25.00</strong> ($40.00 total), you can request a "Speed Title" for faster processing.
    </li>
    <li>
      <strong>myBMV Portal:</strong> Most residents can order a replacement title instantly online:
      <a href="https://www.in.gov/bmv/titles/duplicate-titles/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Replacement Online
      </a>
    </li>
  </ul>
  <br>
  Donating? We can help you check if your title is electronic and guide you through the replacement process. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Indiana allows for a simplified transfer for "Small Estates" using <strong>State Form 18733</strong>.
      <ul>
        <li>
          <strong>Eligibility:</strong> The value of the gross probate estate must not exceed <strong>$100,000</strong>.
        </li>
        <li>
          <strong>Wait Period:</strong> At least <strong>5 days</strong> must have passed since the owner's death.
        </li>
        <li>
          You will need a copy of the Death Certificate along with the completed affidavit.
        </li>
        <li>
          Download Affidavit (Form 18733):
          <a href="https://forms.in.gov/Download.aspx?id=15187"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Indiana, a salvage title is required for vehicles manufactured within the last 7 model years that have been damaged.
      <ul>
        <li>The application fee for a salvage title is <strong>$4.00</strong>.</li>
        <li>To return a salvage vehicle to the road, you must file an <strong>Affidavit of Restoration (Form 44606)</strong> and have the vehicle inspected by a police officer.</li>
        <li>A "Rebuilt" brand will then be added to the new title.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Indiana:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> Most modern liens in Indiana are electronic. The lender will release the lien via the BMV system, and a clean title will be mailed to you automatically.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Lien Release" section on the face of the title.</li>
        <li>If the title is lost, you must obtain a <strong>Lien Release Letter</strong> on the lender's letterhead, including the VIN, year, and make.</li>
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
    stateName: "Indiana",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}