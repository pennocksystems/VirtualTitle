export default function () {

  // Forms specific to Oregon (DMV / ODOT Forms)
  const formLibrary = {
    "form-226": {
      label: "Form 735-226 - Application for Title and Registration",
      path: "https://www.oregon.gov/odot/forms/dmv/226fill.pdf"
    },

    "form-515": {
      label: "Form 735-515 - Application for Replacement / Duplicate Title",
      path: "https://www.oregon.gov/odot/forms/dmv/515fill.pdf"
    },

    "form-501": {
      label: "Form 735-501 - Bill of Sale",
      path: "https://www.oregon.gov/odot/forms/dmv/501fill.pdf"
    },

    "form-229": {
      label: "Form 735-229 - Application for Salvage Title",
      path: "https://www.oregon.gov/odot/forms/dmv/229fill.pdf"
    },

    "inheritance-affidavit": {
      label: "Inheritance Affidavit (No Probate)",
      path: "https://www.oregon.gov/odot/forms/dmv/516fill.pdf"
    }
  };

  // OR-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Oregon title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment:</strong> Sign on the back of the title in the center "reassignment" section. All sellers must print and sign exactly as their names appear on the front.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND" or "AND/OR," <strong>both</strong> owners must sign. If joined by "OR," only one signature is required.
        </li>
        <li>
          Car Donation Wizard Oregon Title Tips:
          <a href="https://www.cardonationwizard.com/title/36/oregon-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      
      <em>Important: You must remove your license plates! You can transfer them to another vehicle for $30 or surrender them to the DMV.</em>
    `,

    "No Title or Missing Title": `
  If your Oregon title is lost, stolen, or destroyed, you must apply for a replacement via form <strong>735-515</strong>.
  <ul>
    <li>
      <strong>Fees (Tiered by MPG):</strong>
      <ul>
        <li>0–19 MPG: <strong>$101.00</strong></li>
        <li>20–39 MPG: <strong>$106.00</strong></li>
        <li>40+ MPG: <strong>$116.00</strong></li>
        <li>All-Electric: <strong>$192.00</strong></li>
      </ul>
    </li>
    <li>
      <strong>Requirements:</strong> All owners listed on the original title must sign the application.
    </li>
    <li>
      <strong>Late Fees:</strong> Transferring a title more than 30 days after a sale incurs an additional <strong>$25–$50</strong> late fee.
    </li>
  </ul>
  <br>
  Donating? We can help you determine your vehicle's MPG tier and guide you through the 515 process. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Oregon offers a simplified process for estates that will not be probated.
      <ul>
        <li>
          <strong>Inheritance Affidavit:</strong> Use the <strong>Inheritance Affidavit (Form 516)</strong> if the estate value is under $275,000 ($75k personal property / $200k real estate).
        </li>
        <li>
          <strong>Signatures:</strong> The affidavit must be signed by all heirs. If mailed, signatures <strong>must be notarized</strong> or accompanied by a copy of each heir's ID.
        </li>
        <li>
          <strong>Probate:</strong> If the estate is in probate, the court-appointed <strong>Personal Representative</strong> signs the title and provides their letters of authority.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Oregon, a salvage title is required if a vehicle is a total loss (repairs equal 80% or more of market value).
      <ul>
        <li>Apply using Form <strong>735-229</strong>. The salvage title fee is <strong>$27.00</strong>.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>VIN Inspection</strong> ($9 fee) at a DMV office.</li>
        <li>The resulting title will be branded as <strong>"Reconstructed"</strong> or <strong>"Assembled."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Oregon:
      <ul>
        <li>The lienholder must sign the "Release of Interest" section on the face of the title. If they are a financial institution, they must use their <strong>official line stamp</strong>.</li>
        <li>If the title is lost, the lender must provide a <strong>Lien Release Letter</strong> on their letterhead, containing the VIN and a clear statement of release.</li>
        <li><strong>ELT System:</strong> Oregon began implementing a permissive Electronic Lien and Title system in 2026. If your lien is electronic, the lender releases it digitally, and the DMV can issue a paper title.</li>
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
    stateName: "Oregon",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}