export default function () {
  // Forms specific to Arizona
  const formLibrary = {
    "96-0236": {
      label: "Form 96-0236: Title and Registration Application",
      path: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/96-0236.pdf"
    },
    "48-7104": {
      label: "Form 48-7104: Power of Attorney with Odometer Disclosure",
      path: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/48-7104.pdf"
    },
    "32-6901": {
      label: "Form 32-6901: Non-Probate Affidavit",
      path: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/32-6901.pdf"
    },
    "48-2004": {
      label: "Form 48-2004: Arizona Bill of Sale",
      path: "https://apps.azdot.gov/files/mvd/mvd-forms-lib/48-2004.pdf"
    },
    "48-9901": {
      label: "Form 48-9901: Lien Release",
      path: "https://apps.azdot.gov/files/mvd/mvd-doc-lib/48-9901.pdf"
    }
  };

  // AZ-specific button content
  const optionResponses = {
    "How to Sign My Title": `
      Signing an <strong>Arizona title</strong> depends on the "Legal Status" printed between the owners' names:
      <ul>
        <li><strong>OR:</strong> Only one owner is required to sign.</li>
        <li><strong>AND:</strong> Both owners MUST sign.</li>
        <li><strong>AND/OR:</strong> Both owners MUST sign (unless one is deceased).</li>
        <li>
          <strong>Notary:</strong> Most standard Arizona titles no longer require notarization for private sales, but it is required if the title has a designated notary space or if using a Power of Attorney.
        </li>
      </ul>
      Resources:
      <ul>
        <li>
          Official ADOT Signature Guide:
          <a href="https://azdot.gov/mvd/services/vehicle-services/title-and-registration/multiple-owners"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             View Here
          </a>
        </li>
        <li>
        Car Donation Wizard AZ Title Guide:
        <a href="https://www.cardonationwizard.com/title/3/arizona-title-transfer.html"
        target="_blank"
        style="color:#3b82f6;text-decoration:underline;">
        Visit Here
        </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
      Arizona is an <strong>Electronic Title</strong> state. You may not even have a paper copy!
      <ul>
        <li>
          <strong>Check Electronically:</strong> Create an account at 
          <a href="https://azmvdnow.gov/" target="_blank" style="color:#3b82f6;text-decoration:underline;">AZ MVD Now</a> 
           to view your title. You can request a "Title Replacement" there for $4.
        </li>
        <li>
          <strong>Paper Application:</strong> If you prefer mail, use <strong>Form 96-0236</strong>. 
          Only one owner needs to sign the application for a duplicate, regardless of the "AND/OR" status.
          <a href="https://apps.azdot.gov/files/mvd/mvd-forms-lib/96-0236.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form
          </a>
        </li>
      </ul>
    `,

    "How to Get Title for Deceased Owner": `
      In Arizona, if the total value of the decedent's personal property (including vehicles) is <strong>under $200,000</strong>, you can use a Small Estate Affidavit.
      <ul>
        <li>
          <strong>Non-Probate Affidavit (32-6901):</strong> This can be used 30 days after the owner's death.
          <a href="https://apps.azdot.gov/files/mvd/mvd-forms-lib/32-6901.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 32-6901
          </a>
        </li>
        <li>
          <strong>Note:</strong> If the title says "OR" or "AND/OR", the surviving owner can often transfer the title simply by signing and providing the death certificate.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Arizona requires a Salvage Certificate for vehicles that are total losses.
      <ul>
        <li>Use <strong>Form 96-0236</strong> and check the "Salvage" box.</li>
        <li>The fee is $4.00 plus any applicable registration fees.</li>
        <li>If you are restoring a salvage vehicle, a <strong>Level III Inspection</strong> is required.</li>
        <li>
          <a href="https://azdot.gov/mvd/services/vehicle-services/title-and-registration/salvage-certificate-title"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             AZ Salvage Requirements
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      Arizona lenders typically release liens electronically (ELT). 
      <ul>
        <li>Once the loan is paid, the lender notifies the MVD, and the title record is updated automatically.</li>
        <li>If your lender is a private party (not a bank), use <strong>Form 48-9901</strong>:
          <a href="https://apps.azdot.gov/files/mvd/mvd-doc-lib/48-9901.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Lien Release Form
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
    stateName: "Arizona",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}