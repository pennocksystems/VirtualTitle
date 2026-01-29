export default function () {

  // Forms specific to Texas (TxDMV VTR-series)
  const formLibrary = {
    "130-u": {
      label: "Form 130-U - Application for Texas Title and/or Registration",
      path: "https://www.txdmv.gov/sites/default/files/form_files/130-U.pdf"
    },

    "vtr-34": {
      label: "VTR-34 - Application for a Certified Copy of Title (Duplicate)",
      path: "https://www.txdmv.gov/sites/default/files/form_files/VTR-34.pdf"
    },

    "vtr-262": {
      label: "VTR-262 - Affidavit of Heirship for a Motor Vehicle",
      path: "https://www.txdmv.gov/sites/default/files/form_files/VTR-262.pdf"
    },

    "vtr-346": {
      label: "VTR-346 - Texas Motor Vehicle Transfer Notification (Liability Release)",
      path: "https://www.txdmv.gov/sites/default/files/form_files/VTR-346.pdf"
    },

    "14-317": {
      label: "Form 14-317 - Affidavit of Motor Vehicle Gift Transfer (Requires Notary)",
      path: "https://comptroller.texas.gov/taxes/publications/96-254/gift.php"
    }
  };

  // TX-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Texas title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>The Double Signature:</strong> In Texas, the seller must sign the back of the title <strong>AND</strong> the bottom of Form <strong>130-U</strong>.
        </li>
        <li>
          <strong>Front of Title:</strong> If there is a "Rights of Survivorship" agreement on file, an additional signature may be required.
        </li>
        <li>
          <strong>Liability Release:</strong> Within 30 days of selling, you <strong>must</strong> file Form <strong>VTR-346</strong> online to protect yourself from toll violations or crimes committed with the car.
        </li>
      </ul>
      <em>Important: You have the option to remove your license plates and registration sticker. TxDMV highly recommends this to prevent fraudulent use.</em>
    `,

    "No Title or Missing Title": `
  If your Texas title is lost, stolen, or destroyed, you must apply for a <strong>Certified Copy of Title</strong> via form <strong>VTR-34</strong>.
  <ul>
    <li>
      <strong>Fees:</strong> 
      <ul>
        <li>In Person: <strong>$5.45</strong> (Received immediately at a TxDMV Regional Service Center).</li>
        <li>By Mail: <strong>$2.00</strong> (Takes 10–15 business days).</li>
      </ul>
    </li>
    <li>
      <strong>Identification:</strong> You must provide a clear copy of a valid government-issued photo ID for <strong>all</strong> owners listed on the title.
    </li>
    <li>
      <strong>Note:</strong> A certified copy cannot be issued within 30 days of a previous certified copy.
    </li>
  </ul>
  <br>
  Donating? We can help you process the VTR-34. Email us at titles@arscars.com with your license plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      Texas offers a streamlined probate-free transfer using the <strong>Affidavit of Heirship (VTR-262)</strong>.
      <ul>
        <li>
          <strong>VTR-262:</strong> This form must be signed by <strong>all</strong> heirs and <strong>must be notarized</strong>.
        </li>
        <li>
          <strong>Small Estates:</strong> If the estate is not being probated, the heirs can designate one person to receive the title.
        </li>
        <li>
          <strong>Probate:</strong> If a will is probated, the Executor provides <strong>Letters Testamentary</strong> and signs the title as the seller.
        </li>
        <li>
          Official TX Heirship Guide:
          <a href="https://www.txdmv.gov/motorists/buying-or-selling-a-vehicle/title-transfers"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          View TxDMV Instructions
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Texas, a salvage title is required if repair costs exceed the vehicle's actual cash value.
      <ul>
        <li>Owners must apply for a Salvage Title (Form <strong>VTR-441</strong>) within 30 days of the damage.</li>
        <li>To return a salvage car to the road, it must pass a **Safety Inspection** and you must pay a **$65 Rebuilder Fee**.</li>
        <li>The new title will be branded <strong>"REBUILT SALVAGE"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Texas:
      <ul>
        <li><strong>Electronic Titles (e-Titles):</strong> Once paid, the lender notifies TxDMV electronically. The system automatically converts the record and mails a paper title to you.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Lien Release" section on the title or provide an original <strong>Lien Release Letter</strong> on company letterhead.</li>
        <li>To remove the lien from the state record, you must submit the release along with Form <strong>130-U</strong> and a <strong>$28–$33</strong> fee (varies by county).</li>
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
    stateName: "Texas",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}