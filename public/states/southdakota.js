export default function () {

  // Forms specific to South Dakota (DOR / SFN Forms)
  const formLibrary = {
    "mv-608": {
      label: "MV-608 - Application for Motor Vehicle Title & Registration",
      path: "https://dor.sd.gov/media/f5hls52j/mv608-application-for-motor-vehicle-title-registration.pdf"
    },

    "mv-010": {
      label: "MV-010 - Application for Duplicate Certificate of Title",
      path: "https://dor.sd.gov/media/3yvdrqsh/mv010-application-for-duplicate-certificate-of-title.pdf"
    },

    "mv-215": {
      label: "MV-215 - Affidavit of Vehicle Ownership by Succession (Heirship)",
      path: "https://dor.sd.gov/media/u5fph032/mv215-affidavit-for-vehicle-ownership-by-succession.pdf"
    },

    "mv-610": {
      label: "MV-610 - Salvage, Recovered Theft, and Uniform Damage Disclosure",
      path: "https://dor.sd.gov/media/p4nbp5ex/mv610-salvage-recovered-theft-and-uniform-damage-disclosure-statement.pdf"
    },

    "bill-of-sale": {
      label: "South Dakota Bill of Sale",
      path: "https://dor.sd.gov/media/5ptfpx5s/billofsale.pdf"
    }
  };

  // SD-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>South Dakota title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, the seller must sign and print their name in the "Seller's Assignment" section. 
        </li>
        <li>
          <strong>Notary Requirement:</strong> Standard private sales do not require a notary, but signatures must be clear and match the front exactly.
        </li>
        <li>
          <strong>Damage Disclosure:</strong> If the vehicle is 7 model years old or newer, the seller <strong>must</strong> complete the Damage Disclosure section on the title or form <strong>MV-610</strong>.
        </li>
      </ul>
      
      <em>Important: South Dakota is a "Plate with Owner" state. Remove your license plates! You can transfer them to a new vehicle or return them to the County Treasurer.</em>
    `,

    "No Title or Missing Title": `
  If your South Dakota title is lost, stolen, or mutilated, you can request a duplicate via form <strong>MV-010</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$10.00</strong>.
    </li>
    <li>
      <strong>2026 E-Title Shift:</strong> Starting early 2026, SD will no longer automatically print paper titles. If you need a physical copy, you may need to specifically request one through your <strong>my605Drive</strong> account.
    </li>
    <li>
      <strong>Where to Apply:</strong> Submit form MV-010 to your local <strong>County Treasurer’s Office</strong>.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the $10 duplicate process. Email us at titles@arscars.com for assistance!
`,

    "How to Get Title for Deceased Owner": `
      South Dakota offers simplified transfers for estates valued at <strong>$50,000 or less</strong>.
      <ul>
        <li>
          <strong>Small Estates:</strong> Use the <strong>Affidavit of Vehicle Ownership by Succession (MV-215)</strong>. This form <strong>must be notarized</strong>.
        </li>
        <li>
          <strong>Wait Period:</strong> At least <strong>30 days</strong> must have passed since the owner's death before this form can be used.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> As of 2025, SD supports TOD designations. A beneficiary can claim the title by providing a certified Death Certificate and an affidavit.
        </li>
        <li>
          Download Succession Affidavit:
          <a href="https://dor.sd.gov/media/u5fph032/mv215-affidavit-for-vehicle-ownership-by-succession.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form MV-215
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In South Dakota, a salvage title is required if a vehicle (less than 10 years old) sustains damage exceeding <strong>75%</strong> of its value.
      <ul>
        <li>Apply using <strong>Form MV-608</strong> and check the "Salvage Total Loss" box. The fee is <strong>$10.00</strong>.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Rebuilt Inspection</strong> by a South Dakota Highway Patrol officer.</li>
        <li>The resulting title will be branded <strong>"REBUILT"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in South Dakota:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> Most modern liens are electronic. Once the loan is paid, the lender notifies the DOR, and a clean title is released to your <strong>my605Drive</strong> account.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Lien Release" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide a notarized <strong>Lien Release</strong> on official letterhead.</li>
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
    stateName: "South Dakota",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}