export default function () {

  // Forms specific to Florida

  const formLibrary = {

    "hsmv-82040": {
      label: "HSMV 82040 Form (Florida) - General Title Application",
      path: "https://www.flhsmv.gov/pdf/forms/82040.pdf"
    },

    "hsmv-82101": {
      label: "HSMV 82101 Form (Florida) - Duplicate/Lost Title Application",
      path: "https://www.flhsmv.gov/pdf/forms/82101.pdf"
    },

    "hsmv-84490": {
      label: "HSMV 84490 Form (Florida) - Statement of Builder (for Salvage)",
      path: "https://www.flhsmv.gov/pdf/forms/84490.pdf"
    },

    "hsmv-82053": {
      label: "HSMV 82053 Form (Florida) - Power of Attorney",
      path: "https://www.flhsmv.gov/pdf/forms/82053.pdf"
    },

    "hsmv-82050": {
      label: "HSMV 82050 Form (Florida) - Notice of Sale",
      path: "https://www.flhsmv.gov/pdf/forms/82050.pdf"
    }
  };

  // FL-specific option content

  const optionResponses = {

    "How to Sign My Title": `
      Signing your <strong>Florida state title</strong> can be intimidating.<br>
      Here are some resources that should point you in the right direction:
      <ul>
        <li>
          Car Donation Wizard Title Tips:
          <a href="https://www.cardonationwizard.com/title/9/florida-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Completed Florida State Title:
          <a href="https://www.cardonationwizard.com/title/9/florida-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Step by Step Guided Walkthrough (Video):
          <a href="https://www.youtube.com/watch?v=IQ__kV7PEsA&list=PLqCx-xFkTudJP4oKlFWvcwTy-J4t1fxs1&index=9"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Watch Here
          </a>
        </li>
      </ul>

    `,

    "No Title or Missing Title": `
  Looking for some ways to obtain a duplicate title? Here are some possible remediations to help!
  <ul>
    <li>
      You can apply for a duplicate title directly through the
      <strong>Florida Tax Collector's Office or FLHSMV</strong>:
      <a href="http://www.flhsmv.gov/offices/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
    <li>
      Fill out your HSMV 82101 Form:
      <a href="https://www.flhsmv.gov/pdf/forms/82101.pdf"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
    <li>
      For additional Florida resources, visit the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) website:
      <a href="https://www.flhsmv.gov/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
  </ul>
  <br>
  Considering donating your vehicle? We can guide you through the titling process above, and completing the donation intake! Send us an email today titles@arscars.com with your stock number to get started!
`,

    // Stubs (Radio Buttons)

    "How to Get Title for Deceased Owner": `
      When a vehicle owner has passed away in Florida, the process to obtain a title depends on the estate situation.
      <ul>
        <li>
          Some common required documents include (but are not limited to) a death certificate, letters of administration/testamentary, and the existing title.
          In Florida, the FLHSMV / Tax Collector's Office requires the
          <strong>Application for Certificate of Title (HSMV 82040)</strong>:
          <a href="https://www.flhsmv.gov/pdf/forms/82040.pdf"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Here
          </a>
        </li>
        <li>Include the title (if available), death certificate, and odometer disclosure.</li>
        <li>If probate applies, court documents authorizing transfer may be required.</li>
        <li>For more information, please refer to the FLHSMV's website:
          <a href="https://www.flhsmv.gov/"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,

    "Applying for Salvage/Nonrepairable Titles": `
      In Florida, salvage or nonrepairable titles are issued through the FLHSMV.
      <ul>
        <li>Owners must complete the <strong>Statement of Builder (HSMV 84490)</strong> Application and an Application for Certificate of Title (HSMV 82040).</li>
        <li>There is typically a $Variable (check with Tax Collector's office) application fee.</li>
        <li>Learn more at:
          <a href="https://www.flhsmv.gov/pdf/forms/84490.pdf"
            target="blank"
            style="color:#3b82f6;text-decoration:underline;">
            FLHSMV: Statement of Builder (HSMV 84490)
          </a>
        </li>
      </ul>
    `,

    "Lien Release": `
      To release a lien in Florida you'll need:
      <ul>
        <li>A lien release letter from the lienholder.</li>
        <li>Ensure the lender has properly signed the title & sent an electronic title release (if applicable) to the FLHSMV.</li>
        <li>See more:
          <a href="https://www.flhsmv.gov/motor-vehicles-tags-titles/liens-and-titles/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             FL Lien and Titles Info
          </a>
        </li>
      </ul>
    `
  };

  // The order of buttons shown for Florida

  const orderedOptions = [

    "How to Sign My Title",
    "Ask Me Anything",
    "No Title or Missing Title",
    "How to Get Title for Deceased Owner",
    "Applying for Salvage/Nonrepairable Titles",
    "Lien Release"
  ];

  return {
    stateName: "Florida",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}
