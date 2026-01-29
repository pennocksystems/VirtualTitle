export default function () {

  // Forms specific to Montana (MVD / MV Forms)
  const formLibrary = {
    "mv1": {
      label: "MV1 - Application for Certificate of Title",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV1-Application-for-Certificate-of-Title-for-a-Motor-Vehicle.pdf"
    },

    "mv7": {
      label: "MV7 - Application for Replacement Certificate of Title",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV7-Application-for-Replacement-Certificate-of-Title.pdf"
    },

    "mv12": {
      label: "MV12 - Bill of Sale",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV12-Bill-of-Sale.pdf"
    },

    "mv13": {
      label: "MV13 - Power of Attorney",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV13-Power-of-Attorney.pdf"
    },

    "mv37a": {
      label: "MV37A - Application for Salvage Certificate",
      path: "https://mvdmt.gov/wp-content/uploads/2023/10/MV37A-Application-for-Salvage-Certificate.pdf"
    }
  };

  // MT-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Montana title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> Montana law requires all sellers' signatures on a title to be <strong>notarized</strong>. Do not sign the title until you are in front of a Notary Public.
        </li>
        <li>
          <strong>Transfer Section:</strong> Sign in the "Assignment of Title" section on the back of the title.
        </li>
        <li>
          Car Donation Wizard Montana Title Tips:
          <a href="https://www.cardonationwizard.com/title/27/montana-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: In Montana, the license plates stay with the <strong>seller</strong>. Remove them before the vehicle is picked up.</em>
    `,

    "No Title or Missing Title": `
  If your Montana title is lost, stolen, or damaged, you must apply for a replacement via form <strong>MV7</strong>.
  <ul>
    <li>
      <strong>Notary Required:</strong> The applicant's signature on the MV7 <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Fee:</strong> The standard replacement title fee is <strong>$10.30</strong> for light vehicles.
    </li>
    <li>
      <strong>Where to Apply:</strong> You can mail the application to the Title and Registration Bureau in Deer Lodge or visit your local County Treasurer’s office.
    </li>
  </ul>
  <br>
  Donating? We can help you prepare the MV7 and find a notary. Email us at titles@arscars.com with your VIN!
`,

    "How to Get Title for Deceased Owner": `
      Montana allows for simplified transfers if the estate is not probated and is valued under <strong>$50,000</strong>.
      <ul>
        <li>
          <strong>Small Estates:</strong> Use the <strong>Affidavit for Collection of Personal Property</strong>. This must be notarized and accompanied by a Death Certificate.
        </li>
        <li>
          <strong>Joint Ownership:</strong> If the title lists owners as "Joint Tenants with Right of Survivorship," the survivor can transfer the title by providing the death certificate and an MV1 application.
        </li>
        <li>
          <strong>Probate:</strong> If the estate is in probate, the Personal Representative must provide court-issued <strong>Letters of Authority</strong>.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Montana, a salvage certificate is required for vehicles that are "totaled" (damage exceeds 75% of value).
      <ul>
        <li>Apply using form <strong>MV37A</strong>. The fee is <strong>$5.00</strong>.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Stage V Inspection</strong> performed by a DOJ-authorized inspector.</li>
        <li>The resulting title will be branded as <strong>"Rebuilt Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Montana:
      <ul>
        <li>The lienholder must sign the "Lien Release" section on the face of the title. <strong>This signature must be notarized</strong>.</li>
        <li>Alternatively, the lender can provide a <strong>Form MV24 (Lien Release)</strong>, which also must be notarized.</li>
        <li>If Montana has an electronic record of the lien (ELT), the lender will release it electronically, and the MVD will mail a clean title to the owner.</li>
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
    stateName: "Montana",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}