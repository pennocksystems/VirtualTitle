export default function () {

  // Forms specific to Colorado (DR Forms)
  const formLibrary = {
    "dr-2395": {
      label: "DR 2395 - Application for Title and/or Registration",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR2395.pdf"
    },

    "dr-2293": {
      label: "DR 2293 - Duplicate Title Application",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR2293.pdf"
    },

    "dr-2444": {
      label: "DR 2444 - Power of Attorney",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR2444.pdf"
    },

    "dr-2173": {
      label: "DR 2173 - Motor Vehicle Bill of Sale",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR2173.pdf"
    },

    "dr-2698": {
      label: "DR 2698 - Verification of Vehicle Identification Number",
      path: "https://dmv.colorado.gov/sites/dmv/files/documents/DR2698.pdf"
    }
  };

  // CO-specific button content
  const optionResponses = {

    "How to Sign My Title": `
      Signing your <strong>Colorado state title</strong> requires care to avoid voids.<br>
      Here are some resources for the Centennial State:
      <ul>
        <li>
          Car Donation Wizard Colorado Title Tips:
          <a href="https://www.cardonationwizard.com/title/10/colorado-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Official CO DMV Title FAQ:
          <a href="https://dmv.colorado.gov/buying-and-selling"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Step by Step Guided Walkthrough (Video):
          <a href="https://www.youtube.com/watch?v=A88_O8UuG4o"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Watch Here
          </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
  In Colorado, you can obtain a duplicate title if yours is lost, stolen, or damaged.
  <ul>
    <li>
      You can apply via the <strong>myDMV online portal</strong>:
      <a href="https://mydmv.colorado.gov/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
    <li>
      Download and mail the DR 2293 (Duplicate Title Application):
      <a href="https://dmv.colorado.gov/sites/dmv/files/documents/DR2293.pdf"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Download DR 2293
      </a>
    </li>
    <li>
      Note: Colorado requires a secure form of ID for all duplicate title applications.
    </li>
  </ul>
  <br>
  Considering donating? We can help you navigate Colorado's duplicate title process. Email us at titles@arscars.com with your stock number!
`,

    "How to Get Title for Deceased Owner": `
      In Colorado, transferring a title from a deceased owner depends on whether the estate is probated.
      <ul>
        <li>
          For small estates (non-probated), you may use the 
          <strong>DR 2712 - Affirmation for Transfer of Title</strong>.
        </li>
        <li>
          You will generally need the death certificate and the <strong>DR 2395 Application for Title</strong>:
          <a href="https://dmv.colorado.gov/sites/dmv/files/documents/DR2395.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form
          </a>
        </li>
        <li>For more specific Colorado inheritance rules:
          <a href="https://dmv.colorado.gov/inheritance"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      Colorado issues Salvage Titles for vehicles that have sustained damage exceeding a certain percentage of value.
      <ul>
        <li>You must submit the existing title and the <strong>DR 2410 - Salvage Title Application</strong>.</li>
        <li>If you are rebuilding the vehicle, a <strong>DR 2698 (VIN Verification)</strong> by a law enforcement officer is required.</li>
        <li>Learn more at:
          <a href="https://dmv.colorado.gov/salvage-vehicles"
            target="blank"
            style="color:#3b82f6;text-decoration:underline;">
            CO DMV: Salvage Vehicle Info
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Colorado:
      <ul>
        <li>If the lienholder has a paper title, they must sign the "Lien Release" section on the face of the title.</li>
        <li>Alternatively, a <strong>DR 2553 (Lien Release)</strong> form or a letter on the lienholder’s letterhead is acceptable.</li>
        <li>Colorado also uses an Electronic Lien and Title (ELT) system; many lenders will release the lien electronically to the DMV.</li>
        <li>See more:
          <a href="https://dmv.colorado.gov/titling-a-vehicle"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             CO Titling & Liens
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
    stateName: "Colorado",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}