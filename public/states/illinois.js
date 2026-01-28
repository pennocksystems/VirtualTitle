export default function () {

  // Forms specific to Illinois (Secretary of State / SOS)
  const formLibrary = {
    "vsd-190": {
      label: "VSD 190 - Application for Vehicle Transaction(s)",
      path: "https://www.ilsos.gov/departments/vehicles/title_and_registration/ert.html"
    },

    "rt-11.17": {
      label: "RT 11.17 - Application for Duplicate Title",
      path: "https://www.ilsos.gov/publications/pdf_publications/vsd190.pdf"
    },

    "vsd-658": {
      label: "VSD 658 - Junk Vehicle Bill of Sale",
      path: "https://www.ilsos.gov/publications/pdf_publications/vsd658.pdf"
    },

    "vsd-393": {
      label: "VSD 393 - Power of Attorney",
      path: "https://www.ilsos.gov/publications/pdf_publications/vsd393.pdf"
    },

    "small-estate-affidavit": {
      label: "Small Estate Affidavit (for Deceased Owners)",
      path: "https://www.ilsos.gov/publications/pdf_publications/rtpr44.pdf"
    }
  };

  // IL-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Illinois title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, sign and print your name in the "Signature of Seller(s)" section.
        </li>
        <li>
          <strong>Odometer Disclosure:</strong> You must enter the exact mileage at the time of transfer. Do not include tenths of a mile.
        </li>
        <li>
          Car Donation Wizard Illinois Title Tips:
          <a href="https://www.cardonationwizard.com/title/17/illinois-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Reminder: Remove your license plates! You can transfer them to another vehicle for a small fee at the SOS.</em>
    `,

    "No Title or Missing Title": `
  If your Illinois title is lost, stolen, or mutilated, you can apply for a duplicate via form <strong>VSD 190</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$50.00</strong>.
    </li>
    <li>
      <strong>Wait Period:</strong> Illinois will not issue a duplicate title within 15 days of the original being issued or 30 days of a previous duplicate.
    </li>
    <li>
      <strong>Expedited Service:</strong> For an additional $30 ($80 total), you can get "Quick Title" service at select SOS facilities.
    </li>
  </ul>
  <br>
  Donating? We can walk you through the ERT system to generate your VSD 190 quickly. Contact us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      In Illinois, the process for a deceased owner depends on the total value of the estate.
      <ul>
        <li>
          <strong>Small Estates (Under $100,000):</strong> You can typically use a <strong>Small Estate Affidavit</strong> along with the Death Certificate and the original title.
        </li>
        <li>
          <strong>Probated Estates:</strong> The executor must provide <strong>Letters of Office</strong> issued by the Clerk of the Circuit Court.
        </li>
        <li>
          Both methods require a <strong>VSD 190</strong> application in the name of the beneficiary or the estate.
        </li>
        <li>
          Download SOS Small Estate Forms:
          <a href="https://www.ilsos.gov/publications/pdf_publications/rtpr44.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Illinois issues a "Salvage Certificate" for vehicles that have been wrecked or damaged.
      <ul>
        <li>A salvage vehicle cannot be driven on public roads until it is rebuilt and passes an inspection by the <strong>Secretary of State Police</strong>.</li>
        <li>The inspection fee is <strong>$94</strong>, plus the title fee.</li>
        <li>Once passed, you will receive a title branded <strong>"REBUILT"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Illinois:
      <ul>
        <li>The lienholder must sign and date the "Lien Release" section on the front of the title.</li>
        <li>If the title is lost, the lender must provide a <strong>Lien Release Letter</strong> on their official letterhead, including the VIN, year, make, and owner's name.</li>
        <li>If you are applying for a duplicate title and a lien is still on file, you <strong>must</strong> include the lien release with your application or the new title will be sent to the lender.</li>
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
    stateName: "Illinois",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}