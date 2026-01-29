export default function () {

  // Forms specific to Nevada (DMV VP / ADM Forms)
  const formLibrary = {
    "vp-012": {
      label: "VP 012 - Application for Duplicate Nevada Certificate of Title",
      path: "https://dmv.nv.gov/pdfforms/vp012.pdf"
    },

    "vp-239": {
      label: "VP 239 - Transfer on Death Application",
      path: "https://dmv.nv.gov/pdfforms/vp239.pdf"
    },

    "vp-024": {
      label: "VP 024 - Affidavit for Transfer of Title for Estates Without Probate",
      path: "https://dmv.nv.gov/pdfforms/vp024.pdf"
    },

    "vp-213": {
      label: "VP 213 - Application for Salvage Title",
      path: "https://dmv.nv.gov/pdfforms/vp213.pdf"
    },

    "vp-186": {
      label: "VP 186 - Lien Release",
      path: "https://dmv.nv.gov/pdfforms/vp186.pdf"
    }
  };

  // NV-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Nevada title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Where to Sign:</strong> Sign on the front of the title in the lower-left section marked "Signature of Seller(s)."
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If the names are joined by "AND," all owners must sign. If joined by "OR," any one owner can sign alone.
        </li>
        <li>
          Car Donation Wizard Nevada Title Tips:
          <a href="https://www.cardonationwizard.com/title/32/nevada-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: You must remove your license plates! You have 60 days to surrender them to the DMV or transfer them to another vehicle.</em>
    `,

    "No Title or Missing Title": `
  If your Nevada title is lost, stolen, or mutilated, you can request a replacement via form <strong>VP 012</strong>.
  <ul>
    <li>
      <strong>Notary Required:</strong> This application <strong>must be notarized</strong> or witnessed by an authorized DMV representative.
    </li>
    <li>
      <strong>Fee:</strong> The duplicate title fee is <strong>$20.00</strong> if mailed to a Nevada address and <strong>$35.00</strong> for out-of-state.
    </li>
    <li>
      <strong>Turbo Titles:</strong> You can now apply for a duplicate title online via the <strong>DriveNV</strong> portal:
      <a href="https://dmv.nv.gov/turbotitles.htm"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Online
      </a>
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the VP 012 requirements and the online portal. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      Nevada offers a streamlined process for heirs when the estate is not in probate.
      <ul>
        <li>
          <strong>Small Estates:</strong> If there is no probate case, heirs can use the <strong>Affidavit for Transfer of Title for Estates Without Probate (VP 024)</strong>.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary was previously named using form <strong>VP 239</strong>, they can claim the title by providing a certified Death Certificate and form **VP 241**.
        </li>
        <li>
          Official Nevada Deceased Owner Guide:
          <a href="https://dmv.nv.gov/regtod.htm"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          NV DMV Heirship Info
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Nevada, a salvage title is required if a vehicle is damaged to the extent that repairs exceed <strong>65%</strong> of its fair market value.
      <ul>
        <li>Apply using Form <strong>VP 213</strong>. The fee is <strong>$10.00</strong>.</li>
        <li>To return the vehicle to the road, it must pass a <strong>DMV Safety Inspection</strong>.</li>
        <li>Once passed, the new title will be issued with a <strong>"Rebuilt"</strong> brand.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Nevada:
      <ul>
        <li><strong>Electronic Liens:</strong> If the title is an electronic record, the lienholder must release it electronically. The DMV will then mail a clear title to the owner.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign form <strong>VP 186 (Lien Release)</strong>, which <strong>must be notarized</strong>.</li>
        <li>Once you have the notarized release, you must submit it to the DMV to have the lien removed from the state's database.</li>
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
    stateName: "Nevada",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}