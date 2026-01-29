export default function () {

  // Forms specific to Vermont (DMV VT/VD-series)
  const formLibrary = {
    "vd-119": {
      label: "VD-119 - Vermont Registration, Tax, and Title Application",
      path: "https://dmv.vermont.gov/sites/dmv/files/documents/VD-119-Registration_Tax_Title_App.pdf"
    },

    "vt-004": {
      label: "VT-004 - Replacement Title Application",
      path: "https://dmv.vermont.gov/sites/dmv/files/documents/VT-004-Replacement_Title_App.pdf"
    },

    "vt-005": {
      label: "VT-005 - Bill of Sale and Odometer Disclosure Statement",
      path: "https://dmv.vermont.gov/sites/dmv/files/documents/VT-005-Bill_of_Sale_Odometer_Disclosure.pdf"
    },

    "vt-021": {
      label: "VT-021 - Deceased Owner Informational Bulletin (includes Spouse Statement)",
      path: "https://dmv.vermont.gov/sites/dmv/files/documents/VT-021-Deceased_Owner_Instructions.pdf"
    },

    "vt-017": {
      label: "VT-017 - Rebuilt/Salvage Title Application",
      path: "https://dmv.vermont.gov/sites/dmv/files/documents/VT-017-Salvage_Title_App.pdf"
    }
  };

  // VT-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Vermont title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>The "New" Title Rule:</strong> As of 2024, <strong>all</strong> vehicles require a title for transfer. If you own an older car that was never titled, your current registration acts as the title until it is sold.
        </li>
        <li>
          <strong>Assignment of Title:</strong> On the back, each owner listed on the front must sign as "Seller" exactly as their name appears.
        </li>
        <li>
          <strong>Odometer Disclosure:</strong> Required for all vehicles model year 2011 or newer.
        </li>
      </ul>
      
      <em>Important: Remove your license plates! You can transfer them to a new vehicle or must return them to the DMV if the registration is cancelled.</em>
    `,

    "No Title or Missing Title": `
  If your Vermont title is lost or destroyed, you must apply for a replacement via form <strong>VT-004</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> As of 2026, the replacement title fee is <strong>$42.00</strong>.
    </li>
    <li>
      <strong>Lien Release:</strong> If a lien was ever recorded, you <strong>must</strong> include a lien release on the lender's letterhead or form <strong>VT-008</strong>.
    </li>
    <li>
      <strong>Online Option:</strong> Residents can often request a replacement title through the <strong>myDMV</strong> portal if no info has changed.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the $42 duplicate process and the new mandatory titling rules. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Vermont provides a "Surviving Spouse" exception and a <strong>Transfer on Death (TOD)</strong> option.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> A spouse can transfer up to two vehicles into their name without probate if the owner died "intestate" (without a will).
        </li>
        <li>
          <strong>TOD Beneficiary:</strong> If form <strong>VT-007</strong> was previously filed, the beneficiary claims the vehicle with a Death Certificate.
        </li>
        <li>
          <strong>Probate:</strong> If the estate is in probate, the Executor signs the title and provides the <strong>Appointment of Fiduciary</strong>.
        </li>
        <li>
          Download Instructions:
          <a href="https://dmv.vermont.gov/sites/dmv/files/documents/VT-021-Deceased_Owner_Instructions.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form VT-021
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Vermont, a salvage title is required if a vehicle is declared a total loss by an insurance company.
      <ul>
        <li>Apply using form <strong>VT-017</strong>. The fee is <strong>$42.00</strong>.</li>
        <li>To "Rebuild" a title, the vehicle must pass a <strong>Salvage Inspection</strong> to ensure it was repaired to safety standards.</li>
        <li>The resulting title will be branded as <strong>"Rebuilt"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Vermont:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>Alternatively, use form <strong>VT-008</strong> or a letter on the lender's letterhead.</li>
        <li><strong>Electronic Liens:</strong> Vermont utilizes an <strong>ELT (Electronic Lien and Title)</strong> system. Once the loan is paid, the lender notifies the DMV, and the title is released to the owner.</li>
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
    stateName: "Vermont",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}