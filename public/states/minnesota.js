export default function () {

  // Forms specific to Minnesota (DVS / PS Forms)
  const formLibrary = {
    "ps2000": {
      label: "PS2000 - Application to Title and Register a Motor Vehicle",
      path: "https://s3.us-east-2.amazonaws.com/assets.dps.mn.gov/s3fs-public/migrated-files/divisions/dvs/forms-documents/Documents/MV_TitleRegistrationApplication.pdf"
    },

    "ps2067": {
      label: "PS2067 - Application for Duplicate Title",
      path: "https://s3.us-east-2.amazonaws.com/assets.dps.mn.gov/s3fs-public/migrated-files/divisions/dvs/forms-documents/Documents/MV_DuplicateTitle_Reg_Cab_LienCard_Application.pdf"
    },

    "ps2004": {
      label: "PS2004 - Application for Transfer-on-Death Beneficiary",
      path: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Transfer%20on%20Death%20PS2004%207-17.pdf"
    },

    "ps2017": {
      label: "PS2017 - Report of Sale",
      path: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/MV_ReportofSale.pdf"
    },

    "declaration-reconstruction": {
      label: "Declaration of Reconstruction/Special Assembly",
      path: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Declaration_of_Reconstruction_Special_Assembly.pdf"
    }
  };

  // MN-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Minnesota title</strong>, use blue or black ink. Notarization is NOT required for a standard sale.
      <ul>
        <li>
          <strong>Front of Title:</strong> All owners listed on the front must sign and print their names in the "Seller" section.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If joined by "OR," only one owner needs to sign. If joined by "AND" (or no conjunction), ALL owners must sign.
        </li>
        <li>
          <strong>Odometer:</strong> Required for all vehicles unless they are 20 model years or older.
        </li>
        <li>
          Car Donation Wizard Minnesota Title Tips:
          <a href="https://www.cardonationwizard.com/title/24/minnesota-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Important: In Minnesota, the license plates stay with the vehicle. Do not remove them!</em>
    `,

    "No Title or Missing Title": `
  If your Minnesota title is lost, stolen, or damaged, you must obtain a duplicate via form <strong>PS2067</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$7.25</strong> plus a <strong>$12.00</strong> filing fee (Total: <strong>$19.25</strong>).
    </li>
    <li>
      <strong>Fast Track:</strong> For an additional <strong>$20.00</strong>, you can request expedited service to have the title printed on the same day at select service centers.
    </li>
    <li>
      <strong>Online Service:</strong> You can start your application online to save time at the counter:
      <a href="https://dps.mn.gov/divisions/dvs/vehicle/vehicle-titles"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Visit MN DVS Titles
      </a>
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the PS2067 process. Email us at titles@arscars.com with your plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      Minnesota offers specific paths for removing a deceased owner's name.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> If there is a surviving spouse and the vehicle is not subject to probate, the spouse can transfer ownership by providing a Death Certificate and the original title.
        </li>
        <li>
          <strong>Small Estates:</strong> If the total estate is under $75,000, you may use an <strong>Affidavit for Collection of Personal Property</strong>.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary was previously named using form <strong>PS2004</strong>, they can claim the title with just a Death Certificate.
        </li>
        <li>
          DVS Deceased Owner Guide:
          <a href="https://dps.mn.gov/divisions/dvs/vehicle/vehicle-titles/deceased-relative-vehicle-title-transfer"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          View Full Guide
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Minnesota, a salvage brand is required for "high-value" vehicles (less than 6 years old or worth $9,000+) that have sustained 80% damage.
      <ul>
        <li>A <strong>Salvage Inspection</strong> is required to clear the brand; the fee is <strong>$35.00</strong>.</li>
        <li>You must bring the **Declaration of Reconstruction** and all original receipts for major parts used.</li>
        <li>Once passed, the new title will be branded as <strong>"PRIOR SALVAGE."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Minnesota:
      <ul>
        <li>The lienholder must provide a <strong>Lien Release Card</strong> or a notarized lien release letter.</li>
        <li>If the lien is released electronically, the DVS will record it, but they <strong>do not</strong> automatically mail a new clear title unless you apply for one (filing fee applies).</li>
        <li>Verify if your lien is clear via the DVS portal before trying to sell or donate.</li>
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
    stateName: "Minnesota",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}