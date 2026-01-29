export default function () {

  // Forms specific to Virginia (DMV VSA/FMS series)
  const formLibrary = {
    "vsa-17a": {
      label: "VSA 17A - Application for Certificate of Title and Registration",
      path: "https://www.dmv.virginia.gov/sites/default/files/forms/vsa17a.pdf"
    },

    "vsa-67": {
      label: "VSA 67 - Application for Replacement and Substitute Titles",
      path: "https://www.dmv.virginia.gov/sites/default/files/forms/vsa67.pdf"
    },

    "vsa-24": {
      label: "VSA 24 - Authority to Transfer Virginia Title Certification (Heirship)",
      path: "https://www.dmv.virginia.gov/sites/default/files/forms/vsa24.pdf"
    },

    "vsa-18": {
      label: "VSA 18 - Beneficiary Transaction Request (Transfer on Death)",
      path: "https://www.dmv.virginia.gov/sites/default/files/forms/vsa18.pdf"
    },

    "fms-210": {
      label: "FMS 210 - Vehicle Registration Refund Application (Plate Return)",
      path: "https://www.dmv.virginia.gov/sites/default/files/forms/fms210.pdf"
    }
  };

  // VA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Virginia title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, the seller must complete the "Assignment of Title by Owner" section. Sign and print your name exactly as it appears on the front.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," both owners must sign. If joined by "OR," only one signature is required.
        </li>
        <li>
          <strong>E-Titling:</strong> If you and the buyer both have Virginia <strong>myDMV</strong> accounts, you may be able to transfer the title electronically without a paper document.
        </li>
      </ul>
      
      <em>Important: You MUST remove your license plates! Virginia law requires you to surrender them to the DMV or deactivate them online before canceling your insurance to avoid suspension.</em>
    `,

    "No Title or Missing Title": `
  If your Virginia title is lost, stolen, or illegible, you can request a replacement via form <strong>VSA 67</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard fee for a replacement title is <strong>$15.00</strong>.
    </li>
    <li>
      <strong>Online Service:</strong> You can request a "Substitute Title" or a replacement paper title instantly through your <strong>myDMV</strong> account:
      <a href="https://www.dmv.virginia.gov/vehicles/title/replacement"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Replacement Online
      </a>
    </li>
    <li>
      <strong>Note:</strong> If your title was electronic (e-title) and never printed, your first paper print request may be free.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the VSA 67 process. Email us at titles@arscars.com with your VIN to get started!
`,

    "How to Get Title for Deceased Owner": `
      Virginia offers specific paths for heirs and surviving owners.
      <ul>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary was named via form <strong>VSA 18</strong>, they must apply for the title within 120 days of the owner's death using the death certificate.
        </li>
        <li>
          <strong>Heirship (No Probate):</strong> If the estate value is under $50,000 and there is no will, use form <strong>VSA 24</strong> (Certification of Authority to Transfer). 
        </li>
        <li>
          <strong>Rights of Survivorship:</strong> If the title was issued as "Joint Tenants with Rights of Survivorship," the survivor can remove the deceased owner's name using form <strong>VSA 67</strong>.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Virginia, a salvage certificate is required if an uninsured/self-insured vehicle's repair costs exceed <strong>75%</strong> of its actual cash value.
      <ul>
        <li>Apply by mailing form <strong>VSA 56</strong> and the $15 fee to the DMV's Vehicle Branding Work Center in Richmond.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Rebuilt Vehicle Examination</strong> (Form LES 022A). The exam fee is <strong>$125.00</strong>.</li>
        <li>The vehicle must also pass a standard Virginia Safety Inspection <strong>before</strong> the rebuilt exam.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Virginia:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> Most Virginia lenders release liens electronically. Once released, the DMV automatically mails a "clean" paper title to the owner.</li>
        <li><strong>Paper Titles:</strong> The lender must sign and date the "Lien Satisfied" section on the front of the paper title and mail it to you.</li>
        <li>To update the DMV records and get a title without the lien listed, you must apply for a "Substitute Title" using form <strong>VSA 67</strong> and pay the $15 fee.</li>
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
    stateName: "Virginia",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}