export default function () {

  // Forms specific to Nebraska (DMV Forms)
  const formLibrary = {
    "rv-707": {
      label: "RV-707 - Application for Certificate of Title",
      path: "https://dmv.nebraska.gov/dvr/pdf/titleapp.pdf"
    },

    "rv-707a": {
      label: "RV-707a - Application for Duplicate Certificate of Title",
      path: "https://dmv.nebraska.gov/dvr/pdf/dupttlapp.pdf"
    },

    "aff-decedent": {
      label: "Affidavit for Transfer of Decedent's Vehicle (Heirship)",
      path: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/affdecedent.pdf"
    },

    "pow-attorney": {
      label: "Nebraska Motor Vehicle Power of Attorney",
      path: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/mv_poa.pdf"
    },

    "bill-of-sale": {
      label: "Nebraska Bill of Sale",
      path: "https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/billofsale.pdf"
    }
  };

  // NE-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Nebraska title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Transfer of Ownership:</strong> Sign your name exactly as it appears on the front of the title in the "Seller's Signature" section on the back.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> Nebraska titles that list multiple owners separated by "OR" allow either owner to sign. If they are separated by "AND," both must sign.
        </li>
        <li>
          Car Donation Wizard Nebraska Title Tips:
          <a href="https://www.cardonationwizard.com/title/28/nebraska-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: In Nebraska, the license plates stay with the <strong>seller</strong>. You must remove them immediately upon sale or donation.</em>
    `,

    "No Title or Missing Title": `
  If your Nebraska title is lost, destroyed, or mutilated, you must apply for a duplicate via form <strong>RV-707a</strong>.
  <ul>
    <li>
      <strong>Notary Required:</strong> All signatures on the duplicate title application <strong>must be notarized</strong>. 
    </li>
    <li>
      <strong>Exception:</strong> If the title is held by a husband and wife, either spouse may sign as an agent for the other.
    </li>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$14.00</strong>.
    </li>
    <li>
      <strong>Where to Apply:</strong> You can submit this to any Nebraska County Treasurer's office.
    </li>
  </ul>
  <br>
  Donating? We can help you process the RV-707a to ensure the paperwork is ready for the vehicle pick-up. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Nebraska has a simplified transfer process for "Small Estates" using the <strong>Affidavit for Transfer of Decedent's Vehicle</strong>.
      <ul>
        <li>
          <strong>Eligibility:</strong> The total value of the decedent's personal property (excluding real estate) must not exceed <strong>$100,000</strong>.
        </li>
        <li>
          <strong>Wait Period:</strong> At least <strong>30 days</strong> must have passed since the owner's death.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> If the title indicates a TOD beneficiary, that person can apply for a title in their name by providing a Death Certificate and form RV-707.
        </li>
        <li>
          Download Decedent Affidavit:
          <a href="https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dvr/forms/affdecedent.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Nebraska, a salvage title is required if a vehicle has been damaged to the point that repairs exceed 75% of its retail value.
      <ul>
        <li>You must submit the existing title and application to the County Treasurer for a <strong>Salvage Branded</strong> title.</li>
        <li>To return the vehicle to the road, it must pass a <strong>Vehicle Inspection</strong> conducted by a designated official (often the Sheriff's office).</li>
        <li>The new title will be branded as <strong>"Previously Salvaged."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Nebraska:
      <ul>
        <li><strong>Electronic Titles:</strong> Nebraska uses an Electronic Lien and Title (ELT) system. Once the lien is satisfied, the lender notifies the DMV, and the title is released/printed.</li>
        <li><strong>Paper Titles:</strong> The lienholder should note the cancellation on the face of the title over their signature and date.</li>
        <li>If the title is lost, a notarized lien release on the lender's letterhead can be accepted by the County Treasurer.</li>
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
    stateName: "Nebraska",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}