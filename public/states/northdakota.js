export default function () {

  // Forms specific to North Dakota (NDDOT SFN Forms)
  const formLibrary = {
    "sfn-2872": {
      label: "SFN 2872 - Application for Certificate of Title & Registration",
      path: "https://dot.nd.gov/forms/sfn02872.pdf"
    },

    "sfn-61982": {
      label: "SFN 61982 - Application for Duplicate Credentials (Title)",
      path: "https://www.dot.nd.gov/forms/sfn61982.pdf"
    },

    "sfn-18609": {
      label: "SFN 18609 - Damage/Salvage Disclosure Statement",
      path: "https://www.dot.nd.gov/forms/sfn18609.pdf"
    },

    "sfn-2916": {
      label: "SFN 2916 - Affidavit for Collection of Personal Property (Heirship)",
      path: "https://www.dot.nd.gov/forms/sfn02916.pdf"
    },

    "sfn-2876": {
      label: "SFN 2876 - Release of Lien by Legal Owner",
      path: "https://www.dot.nd.gov/forms/sfn02876.pdf"
    }
  };

  // ND-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>North Dakota title</strong>, use blue or black ink. ND law is very strict about "open titles"—you must fill in the buyer's name immediately.
      <ul>
        <li>
          <strong>Seller Assignment:</strong> Sign and date under "Seller's Assignment & Warranty of Title."
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If joined by "AND," both owners must sign. If joined by "OR," either owner may sign alone.
        </li>
        <li>
          <strong>Damage Disclosure:</strong> If the vehicle is less than 9 years old, you <strong>must</strong> complete and attach Form <strong>SFN 18609</strong>.
        </li>
      </ul>
      <em>Note: In North Dakota, you must remove your license plates! They do not stay with the vehicle.</em>
    `,

    "No Title or Missing Title": `
  If your North Dakota title is lost, stolen, or mutilated, you can request a duplicate via form <strong>SFN 61982</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$5.00</strong>.
    </li>
    <li>
      <strong>Lien Removal:</strong> If you are also removing a lien, the fee is <strong>$10.00</strong> and requires a notarized lien release.
    </li>
    <li>
      <strong>Mailing Address:</strong> Send completed forms to NDDOT Motor Vehicle Division, 608 E Boulevard Ave, Bismarck, ND 58505.
    </li>
  </ul>
  <br>
  Donating? We can help you prepare the SFN 61982. Email us at titles@arscars.com with your VIN to get the ball rolling!
`,

    "How to Get Title for Deceased Owner": `
      North Dakota allows a simplified transfer for "Small Estates" if the total value is <strong>$50,000 or less</strong>.
      <ul>
        <li>
          <strong>SFN 2916:</strong> Use the <strong>Affidavit for Collection of Personal Property</strong>. This form <strong>must be notarized</strong>.
        </li>
        <li>
          <strong>Wait Period:</strong> At least <strong>30 days</strong> must have passed since the owner's death before this affidavit can be used.
        </li>
        <li>
          <strong>Requirements:</strong> Attach a certified copy of the Death Certificate to the affidavit and the original title (if available).
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In North Dakota, a salvage title is required if a vehicle is damaged in excess of <strong>75%</strong> of its retail value.
      <ul>
        <li>You must forward the damaged title to the NDDOT within <strong>10 days</strong> of the damage occurring.</li>
        <li>To "Rebuild" a title, the vehicle must be inspected by a <strong>registered motor vehicle repair business</strong> (Form SFN 2486).</li>
        <li>The resulting title will be permanently branded as <strong>"Previously Salvaged."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in North Dakota:
      <ul>
        <li><strong>Electronic Liens (LEGEND):</strong> Most modern liens are released electronically by the lender. A paper title is then automatically generated and mailed.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign form <strong>SFN 2876</strong>. This signature <strong>must be notarized</strong>.</li>
        <li>Once you have the notarized release, you must submit it with a $5 fee to the NDDOT to clear the record.</li>
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
    stateName: "North Dakota",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}