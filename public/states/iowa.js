export default function () {

  // Forms specific to Iowa (Iowa DOT Forms)
  const formLibrary = {
    "411007": {
      label: "Form 411007 - Application for Certificate of Title and/or Registration",
      path: "https://iowadot.seamlessdocs.com/f/ApplicationforCertificateofTitleandorRegistration"
    },

    "411033": {
      label: "Form 411033 - Application for Replacement of Iowa Certificate of Title",
      path: "https://iowadot.seamlessdocs.com/f/ApplicationforReplacementofIowaCertificateofTitle"
    },

    "411108": {
      label: "Form 411108 - Damage Disclosure Statement",
      path: "https://iowadot.seamlessdocs.com/f/DamageDisclosureStatement"
    },

    "411083": {
      label: "Form 411083 - Affidavit of Death Testate (With a Will)",
      path: "https://iowadot.seamlessdocs.com/f/CertificationofDeathTestate"
    },

    "411021": {
      label: "Form 411021 - Power of Attorney Authorization",
      path: "https://iowadot.seamlessdocs.com/f/PowerofAttorneyAuthorization"
    },

    "bill-of-sale": {
      label: "Iowa Bill of Sale (County Standard)",
      path: "https://www.iowataxandtags.org/wp-content/uploads/2021/06/Bill-of-Sale.pdf"
    }
  };

  // IA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Iowa title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment:</strong> The seller must sign and print their name in the "Assignment of Title" section on the back.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If the names are joined by "AND," all owners must sign. If joined by "OR," only one signature is required.
        </li>
        <li>
          <strong>Damage Disclosure:</strong> If the vehicle is 7 model years old or newer, the seller must complete the Damage Disclosure section on the back of the title.
        </li>
        <li>
          Car Donation Wizard Iowa Title Tips:
          <a href="https://www.cardonationwizard.com/title/15/iowa-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Note: In Iowa, you must remove your license plates. You may be eligible for a refund of the unused registration fee if the credit is $10 or more.</em>
    `,

    "No Title or Missing Title": `
  If your Iowa title is lost or destroyed, you must apply for a replacement at the <strong>County Treasurer’s office where the original was issued</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard replacement fee is <strong>$25.00</strong>.
    </li>
    <li>
      <strong>Mandatory Wait:</strong> By Iowa law, there is a <strong>5-day waiting period</strong>. The replacement title will be printed on the 6th business day.
    </li>
    <li>
      <strong>Application:</strong> Use Form <strong>411033</strong>. All owners listed on the title must sign the application.
    </li>
  </ul>
  <br>
  Donating? We can help you file the 411033. Email us at titles@arscars.com with your county of issuance to get started!
`,

    "How to Get Title for Deceased Owner": `
      Iowa utilizes specific affidavits to transfer ownership from a deceased person without going through full probate.
      <ul>
        <li>
          <strong>With a Will:</strong> Use Form <strong>411083 (Affidavit of Death Testate)</strong>. The beneficiary can transfer the title by providing this notarized form and the death certificate.
        </li>
        <li>
          <strong>Without a Will:</strong> Use Form <strong>411088 (Affidavit of Death Intestate)</strong>.
        </li>
        <li>
          <strong>Surviving Spouse:</strong> Ownership can often be transferred to a surviving spouse for no fee using the Affidavit of Surviving Spouse.
        </li>
        <li>
          Download IA Death Testate Form:
          <a href="https://iowadot.seamlessdocs.com/f/CertificationofDeathTestate"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form 411083
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Iowa, a salvage title is required if repair costs exceed 70% of the vehicle's fair market value.
      <ul>
        <li>You must apply for a salvage title via Form <strong>411007</strong> (checking the 'Salvage' box).</li>
        <li>To return the vehicle to "Regular" status, it must pass a <strong>Salvage Theft Examination</strong> by a peace officer (Fee: $50).</li>
        <li>Once passed, the new title will be permanently branded as <strong>"Prior Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Iowa:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> If the lender is part of Iowa's ELT system, they will release the lien electronically. You do not receive a paper title until the lien is released.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Cancellation of Security Interest" on the face of the title.</li>
        <li>If the title is lost, the lender must provide form <strong>411168 (Cancellation of Security Interest)</strong> to the County Treasurer.</li>
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
    stateName: "Iowa",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}