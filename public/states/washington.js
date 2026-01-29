export default function () {

  // Forms specific to Washington State (DOL Forms)
  const formLibrary = {
    "td-420-001": {
      label: "TD-420-001 - Vehicle Title Application",
      path: "https://dol.wa.gov/sites/default/files/2022-11/420001.pdf"
    },

    "td-420-040": {
      label: "TD-420-040 - Affidavit of Loss/Release of Interest",
      path: "https://dol.wa.gov/sites/default/files/2022-11/420040.pdf"
    },

    "td-420-065": {
      label: "TD-420-065 - Vehicle/Vessel Bill of Sale",
      path: "https://dol.wa.gov/sites/default/files/2022-11/420065.pdf"
    },

    "td-420-041": {
      label: "TD-420-041 - Affidavit of Inheritance/Litigation",
      path: "https://dol.wa.gov/sites/default/files/2022-11/420041.pdf"
    },

    "td-420-062": {
      label: "TD-420-062 - Report of Sale",
      path: "https://dol.wa.gov/sites/default/files/2022-11/420062.pdf"
    }
  };

  // WA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Washington title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the front of the title, all registered owners must sign in the "Registered Owner Name - Signature" section to release interest.
        </li>
        <li>
          <strong>Notarization:</strong> If you are mailing your application, your signature on the <strong>Vehicle Title Application</strong> must be notarized. If you go to a licensing office in person, the agent can certify your signature.
        </li>
        <li>
          <strong>Odometer Disclosure:</strong> Required for all vehicles model year 2011 or newer.
        </li>
      </ul>
      
      <em>Important: You must file a <strong>Report of Sale</strong> within 5 days. This protects you from tolling bills, towing charges, or civil issues involving the new owner.</em>
    `,

    "No Title or Missing Title": `
  If your Washington title is lost, stolen, or destroyed, you use the <strong>Affidavit of Loss/Release of Interest (TD-420-040)</strong>.
  <ul>
    <li>
      <strong>Fees:</strong> 
      <ul>
        <li>Standard Title: <strong>$35.50</strong> (Received in 6–8 weeks).</li>
        <li>Quick Title: <strong>$85.50</strong> (Available in-person at specific locations for same-day service).</li>
      </ul>
    </li>
    <li>
      <strong>Notary Required:</strong> Every registered owner listed on the record must have their signature notarized on the Affidavit of Loss.
    </li>
  </ul>
  <br>
  Donating? We can help you prepare the Affidavit in Lieu of Title so the vehicle can be picked up without a physical title in hand. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Washington offers a simplified process for "Small Estates" valued at <strong>$100,000 or less</strong>.
      <ul>
        <li>
          <strong>Affidavit of Inheritance:</strong> Use form <strong>TD-420-041</strong>. This allows heirs to transfer ownership without full probate if the estate meets the value limit.
        </li>
        <li>
          <strong>Wait Period:</strong> You must wait at least <strong>40 days</strong> after the owner's death to use the Small Estate process.
        </li>
        <li>
          <strong>Joint Tenants:</strong> If the title specifies "Joint Tenants with Right of Survivorship" (JTWROS), the survivor can transfer the title with a certified copy of the death certificate.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Washington, a vehicle is branded salvage if it's declared a total loss. 
      <ul>
        <li><strong>Total Loss Formula:</strong> Washington uses a formula (Repair Cost + Salvage Value &ge; Actual Cash Value) rather than a fixed percentage.</li>
        <li>To return a salvage car to the road, it must be inspected by the <strong>Washington State Patrol (WSP)</strong>.</li>
        <li>The inspection verifies the source of all parts used in the repair. The resulting title will be branded <strong>"WA REBUILT."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Washington:
      <ul>
        <li>The lienholder must sign the "Release of Interest" section on the title.</li>
        <li>If the title is lost, the lender must sign the **Affidavit of Loss/Release of Interest** and their signature <strong>must be notarized</strong>.</li>
        <li><strong>Electronic Titles:</strong> Once the loan is paid, most lenders release the lien electronically, and the DOL mails a clean paper title to the registered owner.</li>
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
    stateName: "Washington",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}