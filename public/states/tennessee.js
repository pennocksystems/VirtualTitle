export default function () {

  // Forms specific to Tennessee (DOR / RV Forms)
  const formLibrary = {
    "rv-f1310501": {
      label: "RV-F1310501 - Affidavit of Inheritance",
      path: "https://www.tn.gov/content/dam/tn/revenue/documents/forms/titlereg/f1310501Fill-in.pdf"
    },

    "rv-f1310301": {
      label: "RV-F1310301 - Application for Duplicate Certificate of Title",
      path: "https://www.tn.gov/content/dam/tn/revenue/documents/forms/titlereg/f1310301Fill-in.pdf"
    },

    "rv-f1311401": {
      label: "RV-F1311401 - Power of Attorney for Vehicle Transactions",
      path: "https://www.tn.gov/content/dam/tn/revenue/documents/forms/titlereg/f1311401Fill-in.pdf"
    },

    "rv-f1311001": {
      label: "RV-F1311001 - Odometer Disclosure Statement",
      path: "https://www.tn.gov/content/dam/tn/revenue/documents/forms/titlereg/f1311001Fill-in.pdf"
    },

    "rebuilt-application": {
      label: "Application for Motor Vehicle Identification Certification (Rebuilt Title)",
      path: "https://www.tn.gov/content/dam/tn/revenue/documents/forms/titlereg/f1310701Fill-in.pdf"
    }
  };

  // TN-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Tennessee title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment of Title:</strong> On the back of the title, the seller must sign and print their name exactly as it appears on the front. 
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," both owners must sign. If joined by "OR," only one owner's signature is required.
        </li>
        <li>
          <strong>Notary Status:</strong> Tennessee does <strong>not</strong> require a notary for standard transfers. However, if the title is from a state that requires notarization (like PA or OH), you must have it notarized.
        </li>
      </ul>
      <em>Important: Remove your license plates! In Tennessee, plates stay with the owner and can be transferred to your next vehicle for a small $1.00 fee.</em>
    `,

    "No Title or Missing Title": `
  If your Tennessee title is lost, stolen, or mutilated, you can request a replacement via form <strong>RV-F1310301</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$14.00</strong> (though it may vary slightly by county).
    </li>
    <li>
      <strong>Identification:</strong> You must provide a copy of your government-issued photo ID.
    </li>
    <li>
      <strong>Where to Apply:</strong> Submit the application to your local <strong>County Clerk's office</strong>. Most counties process these in 3–5 business days, but titles are mailed from Nashville.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the duplicate title process. Email us at titles@arscars.com with your VIN!
`,

    "How to Get Title for Deceased Owner": `
      Tennessee provides the <strong>Affidavit of Inheritance (RV-F1310501)</strong> for vehicles where no will is being probated.
      <ul>
        <li>
          <strong>The Process:</strong> All heirs must sign the affidavit to relinquish their claims to the vehicle. This form <strong>must be notarized</strong> or signed in front of a County Clerk.
        </li>
        <li>
          <strong>Probate:</strong> If there is a will and an Executor is appointed, the Executor signs the title and provides a copy of the <strong>Letters Testamentary</strong>.
        </li>
        <li>
          <strong>Surviving Spouse:</strong> If the vehicle was jointly owned, the spouse can often transfer the title by providing a certified Death Certificate.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Tennessee, a vehicle is branded salvage if it is declared a "total loss" by an insurance company.
      <ul>
        <li>To return a salvage car to the road, you must apply for a <strong>Rebuilt Title</strong>.</li>
        <li>The process involves an inspection by the DOR's Anti-Theft Unit. The conversion fee is <strong>$75.00</strong>.</li>
        <li>You must provide receipts for all major parts used in the repair. The resulting title will be branded <strong>"Rebuilt Vehicle."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Tennessee:
      <ul>
        <li>The lienholder must sign the "Discharge of Lien" section on the face of the title.</li>
        <li>If the title is lost, the lender must provide a <strong>Lien Release Letter</strong> on official letterhead, which must be notarized if not from a major financial institution.</li>
        <li>Tennessee uses an <strong>ELT (Electronic Lien and Title)</strong> system. Once the lien is released electronically, you can visit the County Clerk to have a paper title printed.</li>
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
    stateName: "Tennessee",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}