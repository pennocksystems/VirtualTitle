export default function () {

  // Forms specific to New Mexico (MVD Forms)
  const formLibrary = {
    "mvd-10002": {
      label: "MVD 10002 - Application for Title and Registration",
      path: "https://realfile.tax.newmexico.gov/mvd10002.pdf"
    },

    "mvd-10901": {
      label: "MVD 10901 - Application for Duplicate Certificate of Title",
      path: "https://realfile.tax.newmexico.gov/mvd10901.pdf"
    },

    "mvd-10009": {
      label: "MVD 10009 - Bill of Sale",
      path: "https://realfile.tax.newmexico.gov/mvd10009.pdf"
    },

    "mvd-10011": {
      label: "MVD 10011 - Certificate of Transfer Without Probate",
      path: "https://realfile.tax.newmexico.gov/mvd10011.pdf"
    },

    "mvd-10018": {
      label: "MVD 10018 - Affidavit of Gift of Motor Vehicle (Requires Notary)",
      path: "https://realfile.tax.newmexico.gov/mvd10018.pdf"
    },

    "mvd-10041": {
      label: "MVD 10041 - Release of Lien",
      path: "https://realfile.tax.newmexico.gov/mvd10041.pdf"
    }
  };

  // NM-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>New Mexico title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, sign your name exactly as it appears on the front in the "Seller's Signature" section.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> New Mexico defaults to "AND" even if it says "And/Or." If multiple owners are listed, <strong>all</strong> owners must sign unless specifically stated otherwise.
        </li>
        <li>
          Car Donation Wizard New Mexico Title Tips:
          <a href="https://www.cardonationwizard.com/title/32/new-mexico-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: Remove your license plates! You must take the plate to an MVD office to be destroyed or apply to have it assigned to another vehicle within 30 days.</em>
    `,

    "No Title or Missing Title": `
  If your New Mexico title is lost, stolen, or mutilated, you can request a replacement via form <strong>MVD 10901</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$5.00</strong>.
    </li>
    <li>
      <strong>Online Service:</strong> You can often order a duplicate title online for the same $5 fee through <strong>MVD Online</strong>:
      <a href="https://mvdonline.com/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Visit MVD Online Services
      </a>
    </li>
    <li>
      <strong>Mailing:</strong> All replacement titles are now mailed from the Santa Fe central office to improve security. You will not receive a same-day print at the field office.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the MVD 10901 form. Email us at titles@arscars.com with your license plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      New Mexico allows for simplified transfers for spouses or heirs when the estate is not probated.
      <ul>
        <li>
          <strong>No Probate:</strong> Use form <strong>MVD 10011 (Certificate of Transfer Without Probate)</strong>. This form <strong>must be notarized</strong>.
        </li>
        <li>
          <strong>Eligibility:</strong> 30 days must have passed since the death, and the total estate value must be under $50,000.
        </li>
        <li>
          <strong>Requirements:</strong> You will need the original title, a certified copy of the Death Certificate, and the MVD 10011.
        </li>
        <li>
          Download Transfer Form:
          <a href="https://realfile.tax.newmexico.gov/mvd10011.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form MVD 10011
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In New Mexico, a salvage title is required if a vehicle is a total loss (repairs exceed fair market value).
      <ul>
        <li>Apply at an MVD office by surrendering the current title and providing a statement of repair costs.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Rebuilt Inspection</strong>.</li>
        <li>The new title will be issued with a <strong>"REBUILT"</strong> or <strong>"SALVAGE"</strong> brand depending on the previous designation.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in New Mexico:
      <ul>
        <li>The lienholder can sign the "Lien Release" section on the front of the title.</li>
        <li>Alternatively, the lender must provide form <strong>MVD 10041 (Release of Lien)</strong> or a notarized release letter on their official letterhead.</li>
        <li>When a lien is released, the MVD highly recommends obtaining a "clean" title to update state records and prevent future transfer delays.</li>
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
    stateName: "New Mexico",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}