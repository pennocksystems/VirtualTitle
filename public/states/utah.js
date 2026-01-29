export default function () {

  // Forms specific to Utah (DMV / Tax Commission Forms)
  const formLibrary = {
    "tc-656": {
      label: "TC-656 - Application for Utah Title",
      path: "https://tax.utah.gov/forms/current/tc-656.pdf"
    },

    "tc-123": {
      label: "TC-123 - Application for Duplicate Utah Title",
      path: "https://tax.utah.gov/forms/current/tc-123.pdf"
    },

    "tc-843": {
      label: "TC-843 - Affidavit of Inheritance (Heirship)",
      path: "https://tax.utah.gov/forms/current/tc-843.pdf"
    },

    "tc-817": {
      label: "TC-817 - Bill of Sale",
      path: "https://tax.utah.gov/forms/current/tc-817.pdf"
    },

    "tc-569d": {
      label: "TC-569D - Statement of Facts (Salvage/Rebuilt)",
      path: "https://tax.utah.gov/forms/current/tc-569d.pdf"
    }
  };

  // UT-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Utah title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Seller Signature:</strong> On the back of the title, sign your name exactly as it appears on the front in the "Signature of Seller" section.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> Utah uses the <strong>"Joint Tenancy"</strong> rule. If names are joined by "OR," only one signature is required. If joined by "AND," all owners must sign.
        </li>
        <li>
          <strong>Liability Release:</strong> Within 48 hours of selling, you <strong>must</strong> report the sale to the DMV via the Utah Person-to-Person portal or by mailing a letter to avoid liability.
        </li>
      </ul>
      
      <em>Important: Remove your license plates! In Utah, plates stay with the seller and should not be left on the vehicle.</em>
    `,

    "No Title or Missing Title": `
  If your Utah title is lost, stolen, or damaged, you must apply for a duplicate via form <strong>TC-123</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$6.00</strong>.
    </li>
    <li>
      <strong>Requirements:</strong> You must provide the VIN, current plate number, and the owner's signature.
    </li>
    <li>
      <strong>Expedited Service:</strong> Utah offers a "Title in a Hurry" service for an additional fee at the main DMV headquarters in Salt Lake City.
    </li>
  </ul>
  <br>
  Donating? We can help you process the TC-123 to make the donation seamless. Email us at titles@arscars.com with your VIN to get started!
`,

    "How to Get Title for Deceased Owner": `
      Utah provides a simplified process for estates valued at <strong>$100,000 or less</strong>.
      <ul>
        <li>
          <strong>Affidavit of Inheritance:</strong> Use form <strong>TC-843</strong>. This allows the rightful heir to transfer the title without probate.
        </li>
        <li>
          <strong>Wait Period:</strong> At least <strong>30 days</strong> must have passed since the death.
        </li>
        <li>
          <strong>Joint Tenants:</strong> If the title lists owners as "Joint Tenants" (WROS), the survivor can transfer the title by providing a Death Certificate and the original title.
        </li>
        <li>
          Download Heirship Form:
          <a href="https://tax.utah.gov/forms/current/tc-843.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form TC-843
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Utah, a salvage title is required if a vehicle is declared a total loss by an insurance company.
      <ul>
        <li>To return a salvage car to the road, it must pass a <strong>Safety Inspection</strong> and an <strong>Emissions Test</strong> (in specific counties).</li>
        <li>You must also complete a **Statement of Facts (TC-569D)** detailing the repairs made.</li>
        <li>The resulting title will be branded as <strong>"Rebuilt Restored."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Utah:
      <ul>
        <li>The lienholder must sign the "Lien Release" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide an original <strong>Lien Release Letter</strong> on company letterhead (including VIN and Year) or form <strong>TC-817</strong>.</li>
        <li>Utah utilizes an **Electronic Lien and Title (ELT)** system. If the lien is electronic, the lender releases it digitally, and the DMV mails a clean paper title to the owner.</li>
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
    stateName: "Utah",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}