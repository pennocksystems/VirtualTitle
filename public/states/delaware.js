export default function () {

  // Forms specific to Delaware (MV Forms)
  const formLibrary = {
    "mv-212": {
      label: "MV212 - Application for Delaware Title",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/mv212.pdf"
    },

    "mv-213": {
      label: "MV213 - Application for Duplicate Title",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_mv213.pdf"
    },

    "mv-386": {
      label: "MV386 - Power of Attorney to Transfer Title",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_mv386.pdf"
    },

    "mv-216": {
      label: "MV216 - Multipurpose Form (Corrected/Defaced Title)",
      path: "https://dmv.de.gov/forms/veh_serv_forms/pdfs/MV216-FORM-INSTRUCTIONS.pdf"
    },

    "report-of-sale": {
      label: "Seller's Report of Sale",
      path: "https://dmv.de.gov/VehicleServices/titles/index.shtml?dc=ve_title_transfer"
    }
  };

  // DE-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Delaware title</strong>, use blue or black ink only. Any white-out or erasures will void the document.
      <ul>
        <li>
          <strong>The "And/Or" Rule:</strong> If the owners are joined by "AND," both must sign. If joined by "OR" or "AND/OR," either owner can sign.
        </li>
        <li>
          Car Donation Wizard Delaware Title Tips:
          <a href="https://www.cardonationwizard.com/title/12/delaware-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Official DE DMV Titling Guide:
          <a href="https://dmv.de.gov/VehicleServices/titles/index.shtml"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
  If your Delaware title is lost or destroyed, you must apply for a duplicate using Form <strong>MV213</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard fee is <strong>$50.00</strong>.
    </li>
    <li>
      <strong>Identification:</strong> If mailing the application, you <strong>must</strong> include a copy of your valid Driver’s License.
    </li>
    <li>
      Download Form MV213:
      <a href="https://dmv.de.gov/forms/veh_serv_forms/pdfs/ve_frm_mv213.pdf"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Download PDF
      </a>
    </li>
  </ul>
  <br>
  Donating? We can help you process the duplicate title paperwork to get your donation moving. Email titles@arscars.com for assistance!
`,

    "How to Get Title for Deceased Owner": `
      Delaware provides a simplified process for small estates via the <strong>Survivor's Transfer Form (MV11)</strong>.
      <ul>
        <li>
          If the estate is under $20,000 and not in probate, a surviving spouse or next of kin can use the MV11 form along with a Death Certificate.
        </li>
        <li>
          If the estate is in probate, the Executor must provide the <strong>Short Certificate</strong> issued by the Register of Wills.
        </li>
        <li>View the DE DMV Survivor's Guide:
          <a href="https://dmv.de.gov/forms/other_forms/pdfs/ve_frm_mv11.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Download MV11 Form
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Delaware, if a vehicle is a total loss, it must be issued a Salvage Certificate.
      <ul>
        <li>Owners must submit the current title and a letter from the insurance company to the DMV.</li>
        <li>The fee for a Salvage Certificate is <strong>$35.00</strong>.</li>
        <li>If you wish to rebuild the vehicle, it must pass a <strong>Delaware State Police Auto Theft Unit inspection</strong> before a regular title can be reissued.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Delaware:
      <ul>
        <li>The lienholder must complete the "Lien Satisfaction" section on the bottom of the <strong>MV213</strong> (for duplicates) or the <strong>MV212</strong> (for new titles).</li>
        <li>Alternatively, an original notarized lien release on the lender's letterhead is required.</li>
        <li>Delaware is a "title-holding" state, meaning the owner usually has the title with the lien noted on it; ensure the "Date of Release" and authorized signature are filled out.</li>
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
    stateName: "Delaware",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}