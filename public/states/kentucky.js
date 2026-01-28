export default function () {

  // Forms specific to Kentucky (KYTC / County Clerk)
  const formLibrary = {
    "tc-96-182": {
      label: "TC 96-182 - Application for Kentucky Certificate of Title or Registration",
      path: "https://drive.ky.gov/Programs/Forms/TC96-182.pdf"
    },

    "tc-96-187": {
      label: "TC 96-187 - Title Lien Statement",
      path: "https://drive.ky.gov/Programs/Forms/TC96-187.pdf"
    },

    "tc-96-215": {
      label: "TC 96-215 - Affidavit of Motor Vehicle Assembled from Wrecked/Salvage",
      path: "https://drive.ky.gov/Programs/Forms/TC96-215.pdf"
    },

    "tc-96-3": {
      label: "TC 96-3 - Affidavit of Incomplete Transfer",
      path: "https://drive.ky.gov/Programs/Forms/TC96-3.pdf"
    },

    "tc-96-167": {
      label: "TC 96-167 - Affidavit for Replacement/Non-Exchange",
      path: "https://drive.ky.gov/Programs/Forms/TC96-167.pdf"
    }
  };

  // KY-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Kentucky title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Notary Required:</strong> All signatures on a Kentucky title (seller and buyer) <strong>must be notarized</strong>. If your title was printed before 2000, you will likely need to also complete form <strong>TC 96-182</strong>.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If joined by "AND," both owners must sign and be notarized. If joined by "OR," only one signature is required.
        </li>
        <li>
          Car Donation Wizard Kentucky Title Tips:
          <a href="https://www.cardonationwizard.com/title/18/kentucky-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Note: In Kentucky, the seller must remove the license plate and return it to the County Clerk.</em>
    `,

    "No Title or Missing Title": `
  If your Kentucky title is lost or damaged, you must apply for a duplicate at your <strong>County Clerk’s office</strong>.
  <ul>
    <li>
      <strong>Application:</strong> Complete form <strong>TC 96-182</strong> (Section: Affidavit for Replacement). Your signature <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Fees:</strong> The standard fee is <strong>$6.00</strong>. 
    </li>
    <li>
      <strong>Speed Title:</strong> For <strong>$25.00</strong>, the state will print and mail your title the following business day.
    </li>
  </ul>
  <br>
  Donating? We can help you prepare the TC 96-182. Email us at titles@arscars.com with your vehicle info to get started!
`,

    "How to Get Title for Deceased Owner": `
      Kentucky uses several methods for estate transfers depending on the circumstances.
      <ul>
        <li>
          <strong>Small Estates:</strong> If the estate is exempt from tax, you may use the <strong>Affidavit of Exemption (Form 92A300)</strong> along with a Death Certificate.
        </li>
        <li>
          <strong>Probated Estates:</strong> The Executor must provide a certified copy of their <strong>Appointment/Letters of Administration</strong>.
        </li>
        <li>
          <strong>Surviving Spouse:</strong> If the title is held in joint tenancy with right of survivorship, the spouse can often transfer the title by presenting a death certificate.
        </li>
        <li>
          Official KY Inheritance Guide:
          <a href="https://revenue.ky.gov/Individual/Inheritance-Estate-Tax/Pages/default.aspx"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Visit KY Revenue
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Kentucky requires a salvage title if a vehicle has been damaged to the extent that repair costs exceed 75% of its value.
      <ul>
        <li>The application requires form <strong>TC 96-182</strong> and the surrender of the original title and license plate.</li>
        <li>To "Rebuild" a title, you must submit form <strong>TC 96-215 (Affidavit of Assembled Vehicle)</strong> and have the vehicle inspected by a <strong>Certified Inspector</strong> (usually at the Sheriff's office).</li>
        <li>Once approved, the title will be branded as <strong>"Rebuilt"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Kentucky:
      <ul>
        <li>Kentucky is unique: A lienholder must file a <strong>Title Lien Statement (TC 96-187)</strong> to record or terminate a lien.</li>
        <li>The Clerk's office generally <strong>does not</strong> accept simple letters on company letterhead to release a lien; the original filing receipt or a completed TC 96-187 is required.</li>
        <li>Contact your County Clerk to see if the lien has already been released in the state's AVIS system.</li>
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
    stateName: "Kentucky",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}