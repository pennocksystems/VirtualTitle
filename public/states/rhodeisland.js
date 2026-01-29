export default function () {

  // Forms specific to Rhode Island (DMV TR-series)
  const formLibrary = {
    "tr-1": {
      label: "TR-1 - Application for Registration and Title",
      path: "https://dmv.ri.gov/media/1116/download"
    },

    "tr-2": {
      label: "TR-2 - Application for Title (Title Only)",
      path: "https://dmv.ri.gov/media/1121/download"
    },

    "tr-5": {
      label: "TR-5 - Salvage Inspection Application",
      path: "https://dmv.ri.gov/media/611/download"
    },

    "sole-heir-affidavit": {
      label: "Affidavit and Assignment of Title – Sole Heir Affidavit",
      path: "https://dmv.ri.gov/media/1126/download"
    },

    "t-334": {
      label: "T-334 - Out-of-State Dealer Sales Tax Form",
      path: "https://dmv.ri.gov/media/1101/download"
    }
  };

  // RI-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Rhode Island title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>The 2001 Rule:</strong> Previously, RI did not title cars 2000 or older. However, as of 2024, <strong>all vehicles</strong> require a title. If you have an older vehicle that was never titled, you must provide the previous registration as proof of ownership.
        </li>
        <li>
          <strong>Seller Signature:</strong> Sign the back of the title in the "Signature of Seller" section. 
        </li>
        <li>
          <strong>Notary Requirement:</strong> Standard private sales do not require a notary. However, if two owners are on the title and one is absent during the DMV visit, the absent party's signature on the <strong>TR-1</strong> must be notarized.
        </li>
      </ul>
      
      <em>Important: You must remove your license plates! You can cancel them online to receive a TR-3 receipt for tax and insurance purposes.</em>
    `,

    "No Title or Missing Title": `
  If your Rhode Island title is lost or damaged, you must apply for a duplicate via the <strong>Research/Title Office</strong> in Cranston.
  <ul>
    <li>
      <strong>Fee:</strong> As of Jan 2026, the fee for a duplicate title is <strong>$53.50</strong> (includes the $3.50 technology surcharge).
    </li>
    <li>
      <strong>Application:</strong> Use Form <strong>TR-1</strong> (checking the "Duplicate Title" box) or Form <strong>TR-2</strong>.
    </li>
    <li>
      <strong>Lien Release:</strong> If a lien was recorded, you must provide an original lien release letter or a "Title Request for Lienholder" form.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the $53.50 duplicate process. Email us at titles@arscars.com for assistance!
`,

    "How to Get Title for Deceased Owner": `
      Rhode Island uses the <strong>Sole Heir Affidavit</strong> for estates that are not probated.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> Ownership typically passes to the spouse by law. Present a certified Death Certificate and the original title.
        </li>
        <li>
          <strong>Sole Heir Affidavit:</strong> If there is no spouse and no probate, the heirs must complete this affidavit and have it <strong>notarized</strong>. 
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> As of late 2025, RI supports TOD designations. If the title lists a beneficiary, they can claim the vehicle with a death certificate.
        </li>
        <li>
          Download Heir Affidavit:
          <a href="https://dmv.ri.gov/media/1126/download"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Rhode Island, any vehicle declared a total loss requires a **Red Salvage Title**.
      <ul>
        <li>The insurance company or owner must apply for the salvage certificate (Fee: <strong>$53.50</strong>).</li>
        <li>To register a salvage car, it must be repaired by a **licensed Salvage Rebuilder** and pass a **Salvage Inspection** (Fee: $58.50).</li>
        <li>Once passed, the new title is branded <strong>"Reconstructed Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Rhode Island:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is lost, a notarized **Lien Release** on the lender's letterhead is required.</li>
        <li>Rhode Island is an **ELT (Electronic Lien and Title)** state. If your lien is electronic, the lender releases it digitally, and the DMV mails the paper title to you.</li>
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
    stateName: "Rhode Island",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}