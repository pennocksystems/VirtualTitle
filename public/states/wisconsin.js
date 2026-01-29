export default function () {

  // Forms specific to Wisconsin (WisDOT MV-series)
  const formLibrary = {
    "mv1": {
      label: "MV1 - Wisconsin Title and License Plate Application",
      path: "https://wisconsindot.gov/Documents/formdocs/mv1.pdf"
    },

    "mv2119": {
      label: "MV2119 - Replacement Title Application",
      path: "https://wisconsindot.gov/Documents/formdocs/mv2119.pdf"
    },

    "mv2300": {
      label: "MV2300 - Statement of Transfer to Surviving Spouse/Heir",
      path: "https://wisconsindot.gov/Documents/formdocs/mv2300.pdf"
    },

    "mv2928": {
      label: "MV2928 - Instructions for Selling a Vehicle (Bill of Sale)",
      path: "https://wisconsindot.gov/Documents/formdocs/mv2928.pdf"
    },

    "mv2673": {
      label: "MV2673 - Major Parts Statement (Salvage/Rebuilt)",
      path: "https://wisconsindot.gov/Documents/formdocs/mv2673.pdf"
    }
  };

  // WI-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Wisconsin title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Assignment:</strong> On the back of the title, sign and print your name in the "Signature of Seller(s)" section.
        </li>
        <li>
          <strong>The "And/Or" Rule:</strong> If names are joined by "AND," all owners must sign. If joined by "OR," any one owner may sign alone.
        </li>
        <li>
          <strong>Seller Notification:</strong> Within 30 days of the sale, you <strong>must</strong> notify the DMV online at <strong>wisconsindmv.gov/sellernotify</strong> to release your liability.
        </li>
      </ul>
      
      <em>Important: You must remove your license plates! You can transfer them to another vehicle you own or destroy them.</em>
    `,

    "No Title or Missing Title": `
  If your Wisconsin title is lost or damaged, you can request a replacement via form <strong>MV2119</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard replacement title fee is <strong>$20.00</strong>. (Note: This fee is waived for certain surviving family members).
    </li>
    <li>
      <strong>Online Service:</strong> Most owners can order a replacement title online for faster delivery:
      <a href="https://wisconsindot.gov/Pages/online-srvcs/other-servs/dup-c-of-r.aspx"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         WisDOT Online Replacement
      </a>
    </li>
    <li>
      <strong>In-Person:</strong> There is an additional <strong>$5.00 counter fee</strong> for in-person service at DMV Customer Service Centers.
    </li>
  </ul>
  <br>
  Donating? We can help you navigate the $20 replacement process. Email us at titles@arscars.com with your VIN!
`,

    "How to Get Title for Deceased Owner": `
      Wisconsin uses form <strong>MV2300</strong> for transfers involving a deceased family member.
      <ul>
        <li>
          <strong>Surviving Spouse:</strong> A spouse or domestic partner can transfer up to <strong>five</strong> vehicles solely owned by the deceased without a title fee.
        </li>
        <li>
          <strong>Heirship:</strong> If the decedent's solely-owned property does not exceed <strong>$50,000</strong>, an heir can use the <strong>MV2300</strong> to transfer the title (Fee: $164.50, or $214.50 after Oct 2025).
        </li>
        <li>
          <strong>Probate:</strong> If the value exceeds $50,000, the <strong>Personal Representative</strong> must sign the title and provide their court-issued <strong>Domiciliary Letters</strong>.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Wisconsin, a vehicle is branded salvage if an insurance company determines it is "totaled."
      <ul>
        <li>A <strong>Flood Damaged</strong> brand is required if water damage exceeds 70% of the fair market value.</li>
        <li>To return a salvage car to the road, it must pass a <strong>Salvage Vehicle Inspection</strong> by an authorized inspector (Fee: ~$100+ total including DMV fees).</li>
        <li>You must provide <strong>four pictures</strong> of the damage prior to repair and receipts for all major parts (Form MV2673).</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Wisconsin:
      <ul>
        <li><strong>Mandatory Electronic Release:</strong> As of 2025, almost all lenders <strong>must</strong> release liens electronically. Paper lien releases are generally no longer accepted.</li>
        <li><strong>Confirmation:</strong> Once the lender releases the lien in the DMV system, a new "clean" title is automatically printed and mailed to the owner.</li>
        <li>You can verify if a lien has been cleared using the **WisDOT Lien Look-up** tool online.</li>
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
    stateName: "Wisconsin",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}