export default function () {

  // Forms specific to Massachusetts (RMV / MassDOT)
  const formLibrary = {
    "rta-form": {
      label: "RTA - Registration and Title Application (Must be insurance stamped)",
      path: "https://www.mass.gov/doc/registration-and-title-application/download"
    },

    "t21042": {
      label: "Form T21042 - Application for Duplicate Certificate of Title",
      path: "https://www.mass.gov/doc/application-for-duplicate-certificate-of-title/download"
    },

    "mvu-24": {
      label: "MVU-24 - Affidavit of Support of a Claim for Exemption from Sales Tax (Gift)",
      path: "https://www.mass.gov/doc/affidavit-in-support-of-a-claim-for-exemption-from-sales-or-use-tax-for-a-motor-vehicle/download"
    },

    "affidavit-surviving-spouse": {
      label: "Affidavit of Surviving Spouse (Title Transfer)",
      path: "https://www.mass.gov/doc/affidavit-of-surviving-spouse/download"
    },

    "salvage-inspection": {
      label: "Application for Inspection of a Salvaged Motor Vehicle",
      path: "https://www.mass.gov/doc/application-for-inspection-of-a-salvaged-motor-vehicle/download"
    }
  };

  // MA-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Massachusetts title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, sign and print your name in the "Assignment of Title" section.
        </li>
        <li>
          <strong>Insurance Requirement:</strong> In MA, you cannot complete a transfer without an active insurance policy. The buyer will need the **RTA form** stamped by their agent.
        </li>
        <li>
          Car Donation Wizard Massachusetts Title Tips:
          <a href="https://www.cardonationwizard.com/title/22/massachusetts-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: Remove your license plates! You must cancel them via the RMV website to stop your insurance and tax liability.</em>
    `,

    "No Title or Missing Title": `
  If your Massachusetts title is lost, stolen, or mutilated, you can request a duplicate via Form <strong>T21042</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The duplicate title fee is <strong>$25.00</strong>.
    </li>
    <li>
      <strong>Online Service:</strong> If there are no changes to your address or lien status, you can order a duplicate online:
      <a href="https://atlas-myrmv.massdot.state.ma.us/myrmv/_/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Replacement Online
      </a>
    </li>
    <li>
      <strong>Lien Release:</strong> If a lien was previously listed, you <strong>must</strong> include a notarized lien release letter from the lender.
    </li>
  </ul>
  <br>
  Donating? We can assist with the T21042 paperwork and guide you through the online portal. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Massachusetts allows a surviving spouse to transfer a vehicle title using the <strong>Affidavit of Surviving Spouse</strong>.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> Ownership typically transfers automatically to a spouse unless a will states otherwise. The fee is generally waived for a spouse retaining the vehicle.
        </li>
        <li>
          <strong>Requirements:</strong> You will need the original title, a copy of the Death Certificate, and the RTA form.
        </li>
        <li>
          <strong>Heirship:</strong> If there is no spouse, the court-appointed **Personal Representative** must sign the title and provide their appointment papers.
        </li>
        <li>
          Download Affidavit:
          <a href="https://www.mass.gov/doc/affidavit-of-surviving-spouse/download"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Massachusetts, a salvage title is required if a vehicle is declared a total loss.
      <ul>
        <li>Apply via the <strong>RTA Form</strong> (checking the Salvage box) with a <strong>$75.00</strong> fee.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>State Police Salvage Inspection</strong> (Fee: $50.00).</li>
        <li>Inspections are by appointment only. After passing, the new title will be branded <strong>"RECONSTRUCTED"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Massachusetts:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the front of the title.</li>
        <li>Alternatively, the lender must provide a signed letter on their letterhead stating the lien is satisfied, including the VIN, Year, Make, and Model.</li>
        <li>If the lien is released electronically (ELT), the RMV will automatically mail the clean paper title to the owner's address on file.</li>
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
    stateName: "Massachusetts",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}