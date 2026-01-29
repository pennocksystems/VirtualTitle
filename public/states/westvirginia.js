export default function () {

  // Forms specific to West Virginia (DMV Forms)
  const formLibrary = {
    "dmv-1-tr": {
      label: "DMV-1-TR - Application for Certificate of Title",
      path: "https://transportation.wv.gov/DMV/DMVFormSearch/DMV-1-TR-wf.pdf"
    },

    "dmv-4-tr": {
      label: "DMV-4-TR - Application for Duplicate Title",
      path: "https://transportation.wv.gov/DMV/DMVFormSearch/DMV-4-TR-wf.pdf"
    },

    "dmv-5-tr": {
      label: "DMV-5-TR - Affidavit of Transfer Without Consideration (Gift)",
      path: "https://transportation.wv.gov/DMV/DMVFormSearch/DMV-5-TR-wf.pdf"
    },

    "dmv-185-tr": {
      label: "DMV-185-TR - Legal Heir Affidavit (No Probate)",
      path: "https://transportation.wv.gov/DMV/DMVFormSearch/DMV-185-TR_Legal-Heir-Affidavit-wf.pdf"
    },

    "dmv-9-tr": {
      label: "DMV-9-TR - Motor Vehicle Power of Attorney",
      path: "https://transportation.wv.gov/DMV/DMVFormSearch/DMV-9-TR-wf.pdf"
    },

    "dmv-12-a-tr": {
      label: "DMV-12-A-TR - Release of Lien",
      path: "https://transportation.wv.gov/DMV/DMVFormSearch/DMV-12-A-TR_Release-of-Lien-wf.pdf"
    }
  };

  // WV-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>West Virginia title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment:</strong> The seller must sign and print their name in the "Assignment of Title" section on the back.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," both must sign. If joined by "OR" or "AND/OR," either owner can sign alone.
        </li>
        <li>
          <strong>Gifts:</strong> If you are gifting the vehicle, both you and the recipient <strong>must</strong> complete and notarize Form <strong>DMV-5-TR</strong>.
        </li>
      </ul>
      
      <em>Important: You must remove your license plates! You can transfer them to another vehicle for $10.50 or return them to the DMV.</em>
    `,

    "No Title or Missing Title": `
  If your West Virginia title is lost or stolen, you must apply for a duplicate via form <strong>DMV-4-TR</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$15.00</strong>.
    </li>
    <li>
      <strong>Notary Required:</strong> The applicant's signature on the duplicate application <strong>must be notarized</strong>.
    </li>
    <li>
      <strong>Quick Note:</strong> West Virginia does not offer "instant" duplicate titles at the counter; they are mailed from the Charleston central office.
    </li>
  </ul>
  <br>
  Donating? We can help you with the DMV-4-TR paperwork to ensure the vehicle is ready for pick-up. Email us at titles@arscars.com!
`,

    "How to Get Title for Deceased Owner": `
      West Virginia provides a **Legal Heir Affidavit (DMV-185-TR)** for cases where no will exists and no administrator is appointed.
      <ul>
        <li>
          <strong>The Process:</strong> All legal heirs must sign the affidavit, and it <strong>must be notarized</strong>. 
        </li>
        <li>
          <strong>Death Certificate:</strong> A certified copy of the Death Certificate must accompany the affidavit and the original title.
        </li>
        <li>
          <strong>Probate:</strong> If a will is probated, the Executor signs the title and provides the <strong>Short Form</strong> (Letter of Qualification) from the County Clerk.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In West Virginia, a salvage title is required if a vehicle's damage exceeds <strong>75%</strong> of its market value.
      <ul>
        <li>The salvage title fee is <strong>$22.50</strong>.</li>
        <li>To return the vehicle to the road, it must pass a <strong>Salvage Inspection</strong> by a DMV official or a designated West Virginia State Trooper.</li>
        <li>The resulting title will be branded <strong>"Rebuilt from Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in West Virginia:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> WV uses an electronic system. Once the loan is paid, the lender notifies the DMV digitally. To get a paper title, you must specifically request a "Paper Title Print" (Fee: $15.00).</li>
        <li><strong>Paper Titles:</strong> The lender must complete the "Release of Lien" section on the title or provide Form <strong>DMV-12-A-TR</strong>.</li>
        <li><strong>Notary:</strong> All lien releases on paper forms <strong>must be notarized</strong>.</li>
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
    stateName: "West Virginia",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}