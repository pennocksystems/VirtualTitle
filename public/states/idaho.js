export default function () {

  // Forms specific to Idaho (ITD Forms)
  const formLibrary = {
    "itd-3337": {
      label: "ITD 3337 - Application for Certificate of Title",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/04/3337.pdf"
    },

    "itd-3367": {
      label: "ITD 3367 - Application for Duplicate Idaho Title",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/04/3367.pdf"
    },

    "itd-3738": {
      label: "ITD 3738 - Bill of Sale",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/03/3738.pdf"
    },

    "itd-3368": {
      label: "ITD 3368 - Limited Power of Attorney",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/03/3368.pdf"
    },

    "itd-3858": {
      label: "ITD 3858 - Notice of Release of Liability",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/03/3858.pdf"
    },

    "itd-3414": {
      label: "ITD 3414 - Affidavit of Inheritance",
      path: "https://itd.idaho.gov/wp-content/uploads/2025/04/3414.pdf"
    }
  };

  // ID-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Idaho title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Release of Interest:</strong> The seller must sign and print their name in the "Seller's Signature" section on the back of the title.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If the names are joined by "AND," both owners must sign. If joined by "OR," either owner can sign alone.
        </li>
        <li>
          Car Donation Wizard Idaho Title Tips:
          <a href="https://www.cardonationwizard.com/title/16/idaho-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: You must remove your license plates upon sale. You can transfer them to another vehicle you own at a DMV office.</em>
    `,

    "No Title or Missing Title": `
  If your Idaho title is lost or destroyed, you must apply for a duplicate using Form <strong>ITD 3367</strong>.
  <ul>
    <li>
      <strong>Notarization Required:</strong> The applicant's signature <strong>must be notarized</strong> unless signed in person at a DMV office.
    </li>
    <li>
      <strong>Fee:</strong> The duplicate title fee is <strong>$14.00</strong>. For "RUSH" service, add an additional $26.00.
    </li>
    <li>
      <strong>Ownership Transfer:</strong> If you are selling the car and the title is lost, use form <strong>ITD 3369</strong> (Duplicate Title with Ownership Transfer) instead.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the notarization requirements for Idaho duplicates. Email us at titles@arscars.com for assistance!
`,

    "How to Get Title for Deceased Owner": `
      Idaho provides the <strong>ITD 3414 (Affidavit of Inheritance)</strong> for transferring a vehicle when the owner has passed away.
      <ul>
        <li>
          <strong>Small Estates:</strong> If the estate is not probated, the heir can use the ITD 3414 along with a copy of the Death Certificate.
        </li>
        <li>
          <strong>Probated Estates:</strong> The Personal Representative must provide <strong>Letters Testamentary</strong> or Letters of Administration issued by the court.
        </li>
        <li>
          Download the Affidavit:
          <a href="https://itd.idaho.gov/wp-content/uploads/2025/04/3414.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          ITD 3414 Form
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Idaho, a vehicle is declared salvage when an insurance company or owner determines it is a total loss.
      <ul>
        <li>Apply using Form <strong>ITD 3312</strong> (Salvage Certificate of Title Application).</li>
        <li>To return a salvage vehicle to the road, it must be repaired and then pass a <strong>VIN Inspection</strong> by a law enforcement officer or ITD agent.</li>
        <li>The new title will be issued with a <strong>"Rebuilt Salvage"</strong> brand.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Idaho:
      <ul>
        <li>The lienholder can sign the "Lien Release" section on the face of the Idaho title.</li>
        <li>Alternatively, the lender may provide a <strong>Satisfaction of Lien</strong> on their official letterhead or a notarized statement.</li>
        <li>If the title is being sent to a new purchaser, the lienholder may complete the **Notice of Release of Liability (ITD 3858)** on behalf of the registered owner.</li>
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
    stateName: "Idaho",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}