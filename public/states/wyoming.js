export default function () {

  // Forms specific to Wyoming (County Clerk / DOT Forms)
  const formLibrary = {
    "mv-300": {
      label: "MV-300 - VIN Inspection Form (For Out-of-State Transfers)",
      path: "http://www.dot.state.wy.us/home/titles_plates_registration/titles.html"
    },

    "duplicate-app": {
      label: "Application for Duplicate Certificate of Title",
      path: "https://www.laramiecounty.gov/_pdfs/DuplicateTitleApplication.pdf"
    },

    "affidavit-heirship": {
      label: "Affidavit of Heirship for a Motor Vehicle",
      path: "https://www.natronacounty-wy.gov/DocumentCenter/View/145/Affidavit-of-Distribution?bidId="
    },

    "bill-of-sale": {
      label: "Wyoming Bill of Sale (Notarized)",
      path: "https://www.campbellcountywy.gov/DocumentCenter/View/147/Bill-of-Sale?bidId="
    },

    "mv-602": {
      label: "MV-602 - Application for Salvage/Nonrepairable Title",
      path: "http://www.dot.state.wy.us/home/titles_plates_registration/salvage_vehicles.html"
    }
  };

  // WY-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Wyoming title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> Do not sign your title until you are in the presence of a Notary Public. The seller's signature <strong>must be notarized</strong> on the back of the title.
        </li>
        <li>
          <strong>Assignment:</strong> On the back of the title, sign your name exactly as it appears on the front in the "Seller's Signature" section.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," both owners must sign. If joined by "OR," either owner may sign alone.
        </li>
      </ul>
      
      <em>Important: You must remove your license plates! In Wyoming, plates stay with the owner and do not transfer with the vehicle.</em>
    `,

    "No Title or Missing Title": `
  If your Wyoming title is lost or destroyed, you must apply for a duplicate at the <strong>County Clerk's office</strong> where the original title was issued.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$15.00</strong>.
    </li>
    <li>
      <strong>Notary Required:</strong> The application for a duplicate title <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Quick Note:</strong> Wyoming is decentralized; if you live in Natrona County but the title was issued in Laramie County, you must contact Laramie County for the duplicate.
    </li>
  </ul>
  <br>
  Donating? We can help you coordinate with the correct County Clerk. Email us at titles@arscars.com with your VIN and the county listed on your registration!
`,

    "How to Get Title for Deceased Owner": `
      Wyoming allows for an <strong>Affidavit of Distribution</strong> for estates not exceeding <strong>$200,000</strong>.
      <ul>
        <li>
          <strong>Small Estates:</strong> If the total value of the decedent's property in WY is under $200k, the heirs can use an Affidavit of Distribution to transfer the title.
        </li>
        <li>
          <strong>Wait Period:</strong> You must wait at least <strong>30 days</strong> after the date of death to file this affidavit.
        </li>
        <li>
          <strong>Notary:</strong> The affidavit <strong>must be notarized</strong> and filed with the County Clerk.
        </li>
        <li>
          <strong>Joint Tenants:</strong> If the title lists "JTWROS," the survivor simply needs to provide a certified Death Certificate to the Clerk.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Wyoming, a vehicle is branded salvage if the cost of repairs exceeds <strong>75%</strong> of its retail value.
      <ul>
        <li>You must apply for a Salvage Title (Form <strong>MV-602</strong>) within 10 days of the vehicle being declared a total loss.</li>
        <li>To return a salvage car to the road, it must pass a **VIN Inspection** and a **Safety Inspection**.</li>
        <li>The new title will be branded <strong>"Rebuilt"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Wyoming:
      <ul>
        <li><strong>Paper Titles:</strong> The lienholder must sign and date the "Lien Release" section on the front of the title. This signature <strong>must be notarized</strong>.</li>
        <li><strong>County Filing:</strong> The release must be filed with the County Clerk's office to officially clear the record.</li>
        <li>If the title is lost, a notarized **Lien Release** on the lender's letterhead is required to apply for a clean duplicate title.</li>
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
    stateName: "Wyoming",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}