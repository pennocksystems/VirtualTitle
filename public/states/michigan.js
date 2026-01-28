export default function () {

  // Forms specific to Michigan (Secretary of State / SOS)
  const formLibrary = {
    "tr-11l": {
      label: "TR-11L - Application for Duplicate Title",
      path: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Vehicle/Titles/TR-11L.pdf"
    },

    "tr-40": {
      label: "TR-40 - Certification from Heir to a Vehicle (Deceased Owner)",
      path: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Vehicle/Titles/TR-40.pdf"
    },

    "tr-13a": {
      label: "TR-13A - Application for Salvage Vehicle Inspection",
      path: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Vehicle/Salvage-Vehicle/tr13a.pdf"
    },

    "tr-128": {
      label: "TR-128 - Appointment of Agent (Power of Attorney)",
      path: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Vehicle/Titles/TR-128.pdf"
    },

    "tr-205": {
      label: "TR-205 - Ownership Certification (Value under $2,500)",
      path: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/03lehman/tr205.pdf"
    }
  };

  // MI-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      To sign your <strong>Michigan title</strong>, use blue or black ink. 
      <ul>
        <li>
          <strong>Seller Signature:</strong> On the front of the title (or back on older versions), sign your name exactly as it appears on the "Owner" line.
        </li>
        <li>
          <strong>Odometer Disclosure:</strong> You must record the exact mileage. Do not include tenths of a mile.
        </li>
        <li>
          Car Donation Wizard Michigan Title Tips:
          <a href="https://www.cardonationwizard.com/title/23/michigan-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
      </ul>
      <em>Note: Remove your license plates! You can transfer them to another vehicle or a family member at the SOS.</em>
    `,

    "No Title or Missing Title": `
  If your Michigan title is lost or you never received one due to a lien, you can request a replacement via form <strong>TR-11L</strong>.
  <ul>
    <li>
      <strong>Fee:</strong> The standard duplicate title fee is <strong>$15.00</strong>.
    </li>
    <li>
      <strong>Instant Title:</strong> For <strong>$20.00</strong>, you can get an "Instant Title" at most SOS branch offices (requires all owners to be present with ID).
    </li>
    <li>
      <strong>Online Service:</strong> Most residents can order a replacement title through <strong>Michigan e-Services</strong>:
      <a href="https://dsvsesvc.sos.state.mi.us/TAP/_/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Visit MI e-Services
      </a>
    </li>
  </ul>
  <br>
  Donating? We can help you check if your title is electronic. Email us at titles@arscars.com with your VIN!
`,

    "How to Get Title for Deceased Owner": `
      Michigan provides a streamlined process for heirs when the estate is not probated (up to a specific COLA-adjusted limit, approx. <strong>$100,000</strong> for 2026).
      <ul>
        <li>
          <strong>The Process:</strong> Use the <strong>TR-40 (Certification from Heir)</strong>. The surviving spouse or next-of-kin can transfer the title by providing this form and a Death Certificate.
        </li>
        <li>
          <strong>No Probate Required:</strong> As long as the vehicle value is under the state threshold and no probate estate is opened, this form is sufficient.
        </li>
        <li>
          Download Heir Forms (TR-40 Package):
          <a href="https://www.michigan.gov/sos/-/media/Project/Websites/sos/Vehicle/Titles/TR-40.pdf"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Michigan, a salvage title is mandatory if a vehicle is damaged to the point where repairs exceed 75% of its value.
      <ul>
        <li>Apply at any SOS office with the original title and a <strong>$15.00</strong> fee.</li>
        <li>To return the vehicle to the road, it must pass a <strong>Salvage Vehicle Inspection</strong> by a specially trained police officer (Fee: Up to $100.00).</li>
        <li>Submit Form <strong>TR-13A</strong> and all repair receipts to the inspector. The new title will be branded <strong>"REBUILT SALVAGE"</strong>.</li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Michigan:
      <ul>
        <li><strong>Electronic Titles (ELT):</strong> Since Oct 2023, most liens are electronic. Once you pay off your loan, the lender notifies the SOS, and a clean paper title is mailed to you automatically.</li>
        <li><strong>Paper Titles:</strong> The lienholder must sign the "Lien Termination" section on the title or provide a <strong>Lien Termination Statement</strong> on their letterhead.</li>
        <li>If you have a paper title with a lien, you must bring the termination statement to the SOS to receive a clear title.</li>
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
    stateName: "Michigan",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}