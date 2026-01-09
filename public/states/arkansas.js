// /states/arkansas.js
export default function () {
  // Forms specific to Arkansas
  const formLibrary = {
    "10-381": {
      label: "Form 10-381: Vehicle Registration Application (Duplicate Title)",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/VehicleRegistrationApplication.pdf"
    },
    "10-306": {
      label: "Form 10-306: Affidavit of Inheritance of a Motor Vehicle",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/AffidavitofInheritanceofVehicle.pdf"
    },
    "10-315": {
      label: "Form 10-315: Official Release of Lien / Permission to Issue Replacement",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/Official-Release-of-Lien-or-Permission-to-Issue-Replacement-Title.pdf"
    },
    "10-313": {
      label: "Form 10-313: Bill of Sale",
      path: "https://www.dfa.arkansas.gov/wp-content/uploads/BillofSale.pdf"
    }
  };

  // AR-specific option content
  const optionResponses = {
    "How to Sign My Title": `
      Signing an <strong>Arkansas title</strong> is governed by the conjunction between the owners' names:
      <ul>
        <li><strong>AND:</strong> All owners must sign the title to transfer ownership.</li>
        <li><strong>OR:</strong> Either owner may sign the title; the signature of both is not required.</li>
        <li>
          <strong>Odometer:</strong> If the vehicle is less than 10 years old, the odometer disclosure on the back must be completed accurately without any white-out or erasures.
        </li>
      </ul>
      Resources:
      <ul>
        <li>
          Arkansas DFA Title Tips:
          <a href="https://www.dfa.arkansas.gov/office/motor-vehicle/vehicle-tag-renewal/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Visit DFA Site
          </a>
        </li>
        <li>
           How to Sign Your Arkansas Title (Video Walkthrough):
           <a href="https://www.youtube.com/watch?v=Ua3sJ_Gg9Vs&list=PLqCx-xFkTudK43Jd9v_8IB6Nw87sEavJI"
            target="_blank"
            style="color:#3b82f6;text-decoration:underline;">
            Watch Here
        </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
      If your Arkansas title is lost, stolen, or damaged, you can apply for a replacement.
      <ul>
        <li>
          <strong>Online:</strong> You can often request a replacement through the 
          <a href="https://www.dfa.arkansas.gov/office/mydmv/" target="_blank" style="color:#3b82f6;text-decoration:underline;">MyDMV Arkansas portal</a>.
        </li>
        <li>
          <strong>By Mail/In-Person:</strong> Use <strong>Form 10-381</strong>. Select "Duplicate Title" as the transaction type.
          <a href="https://www.dfa.arkansas.gov/wp-content/uploads/VehicleRegistrationApplication.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 10-381
          </a>
        </li>
        <li><strong>Fee:</strong> The base fee for a replacement title in Arkansas is <strong>$10.00</strong> (Note: some local offices may have small additional processing fees).</li>
      </ul>
    `,

    "How to Get Title for Deceased Owner": `
      When an owner is deceased and the estate is not being probated, Arkansas allows for a transfer via Affidavit.
      <ul>
        <li>
          <strong>Affidavit of Inheritance (10-306):</strong> This form must be signed by <i>all</i> heirs of the deceased.
          <a href="https://www.dfa.arkansas.gov/wp-content/uploads/AffidavitofInheritanceofVehicle.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 10-306
          </a>
        </li>
        <li>
          <strong>Required Documents:</strong> You will need the 10-306 form, the original title (if available), and a copy of the Death Certificate.
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Arkansas, a vehicle is considered salvage if damage exceeds 70% of its average retail value.
      <ul>
        <li>Owners must apply for a salvage title within 30 days of the damage occurrence.</li>
        <li>Arkansas law requires a **VIN verification** for vehicles coming from out-of-state with a "Salvage" or "Prior Salvage" brand.</li>
        <li>Use the standard Application <strong>Form 10-381</strong> and indicate the salvage status.</li>
      </ul>
    `,

    "Lien Release": `
      To remove a lien from an Arkansas title:
      <ul>
        <li>The lienholder must sign the "Release of Lien" section on the face of the title.</li>
        <li>If the title is lost or the lender needs to grant permission for a new one, use <strong>Form 10-315</strong>:
          <a href="https://www.dfa.arkansas.gov/wp-content/uploads/Official-Release-of-Lien-or-Permission-to-Issue-Replacement-Title.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 10-315
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
    stateName: "Arkansas",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}