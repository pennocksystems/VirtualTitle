export default function () {

  // Forms specific to New Hampshire (DMV TDMV Forms)
  const formLibrary = {
    "tdmv-18": {
      label: "TDMV 18 - Application for Duplicate Certificate of Title",
      path: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/tdmv18.pdf"
    },

    "tdmv-101": {
      label: "TDMV 101 - Title Application Summary (Dealer/Clerk use)",
      path: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/tdmv101.pdf"
    },

    "tdmv-20a": {
      label: "TDMV 20A - Lien Release",
      path: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/tdmv20.pdf"
    },

    "dsmv-545a": {
      label: "DSMV 545A - Salvage Motor Vehicle Affidavit",
      path: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/dsmv545f.pdf"
    },

    "vin-verification": {
      label: "TDMV 19A - Verification of Vehicle Identification Number",
      path: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/tdmv19a.pdf"
    }
  };

  // NH-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>New Hampshire title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Transfer of Ownership:</strong> The seller must sign and print their name in the "Assignment of Title" section on the back of the title.
        </li>
        <li>
          <strong>Exempt Vehicles:</strong> If your vehicle is <strong>1999 or older</strong>, you do not need a title. You must provide a Bill of Sale and either a current or expired NH registration.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," both owners must sign. If joined by "OR," either owner can sign alone.
        </li>
      </ul>
      
      <em>Note: License plates stay with the <strong>seller</strong>. Remove them and return them to your local town clerk or the DMV.</em>
    `,

    "No Title or Missing Title": `
  If your New Hampshire title is lost, stolen, or destroyed, you must apply for a duplicate via form <strong>TDMV 18</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$25.00</strong>.
    </li>
    <li>
      <strong>Joint Ownership:</strong> If the vehicle is jointly owned, <strong>both</strong> owners must sign the application.
    </li>
    <li>
      <strong>Exempt Vehicles:</strong> Note that the DMV will not issue a duplicate title for any vehicle model year 1999 or older.
    </li>
  </ul>
  <br>
  Donating? We can help you determine if your car is title-exempt or guide you through the TDMV 18 process. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      New Hampshire simplifies transfers for surviving spouses under **RSA 261:17**.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> A surviving spouse may transfer the vehicle by signing the back of the existing title and providing a copy of the Death Certificate. No new title application is required for the spouse to sell the vehicle.
        </li>
        <li>
          <strong>Joint Tenants:</strong> If the title lists "Joint Tenants with Rights of Survivorship," the survivor can retitle in their name by providing the death certificate and a new title application at their Town Clerk's office.
        </li>
        <li>
          <strong>Probate:</strong> If there is no surviving spouse, the court-appointed Executor must sign the title and provide their <strong>Appointment of Fiduciary</strong> papers.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In New Hampshire, a salvage title is required for vehicles declared a total loss.
      <ul>
        <li>Apply using an **Application for Salvage Certificate** and include the <strong>$10.00</strong> fee.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Salvage Inspection</strong> performed by a New Hampshire State Trooper (Fee: $50.00).</li>
        <li>Contact the Title Bureau at (603) 227-4180 to schedule an appointment. The new title will be branded <strong>"Rebuilt."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in New Hampshire:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide form <strong>TDMV 20A</strong> or a letter on their letterhead. <strong>This signature must be notarized</strong> if using form TDMV 20A.</li>
        <li><strong>Electronic Liens (ELT):</strong> Since 2025, NH has expanded its ELT hub. If your lien is electronic, the lender releases it through the system, and the DMV mails the clean title to you.</li>
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
    stateName: "New Hampshire",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}