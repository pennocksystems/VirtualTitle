// /states/california.js
export default function () {
  // === Forms specific to California ===
  const formLibrary = {
    "reg-227": {
      label: "REG 227 - Application for Duplicate or Paperless Title (California)",
      path: "https://www.dmv.ca.gov/portal/file/application-for-duplicate-or-paperless-title-reg-227-pdf/"
    },
    "reg-262": {
      label: "REG 262 - Vehicle/Vessel Transfer and Reassignment Form",
      path: "https://www.dmv.ca.gov/portal/file/vehiclevessel-transfer-and-reassignment-form-reg-262-pdf/"
    },
    "reg-256": {
      label: "REG 256 - Statement of Facts",
      path: "https://www.dmv.ca.gov/portal/file/statement-of-facts-reg-256-pdf/"
    },
    "reg-156": {
      label: "REG 156 - Application for Replacement Plates, Stickers, Documents",
      path: "https://www.dmv.ca.gov/portal/file/application-for-replacement-plates-stickers-documents-reg-156-pdf/"
    },
    "reg-5": {
      label: "REG 5 - Affidavit for Transfer Without Probate (CA)",
      path: "https://www.dmv.ca.gov/portal/file/affidavit-for-transfer-without-probate-reg-5-pdf/"
    }
  };

  // === California-specific responses ===
  const optionResponses = {
    "How to Sign My Title": `
      Signing your <strong>California Certificate of Title</strong> correctly helps prevent delays with transfer or sale.<br>
      Here are some reliable guides:
      <ul>
        <li>
          Car Donation Wizard Title Tips:
          <a href="https://www.cardonationwizard.com/how-to-sign-your-title/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Completed California State Title Example:
          <a href="https://www.cardonationwizard.com/title/4/california-title-transfer-2002.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Step-by-Step Guided Walkthrough (Video):
          <a href="https://www.youtube.com/watch?v=wMY1U6xpp74&t=215s"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Watch Here
          </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
      Lost your title in California? You can easily apply for a duplicate through the DMV.
      <ul>
        <li>
          Apply online or in person using the
          <strong>REG 227 - Application for Duplicate or Paperless Title</strong>:
          <a href="https://www.dmv.ca.gov/portal/file/application-for-duplicate-or-paperless-title-reg-227-pdf/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form
          </a>
        </li>
        <li>
          You may also need to submit a
          <strong>REG 256 - Statement of Facts</strong>:
          <a href="https://www.dmv.ca.gov/portal/file/statement-of-facts-reg-256-pdf/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Here
          </a>
        </li>
        <li>
          Visit the official
          <strong>California DMV Title Replacement</strong> page for more info:
          <a href="https://www.dmv.ca.gov/portal/vehicle-registration/titles/title-replacement/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
    `,

    "How to Get Title for Deceased Owner": `
      When a vehicle owner has passed away in California, the process depends on the estate type.
      <ul>
        <li>
          If no probate is needed, use the
          <strong>REG 5 - Affidavit for Transfer Without Probate</strong>:
          <a href="https://www.dmv.ca.gov/portal/file/affidavit-for-transfer-without-probate-reg-5-pdf/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Here
          </a>
        </li>
        <li>Include the title (if available), death certificate, and odometer disclosure.</li>
        <li>If probate applies, court documents authorizing transfer are required.</li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In California, salvage or nonrepairable titles are issued through the DMV’s Salvage Certificate Program.
      <ul>
        <li>Owners must complete <strong>REG 488C</strong> (Application for Salvage Certificate or Nonrepairable Vehicle).</li>
        <li>Inspection may be required before title issuance.</li>
        <li>Learn more at:
          <a href="https://www.dmv.ca.gov/portal/vehicle-registration/salvaged-junked-vehicles/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             DMV Salvaged/Junked Vehicles
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in California:
      <ul>
        <li>Obtain a signed lien release from the lender on official letterhead or use the lien release section on the title.</li>
        <li>Ensure the lender has sent an electronic title release (if applicable) to the DMV.</li>
        <li>See details:
          <a href="https://www.dmv.ca.gov/portal/vehicle-registration/title-transfer/lien-satisfaction-release/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             DMV Lien Release Info
          </a>
        </li>
      </ul>
    `,

    "General Information": `
      Common title FAQs for California:
      <ul>
        <li>Electronic titles (ELT) are standard for most lienholders.</li>
        <li>Out-of-state vehicles must pass a VIN inspection and smog check.</li>
        <li>Titles list both registered and legal owner if a lien exists.</li>
        <li>More info:
          <a href="https://www.dmv.ca.gov/portal/vehicle-registration/titles/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             California DMV Title Information
          </a>
        </li>
      </ul>
    `
  };

  // === Button order ===
  const orderedOptions = [
    "How to Sign My Title",
    "Ask Me Anything",
    "No Title or Missing Title",
    "How to Get Title for Deceased Owner",
    "Applying for Salvage/Nonrepairable Titles",
    "Lien Release"
  ];

  return {
    stateName: "California",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}