export default function () {

  // Forms specific to Maryland (MVA VR-series)
  const formLibrary = {
    "vr-005": {
      label: "VR-005 - Application for Certificate of Title",
      path: "https://mva.maryland.gov/Documents/VR-005.pdf"
    },

    "vr-018": {
      label: "VR-018 - Application for Duplicate Certificate of Title",
      path: "https://mva.maryland.gov/Documents/VR-018.pdf"
    },

    "vr-181": {
      label: "VR-181 - Bill of Sale (Notary required in specific cases)",
      path: "https://mva.maryland.gov/Documents/VR-181.pdf"
    },

    "vr-470": {
      label: "VR-470 - Appointment of Attorney-in-Fact (Power of Attorney)",
      path: "https://mva.maryland.gov/Documents/VR-470.pdf"
    },

    "vr-028": {
      label: "VR-028 - Application for Salvage Certificate/Owner Retention",
      path: "https://mva.maryland.gov/Documents/VR-028.pdf"
    }
  };

  // MD-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Maryland title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Ownership:</strong> Flip to the back of the title. The seller must sign and print their name in the first section titled "Assignment of Ownership."
        </li>
        <li>
          <strong>Names:</strong> Ensure signatures match the names printed on the front exactly.
        </li>
        <li>
          Car Donation Wizard Maryland Title Tips:
          <a href="https://www.cardonationwizard.com/title/21/maryland-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: In Maryland, the license plates stay with the <strong>owner</strong>. You must remove them and either return them to the MVA or transfer them to another vehicle.</em>
    `,

    "No Title or Missing Title": `
  If your Maryland title is lost, stolen, or damaged, you can request a duplicate via form <strong>VR-018</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$40.00</strong>.
    </li>
    <li>
      <strong>Online Service:</strong> Most Maryland residents can skip the paper form and order a duplicate title instantly via <strong>myMVA</strong>:
      <a href="https://mymva.maryland.gov/go/web/DuplicateTitle"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Order Online
      </a>
    </li>
    <li>
      <strong>Identification:</strong> If applying in person or by mail, you <strong>must</strong> include a copy of your valid Maryland Driver’s License or ID.
    </li>
  </ul>
  <br>
  Donating? We can help you process the VR-018 to get your clear title. Email us at titles@arscars.com with your stock number!
`,

    "How to Get Title for Deceased Owner": `
      Maryland requires <strong>Letters of Administration</strong> for most estate transfers.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> If the vehicle was jointly owned by spouses, the survivor can often transfer the name by providing a Death Certificate and the original title.
        </li>
        <li>
          <strong>Estate Administration:</strong> The Administrator must sign the title and provide the "Letters of Administration" issued by the Register of Wills.
        </li>
        <li>
          Official MVA Deceased Owner Guide:
          <a href="https://mva.maryland.gov/about-mva/Pages/info/27300/27300-36T.aspx"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          MVA Inheritance Info
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Maryland, a salvage certificate is required if a vehicle is a "total loss" (damage exceeds 75% of value).
      <ul>
        <li>Submit Form <strong>VR-028</strong> along with the title and a <strong>$20.00</strong> fee.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Maryland State Police Salvage Inspection</strong> (Fee: $75.00) before you can apply for a "Rebuilt Salvage" title.</li>
        <li>Maryland does <strong>not</strong> accept New York salvage certificates for this process.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Maryland:
      <ul>
        <li><strong>Gratis Title:</strong> If your lienholder releases the lien electronically, you are eligible for a <strong>one-time free (gratis)</strong> clear title from the MVA.</li>
        <li><strong>Paper Titles:</strong> The lienholder should provide you with a <strong>Notice of Security Interest Filing (SIF)</strong> or a notarized lien release letter.</li>
        <li>If you have the SIF and the original title, you have a clear title for sale purposes. If you want a clean title without the lien listed, you can apply using the myMVA portal.</li>
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
    stateName: "Maryland",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}