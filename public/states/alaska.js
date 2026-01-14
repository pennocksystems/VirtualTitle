export default function () {
  // Forms specific to Alaska
  const formLibrary = {
    "ak-809": {
      label: "Form 809 – Application for Duplicate Title (Alaska)",
      path: "https://doa.alaska.gov/dmv/forms/pdfs/809.pdf"
    },
    "ak-811": {
      label: "Form 811 – Verification of Vehicle (VIN) (Alaska)",
      path: "https://doa.alaska.gov/dmv/forms/pdfs/811.pdf"
    },
    "ak-827": {
      label: "Form 827 – Vehicle Power of Attorney (Alaska)",
      path: "https://doa.alaska.gov/dmv/forms/pdfs/827.pdf"
    },
    "ak-857": {
      label: "Form 857 – Affidavit (Death/No Probate) (Alaska)",
      path: "https://doa.alaska.gov/dmv/forms/pdfs/857.pdf"
    }
  };

  // AK-specific button content
  const optionResponses = {
    "How to Sign My Title": `
      Signing your <strong>Alaska state title</strong> depends on whether you’re the buyer or seller.
      Here are resources to point you in the right direction:
      <ul>
        <li>
          Alaska DMV – Vehicle & Title Services (main hub):
          <a href="https://dmv.alaska.gov/vehicle-services/vehicle-services/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Title & Vehicle Services
          </a>
        </li>
        <li>
          Buyer/Seller guidance (mail-in steps, signatures, fees) is covered within the same hub:
          <a href="https://dmv.alaska.gov/vehicle-services/vehicle-services/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Buyer/Seller Guidance
          </a>
        </li>
      </ul>
    `,

    "No Title or Missing Title": `
  Lost your Alaska title? You can apply for a duplicate through the DMV.
  <ul>
    <li>
      Use <strong>Form 809 – Application for Duplicate Title</strong>:
      <a href="https://doa.alaska.gov/dmv/forms/pdfs/809.pdf"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Download Form 809
      </a>
    </li>
    <li>
      General guidance for duplicate/lost titles (mailing address, fees, processing):
      <a href="https://dmv.alaska.gov/vehicle-services/vehicle-services/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Duplicate Title Guidance
      </a>
    </li>
    <li>
      If a VIN inspection is required, use <strong>Form 811 – Verification of Vehicle</strong>:
      <a href="https://doa.alaska.gov/dmv/forms/pdfs/811.pdf"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Download Form 811
      </a>
    </li>
  </ul>
  <br>
  Considering donating your vehicle? We can guide you through the titling steps above and complete the donation intake. Email <strong>titles@arscars.com</strong> to get started!
`,

    "How to Get Title for Deceased Owner": `
      When a vehicle owner has passed away in Alaska, the requirements depend on the estate situation.
      <ul>
        <li>
          If there is <em>no probate</em>, you may use <strong>Form 857 – Affidavit (Death/No Probate)</strong>:
          <a href="https://doa.alaska.gov/dmv/forms/pdfs/857.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 857
          </a>
        </li>
        <li>
          If someone needs to act on your behalf, use <strong>Form 827 – Vehicle Power of Attorney</strong>:
          <a href="https://doa.alaska.gov/dmv/forms/pdfs/827.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 827
          </a>
        </li>
        <li>
          Check DMV title topics for mailing addresses and processing details:
          <a href="https://dmv.alaska.gov/vehicle-services/vehicle-services/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Title Topics
          </a>
        </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Alaska, salvage or reconstructed vehicles follow specific steps.
      <ul>
        <li>
          Start with the DMV’s salvage/reconstructed guidance:
          <a href="https://dmv.alaska.gov/vehicle-services/vehicle-services/"
            target="_blank"
            style="color:#3b82f6;text-decoration:underline;">
            Salvage & Reconstructed Info
          </a>
        </li>
        <li>
          A <strong>VIN verification (Form 811)</strong> may be required:
          <a href="https://doa.alaska.gov/dmv/forms/pdfs/811.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Form 811
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Alaska you'll need:
      <ul>
        <li>A lien release letter from the lienholder</li>
        <li>Properly assigned title (and any DMV-required title correction forms)</li>
        <li>
          See general title topics and lien guidance:
          <a href="https://dmv.alaska.gov/vehicle-services/vehicle-services/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Alaska DMV Title Topics
          </a>
        </li>
      </ul>
    `
  };

  // The order of buttons shown
  const orderedOptions = [
    "How to Sign My Title",
    "Ask Me Anything",
    "No Title or Missing Title",
    "How to Get Title for Deceased Owner",
    "Applying for Salvage/Nonrepairable Titles",
    "Lien Release"
  ];

  return {
    stateName: "Alaska",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}