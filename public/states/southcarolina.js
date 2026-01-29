export default function () {

  // Forms specific to South Carolina (SCDMV Forms)
  const formLibrary = {
    "form-400": {
      label: "Form 400 - Application for Certificate of Title and Registration",
      path: "https://dmv.sc.gov/sites/scdmv/files/2025-12/Form%20400_0.pdf"
    },

    "form-416": {
      label: "Form 416 - Notice of Vehicle Sold (Liability Release)",
      path: "https://dmv.sc.gov/sites/scdmv/files/2018-12/Notice%20of%20Vehicle%20Sold%20416.pdf"
    },

    "tod-1": {
      label: "TOD-1 - Transfer on Death Application",
      path: "https://dmv.sc.gov/sites/scdmv/files/2023-01/TOD-1.pdf"
    },

    "form-400-s": {
      label: "Form 400-S - Application for Salvage/Branded Certificate of Title",
      path: "https://dmv.sc.gov/sites/scdmv/files/2026-01/400-S.pdf"
    },

    "ti-006": {
      label: "TI-006 - Statement of Vehicle Operation (For non-residents titling in SC)",
      path: "https://dmv.sc.gov/sites/scdmv/files/2018-12/TI-006.pdf"
    }
  };

  // SC-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>South Carolina title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, the seller must sign and print their name exactly as it appears on the front. 
        </li>
        <li>
          <strong>Required Info:</strong> You must include the purchase price, odometer reading, and date of sale. If the title lacks a space for the price, a separate Bill of Sale is required.
        </li>
        <li>
          <strong>Notice of Sale:</strong> Sellers should complete form <strong>416</strong> and mail it to the SCDMV immediately after the sale to release liability.
        </li>
      </ul>
      
      <em>Note: License plates stay with the <strong>seller</strong>. You must remove them and can either transfer them to another vehicle or return them to the SCDMV.</em>
    `,

    "No Title or Missing Title": `
  If your South Carolina title is lost, stolen, or damaged, you can request a duplicate via <strong>Form 400</strong>.
  <ul>
    <li>
      <strong>Fees:</strong> 
      <ul>
        <li>Standard Duplicate: <strong>$15.00</strong> (Mailed in 3-5 days).</li>
        <li>Expedited (Same Day): <strong>$35.00</strong> (Available in-person at branch offices).</li>
      </ul>
    </li>
    <li>
      <strong>Online Service:</strong> Most owners can order a duplicate title online through the SCDMV portal:
      <a href="https://www.scdmvonline.com/SCTRNS/Public/Transactions/Contact.aspx"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         SCDMV Online Duplicate Title
      </a>
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the Form 400 process. Email us at titles@arscars.com with your license plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      South Carolina allows for several ways to transfer a title after an owner passes away.
      <ul>
        <li>
          <strong>TOD (Transfer on Death):</strong> If the title has a TOD beneficiary (filed via <strong>Form TOD-1</strong>), the beneficiary can claim the title with a certified Death Certificate.
        </li>
        <li>
          <strong>Probate:</strong> If the estate is in probate, the <strong>Personal Representative (PR)</strong> signs the title and provides the court-issued Certificate of Appointment.
        </li>
        <li>
          <strong>Small Estate:</strong> If no PR is appointed, a <strong>Small Estate Affidavit</strong> from the Probate Court may be used to transfer the title to the rightful heir.
        </li>
        <li>
          <strong>"Or" Relationship:</strong> If the title lists two owners joined by "OR," the surviving owner can transfer the title as if the other person never died.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In South Carolina, a vehicle is branded salvage if it sustains damage exceeding <strong>75%</strong> of its fair market value.
      <ul>
        <li>Apply using <strong>Form 400-S</strong>. The fee is <strong>$15.00</strong>.</li>
        <li>To return a salvage vehicle to the road, it must be repaired and inspected by an authorized SCDMV agent.</li>
        <li>The resulting title will be branded as <strong>"Salvage Rebuilt"</strong> or <strong>"Salvage Flood Rebuilt"</strong> depending on the damage type.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in South Carolina:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> SC requires most business lenders to use the ELT system. Once the loan is paid, the lender notifies the SCDMV, and a clean paper title is mailed to the owner automatically.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign and date the "Lien Satisfied" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide a notarized <strong>Lien Release Letter</strong> on official letterhead.</li>
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
    stateName: "South Carolina",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}