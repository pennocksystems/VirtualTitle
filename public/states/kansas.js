export default function () {

  // Forms specific to Kansas (DOR Forms)
  const formLibrary = {
    "tr-212a": {
      label: "TR-212a - Title and Registration Application",
      path: "https://www.ksrevenue.gov/pdf/tr212a.pdf"
    },

    "tr-720b": {
      label: "TR-720b - Application for Duplicate Title",
      path: "https://www.ksrevenue.gov/pdf/tr720b.pdf"
    },

    "tr-312": {
      label: "TR-312 - Bill of Sale",
      path: "https://www.ksrevenue.gov/pdf/tr312.pdf"
    },

    "tr-82": {
      label: "TR-82 - Power of Attorney",
      path: "https://www.ksrevenue.gov/pdf/tr82.pdf"
    },

    "tr-83b": {
      label: "TR-83b - Decedents Affidavit (Affidavit of Heirship)",
      path: "https://www.ksrevenue.gov/pdf/tr83b.pdf"
    }
  };

  // KS-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Kansas title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> Look for the "Assignment of Title" section on the back. Sign on the "Signature of Seller" line.
        </li>
        <li>
          <strong>Handwriting:</strong> Ensure your signature matches the name printed on the front of the title exactly. Do not use white-out.
        </li>
        <li>
          Car Donation Wizard Kansas Title Tips:
          <a href="https://www.cardonationwizard.com/title/17/kansas-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: In Kansas, the license plate stays with the <strong>seller</strong>. Remove your plates immediately after the sale.</em>
    `,

    "No Title or Missing Title": `
  If your Kansas title is lost, stolen, or mutilated, you must apply for a duplicate via form <strong>TR-720b</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$10.00</strong>.
    </li>
    <li>
      <strong>Lien Check:</strong> If there was ever a lien on the vehicle, you must provide a <strong>Lien Release (TR-150)</strong> even if the loan was paid off years ago.
    </li>
    <li>
      <strong>Where to Apply:</strong> You can mail the form to the Topeka state office or visit your local <strong>County Treasurer’s office</strong>.
    </li>
  </ul>
  <br>
  Donating? If your title is missing, we can help you prepare the TR-720b. Email us at titles@arscars.com with your VIN!
`,

    "How to Get Title for Deceased Owner": `
      Kansas offers a simplified process for estates using the <strong>Decedents Affidavit (TR-83b)</strong>.
      <ul>
        <li>
          <strong>Small Estates:</strong> If the estate is not probated and the value is under a certain threshold, the heir can use form TR-83b.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> If the title has "TOD" followed by a name, that beneficiary simply needs to provide a death certificate to claim the title.
        </li>
        <li>
          <strong>Probated Estates:</strong> The Executor must provide <strong>Letters Testamentary</strong> issued by the court.
        </li>
        <li>
          Download KS Decedent Affidavit:
          <a href="https://www.ksrevenue.gov/pdf/tr83b.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form TR-83b
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Kansas requires a salvage title if a vehicle is damaged to the point that repairs cost 75% or more of its value.
      <ul>
        <li>Apply using form <strong>TR-13</strong>.</li>
        <li>To return a salvage vehicle to the road, it must pass an <strong>MVE-1 (VIN Inspection)</strong> conducted by the Kansas Highway Patrol.</li>
        <li>The resulting title will be branded as <strong>"Rebuilt Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Kansas:
      <ul>
        <li>The lienholder must complete a <strong>Lien Release (Form TR-150)</strong> or provide a notarized letter on their letterhead.</li>
        <li>Kansas is an <strong>E-Title state</strong>. If you have a lien, the state does not issue a paper title. Once the lien is released, the DOR will mail the paper title to the owner.</li>
        <li>Verify your lien status online:
          <a href="https://www.ksrevenue.gov/dovtitlelookup.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             KS Title/Lien Lookup
          </a>
        </li>
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
    stateName: "Kansas",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}