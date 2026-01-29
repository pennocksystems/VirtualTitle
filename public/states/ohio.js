export default function () {

  // Forms specific to Ohio (BMV Forms)
  const formLibrary = {
    "bmv-3774": {
      label: "BMV 3774 - Application for Certificate of Title to a Motor Vehicle",
      path: "https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/bmv3774.pdf"
    },

    "bmv-3770": {
      label: "BMV 3770 - Ownership Assignment and Title Application for Casual Sale",
      path: "https://www.bmv.ohio.gov/titles-et.aspx"
    },

    "bmv-3773": {
      label: "BMV 3773 - Surviving Spouse Affidavit",
      path: "https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/bmv3773.pdf"
    },

    "bmv-3811": {
      label: "BMV 3811 - Affidavit to Designate a Beneficiary (TOD)",
      path: "https://www.bmv.ohio.gov/titles-transfer-death.aspx"
    },

    "bmv-3771": {
      label: "BMV 3771 - Power of Attorney for Certificate of Title",
      path: "https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/bmv3771.pdf"
    }
  };

  // OH-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Ohio title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>NOTARY REQUIRED:</strong> The seller's signature on the back of the title <strong>must</strong> be notarized. Do not sign the title until you are in the presence of a Notary Public or a Deputy Clerk.
        </li>
        <li>
          <strong>Assignment of Ownership:</strong> The seller must complete the "Assignment of Ownership" section on the back of the title, including the purchase price and odometer reading.
        </li>
        <li>
          <strong>Electronic Titles:</strong> If your title is electronic, you will need to complete form <strong>BMV 3770</strong> at a title office or use the Ohio Title Portal.
        </li>
      </ul>
      <em>Important: In Ohio, the license plate stays with the <strong>seller</strong>. Remove your plates immediately after the sale or donation.</em>
    `,

    "No Title or Missing Title": `
  If your Ohio title is lost, stolen, or destroyed, you can apply for a duplicate via form <strong>BMV 3774</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> As of Jan 1, 2026, the standard title fee has increased to <strong>$18.00</strong>.
    </li>
    <li>
      <strong>Where to Apply:</strong> You can apply in person at any County Clerk of Courts title office. Most counties provide same-day service for duplicates.
    </li>
    <li>
      <strong>Notary:</strong> Your signature on the duplicate application <strong>must be notarized</strong> if you are mailing it in.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the BMV 3774. Email us at titles@arscars.com with your VIN to check your title's status!
`,

    "How to Get Title for Deceased Owner": `
      Ohio provides a simplified process for surviving spouses using the <strong>BMV 3773 Affidavit</strong>.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> A spouse may transfer unlimited automobiles (up to a combined value of <strong>$65,000</strong>) into their name without probate, provided they are not specifically disposed of by a will.
        </li>
        <li>
          <strong>TOD (Transfer on Death):</strong> If a beneficiary was previously named via <strong>BMV 3811</strong>, they can claim the title by presenting a certified Death Certificate and form BMV 3774.
        </li>
        <li>
          <strong>WROS:</strong> If the title is held "With Rights of Survivorship," the survivor simply needs to provide the death certificate and the original title.
        </li>
        <li>
          Download Surviving Spouse Affidavit:
          <a href="https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/bmv3773.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Form BMV 3773
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Ohio, a salvage title is required when a vehicle is "wrecked" or damaged to the point that it is economically impractical to repair.
      <ul>
        <li>Apply using form <strong>BMV 3774</strong> and check the "Salvage Certificate of Title" box.</li>
        <li>To return a salvage vehicle to the road, it must pass a <strong>Salvage Inspection</strong> by the Ohio State Highway Patrol (Fee: $50.00).</li>
        <li>You must purchase an inspection receipt from a Deputy Registrar before scheduling your appointment. The new title will be branded as <strong>"Rebuilt Salvage."</strong></li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Ohio:
      <ul>
        <li><strong>Electronic Liens (ELT):</strong> Most modern liens are released electronically. Once the lender releases the lien, the BMV record is updated. However, you <strong>must</strong> still apply for a physical paper title at the Title Office.</li>
        <li><strong>Manual Release:</strong> The lender signs the "Discharge of Lien" section on the front of the paper title.</li>
        <li>If the title is lost, the lender must provide a <strong>Lien Release Letter</strong> on their official letterhead.</li>
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
    stateName: "Ohio",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}