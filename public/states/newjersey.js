export default function () {

  // Forms specific to New Jersey (MVC Forms)
  const formLibrary = {
    "os-ss-uta": {
      label: "OS/SS-UTA - Universal Title Application",
      path: "https://www.nj.gov/mvc/pdf/vehicles/OS-SS-UTA.pdf"
    },

    "os-ss-52": {
      label: "OS/SS-52 - Application for Duplicate Certificate of Ownership",
      path: "https://www.nj.gov/mvc/pdf/vehicles/OS-SS-52.pdf"
    },

    "ba-62": {
      label: "BA-62 - Affidavit of Surviving Spouse",
      path: "https://www.nj.gov/mvc/pdf/vehicles/BA-62.pdf"
    },

    "os-ss-61": {
      label: "OS/SS-61 - Application for Salvage Certificate of Title",
      path: "https://nj.gov/mvc/pdf/vehicles/OS-SS-61.pdf"
    },

    "tod-form": {
      label: "Transfer on Death Beneficiary Designation",
      path: "https://www.nj.gov/mvc/pdf/vehicles/beneficiary_transfer_form.pdf"
    }
  };

  // NJ-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>New Jersey title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Seller Section:</strong> On the back of the title, sign your name exactly as it appears on the front in the "Signature of Seller" section.
        </li>
        <li>
          <strong>Transfer Requirements:</strong> You must include the buyer's name and address, the date of sale, the purchase price, and the odometer reading.
        </li>
        <li>
          Car Donation Wizard New Jersey Title Tips:
          <a href="https://www.cardonationwizard.com/title/31/new-jersey-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: Remove your license plates! You must surrender them to an MVC agency or a drop box unless you are transferring them to another vehicle.</em>
    `,

    "No Title or Missing Title": `
  If your New Jersey title is lost or stolen, you must apply for a duplicate via form <strong>OS/SS-52</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$60.00</strong>.
    </li>
    <li>
      <strong>Requirements:</strong> You must provide a copy of your current or expired registration or insurance card, along with a copy of your driver's license.
    </li>
    <li>
      <strong>Where to Apply:</strong> You can mail the application to the Trenton Central Office or bring it in person to any MVC Regional Service Center.
    </li>
  </ul>
  <br>
  Donating? We can help you process the OS/SS-52. Email us at titles@arscars.com with your vehicle details!
`,

    "How to Get Title for Deceased Owner": `
      New Jersey offers simplified transfers for surviving spouses and heirs.
      <ul>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary was designated using the <strong>TOD Form</strong>, they can claim the title with a Death Certificate and the original title.
        </li>
        <li>
          <strong>Surviving Spouse:</strong> Use the <strong>BA-62 Affidavit</strong>. If the vehicle is the only asset, a spouse can often transfer the title without full probate.
        </li>
        <li>
          <strong>Next of Kin:</strong> If there is no spouse or will, an <strong>Affidavit of Next of Kin</strong> from the County Surrogate is required.
        </li>
        <li>
          Official NJ MVC Transfer Guide:
          <a href="https://www.nj.gov/mvc/vehicles/transowner.htm"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          NJ MVC Deceased Owner Info
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In New Jersey, a salvage title is required if a vehicle is a total loss or has damage exceeding its value.
      <ul>
        <li>Apply using form <strong>OS/SS-61</strong>. The fee is <strong>$60.00</strong>.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Specialty Inspection</strong> (Fee: $200.00).</li>
        <li>The inspection verifies the vehicle's identity and roadworthiness. After passing, you will receive a title branded <strong>"Rebuilt."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in New Jersey:
      <ul>
        <li>The lienholder must sign the "Lien Satisfied" section on the front of the title.</li>
        <li>If the title is lost, the lender must provide a <strong>Lien Release Letter</strong> on official letterhead, including the VIN, Year, and Make.</li>
        <li><strong>Electronic Liens (ELT):</strong> Many NJ liens are now electronic. Once paid, the lender notifies the MVC, and a clean title is mailed to the owner.</li>
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
    stateName: "New Jersey",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}