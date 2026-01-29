export default function () {

  // Forms specific to New York (DMV MV-series)
  const formLibrary = {
    "mv-82": {
      label: "MV-82 - Vehicle Registration/Title Application",
      path: "https://dmv.ny.gov/forms/mv82.pdf"
    },

    "mv-902": {
      label: "MV-902 - Application for Duplicate Title",
      path: "https://dmv.ny.gov/forms/mv902.pdf"
    },

    "mv-912": {
      label: "MV-912 - Vehicle Bill of Sale",
      path: "https://dmv.ny.gov/forms/mv912.pdf"
    },

    "mv-349.1": {
      label: "MV-349.1 - Affidavit for Transfer of Motor Vehicle (Heirship)",
      path: "https://dmv.ny.gov/forms/mv3491.pdf"
    },

    "dtf-802": {
      label: "DTF-802 - Statement of Transaction (Sales Tax Form)",
      path: "https://dmv.ny.gov/forms/dtf802.pdf"
    }
  };

  // NY-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>New York title</strong> (Form MV-999), use blue or black ink. 
      <ul>
        <li>
          <strong>Transfer Section:</strong> On the back of the title, look for "Section 1: Transfer by Owner." The seller must sign and print their name exactly as it appears on the front.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> In NY, if the front lists two owners joined by "AND" or "OR," only <strong>one</strong> owner needs to sign to transfer.
        </li>
        <li>
          Car Donation Wizard New York Title Tips:
          <a href="https://www.cardonationwizard.com/title/33/new-york-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: You must remove your license plates and windshield registration sticker. Surrender the plates to any DMV office to receive a FS-6T receipt.</em>
    `,

    "No Title or Missing Title": `
  If your New York title is lost, stolen, or damaged, you must obtain a duplicate via form <strong>MV-902</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$20.00</strong>.
    </li>
    <li>
      <strong>Online Service:</strong> If your address is current, you can order a duplicate title online much faster:
      <a href="https://dmv.ny.gov/titles/replace-a-title-certificate"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Online
      </a>
    </li>
    <li>
      <strong>No Counter Service:</strong> NY DMV offices do not print titles on-site. All duplicates are mailed from Albany and typically arrive in 2-4 weeks.
    </li>
  </ul>
  <br>
  Donating? We can assist with the MV-902 process. Email us at titles@arscars.com with your license plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      New York allows for a simplified transfer for estates valued at <strong>$25,000 or less</strong>.
      <ul>
        <li>
          <strong>Surviving Spouse/Children:</strong> Use form <strong>MV-349.1</strong> (Affidavit for Transfer). This allows a spouse or child under 21 to transfer the title with a Death Certificate.
        </li>
        <li>
          <strong>Next of Kin:</strong> If there is no spouse/minor child, use form <strong>MV-349</strong>.
        </li>
        <li>
          <strong>Probate:</strong> If the vehicle is worth more than $25,000, the Executor must sign the title and provide their <strong>Letters Testamentary</strong>.
        </li>
        <li>
          Download NY Heirship Form:
          <a href="https://dmv.ny.gov/forms/mv3491.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form MV-349.1
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In New York, a vehicle is declared salvage if it is 8 model years old or newer and repairs exceed 75% of its value.
      <ul>
        <li>The primary salvage document is the <strong>MV-907A</strong> (Salvage Certificate).</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Salvage Vehicle Examination</strong> (Form MV-83SAL).</li>
        <li>The fee for the examination is <strong>$200.00</strong>. The resulting title will be branded <strong>"REBUILT SALVAGE."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in New York:
      <ul>
        <li>The lienholder should provide you with a <strong>Notice of Recorded Lien (MV-901)</strong> signed by an authorized officer.</li>
        <li>Alternatively, an original letter on the lender's letterhead is acceptable. <strong>Photocopies are not accepted.</strong></li>
        <li>If the lienholder is an individual (not a bank), their letter <strong>must be notarized</strong>.</li>
        <li>To remove the lien from the state record, mail the original release and your title to the DMV with a <strong>$20.00</strong> fee.</li>
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
    stateName: "New York",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}