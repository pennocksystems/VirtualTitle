export default function () {

  // Forms specific to Oklahoma (Service Oklahoma / SOK Forms)
  const formLibrary = {
    "701-6": {
      label: "Form 701-6 - Application for Oklahoma Certificate of Title",
      path: "https://oklahoma.gov/content/dam/service-oklahoma/Documents/mv-forms/701-6%20Vehicle-Trailer-Manuf%20Home%20Certificate%20of%20Title.pdf"
    },

    "701-7": {
      label: "Form 701-7 - Application for Replacement/Duplicate Certificate of Title",
      path: "https://oklahoma.gov/content/dam/service-oklahoma/Documents/mv-forms/license-plate/701-7%20Replacement%20Title%20for%20VehicleBoatMotor.pdf"
    },

    "771": {
      label: "Form 771 - Transfer on Death (TOD) Notice Application",
      path: "https://oklahoma.gov/content/dam/service-oklahoma/Documents/mv-forms/771%20Transfer%20on%20Death%20Notice.pdf"
    },

    "798": {
      label: "Form 798 - No Administrator Affidavit (Heirship)",
      path: "https://oklahoma.gov/service/all-pages/form.html"
    },

    "773": {
      label: "Form 773 - Notice of Transfer of Ownership (Liability Release)",
      path: "https://oklahoma.gov/content/dam/service-oklahoma/Documents/mv-forms/773%20Notice%20of%20Transfer%20of%20Ownership.pdf"
    }
  };

  // OK-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Oklahoma title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> The seller's signature <strong>must</strong> be notarized. Do not sign the title until you are in the presence of a Notary Public.
        </li>
        <li>
          <strong>Signature:</strong> Sign your name exactly as it appears on the front of the title in the "Assignment of Title" section.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If joined by "AND," both owners must sign. If joined by "OR" or "AND/OR," only one owner's signature is required.
        </li>
      </ul>
      
      <em>Important: In Oklahoma, the license plate stays with the <strong>seller</strong>. Remove your plates immediately after the sale or donation.</em>
    `,

    "No Title or Missing Title": `
  If your Oklahoma title is lost, stolen, or destroyed, you must apply for a replacement via form <strong>701-7</strong>.
  <ul>
    <li>
      <strong>Notary Required:</strong> Your signature on the duplicate title application <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$11.00</strong> (plus applicable mail and notary fees).
    </li>
    <li>
      <strong>Where to Apply:</strong> You can apply at any <strong>Licensed Operator (Tag Agency)</strong>. Most can process this in person, but the physical title is always mailed from a central site (Bismarck/OKC).
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the 701-7 process. Email us at titles@arscars.com with your license plate number to get started!
`,

    "How to Get Title for Deceased Owner": `
      Oklahoma provides a simplified transfer for "Small Estates" using the <strong>No Administrator Affidavit</strong>.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> Ownership of one vehicle typically passes to a surviving spouse automatically. For additional vehicles, use <strong>Form 798</strong>.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary was named on the title record via <strong>Form 771</strong>, they can claim the title by providing a Death Certificate and the original title.
        </li>
        <li>
          <strong>Estate Limit:</strong> If there is no will and the estate value is under <strong>$50,000</strong>, heirs may use a Small Estate Affidavit to transfer the title.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Oklahoma, a salvage title is required if a vehicle (10 years old or newer) has damage exceeding <strong>60%</strong> of its fair market value.
      <ul>
        <li>The application requires the existing title and a "Declaration of Damage or Theft."</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Rebuilt Inspection</strong> by a Licensed Operator (Fee: $25.00).</li>
        <li>You must provide receipts for all major component parts. The new title will be branded as <strong>"REBUILT."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Oklahoma:
      <ul>
        <li><strong>Electronic Titles:</strong> Oklahoma uses an Electronic Lien and Title (ELT) system. Once the loan is paid, the lender releases the lien electronically. You must then request a paper title from a Tag Agency.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide a <strong>notarized</strong> lien release letter on their official letterhead.</li>
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
    stateName: "Oklahoma",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}