// /states/alabama.js
export default function () {
  // Forms specific to Alabama
  const formLibrary = {
    "mvt-5-13": {
      label: "MVT-5-13 Form (Alabama)",
      path: "https://eforms.com/download/2015/09/Alabama-Motor-Vehicle-Power-of-Attorney-Form-MVT-5-13.pdf"
    },
    "mvt-41-1": {
      label: "MVT-41-1 Form (Alabama)",
      path: "https://drive.google.com/file/d/1J3jB9wuNE0l4zqxgvIumvRehJmtwF7g8/view"
    },
    "mvt-12-1": {
      label: "MVT-12-1 Form (Alabama)",
      path: "https://www.formalu.com/forms/506/application-for-replacement-title"
    },
    "mvt-5-7": {
      label: "MVT-5-7 Form (Alabama)",
      path: "https://www.revenue.alabama.gov/wp-content/uploads/2021/10/MVT-5-7-8-19.pdf"
    },
    "mvt-5-6": {
      label: "MVT-5-6 Form (Alabama)",
      path: "https://drive.google.com/file/d/1oWm0T7w9C0UsaNcw5S0nt5pYWzmRBTrW/view"
    }
  };

  // AL-specific option content
  const optionResponses = {
    "How to Sign My Title": `
      Signing your <strong>Alabama state title</strong> can be intimidating.<br>
      Here are some resources that should point you in the right direction:
      <ul>
        <li>
          Car Donation Wizard Title Tips:
          <a href="https://www.cardonationwizard.com/how-to-sign-your-title/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Completed Alabama State Title:
          <a href="https://www.cardonationwizard.com/title/1/alabama-title-transfer.html"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Click Here
          </a>
        </li>
        <li>
          Step by Step Guided Walkthrough (Video):
          <a href="https://www.youtube.com/watch?v=gYr0UJHN_VQ"
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
      <strong>Alabama Department of Revenue</strong>:
      <a href="https://www.revenue.alabama.gov/division/motor-vehicle/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
    <li>
      Fill out your MVT-12-1 Form:
      <a href="https://www.formalu.com/forms/506/application-for-replacement-title"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
    <li>
      For additional Alabama resources, visit the RMV website:
      <a href="https://www.revenue.alabama.gov/faqs/how-do-i-apply-for-a-replacement-title/"
         target="_blank"
         style="color:#3b82f6;text-decoration:underline;">
         Click Here
      </a>
    </li>
  </ul>
  <br>
  Considering donating your vehicle? We can guide you through the titling process above, and completing the donation intake! Send us an email today titles@arscars.com with your stock number to get started!
`,

    // Stubs (you can replace with AL content or leave generic)
    "How to Get Title for Deceased Owner": `
      When a vehicle owner has passed away in Alabama, the process to obtain a title depends on the estate situation.
      <ul>
        <li>
          Some common required documents include (but are not limited to) a death certificate, letters of administration/testamentary, and the existing title.
          In Alabama, the Department of Revenue requires the
          <strong>MVT 5-6</strong>:
          <a href="https://drive.google.com/file/d/1oWm0T7w9C0UsaNcw5S0nt5pYWzmRBTrW/view"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             Download Here
          </a>
        </li>
        <li>Include the title (if available), death certificate, and odometer disclosure.</li>
        <li>If probate applies, court documents authorizing transfer may be required.</li>
        <li>For more information, please refer to the Department of Revenue's website:
          <a href="https://www.revenue.alabama.gov"
          target="_blank"
          style="color:#3b82f6;text-decoration:underline;">
          Click Here
        </a>
      </li>
      </ul>
    `,
    "Applying for Salvage/Nonrepairable Titles": `
      In Alabama, salvage or nonrepairable titles are issued through the Department of Revenue.
      <ul>
        <li>Owners must complete the <strong>MVT-41-1</strong> Application.</li>
        <li>There is typically a $15 application fee.</li>
        <li>Learn more at:
          <a href="https://drive.google.com/file/d/1J3jB9wuNE0l4zqxgvIumvRehJmtwF7g8/view"
            target="blank"
            style="color:#3b82f6;text-decoration:underline;">
            Department of Revenue: MVT-41-1
          </a>
        </li>
      </ul>
    `,
    "Lien Release": `
      To release a lien in Alabama you'll need:
      <ul>
        <li>A lien release letter from the lienholder.</li>
        <li>Ensure the lender has properly signed the title & sent an electronic title release (if applicable) to the Department of Revenue.</li>
        <li>See more:
          <a href="https://www.revenue.alabama.gov/faq-categories/lien/"
             target="_blank"
             style="color:#3b82f6;text-decoration:underline;">
             AL Lien Release Info
          </a>
        </li>
      </ul>
    `
  };

  // The order of buttons shown for Alabama
  const orderedOptions = [
    "How to Sign My Title",
    "Ask Me Anything",
    "No Title or Missing Title",
    "How to Get Title for Deceased Owner",
    "Applying for Salvage/Nonrepairable Titles",
    "Lien Release"
  ];

  return {
    stateName: "Alabama",
    formLibrary,
    optionResponses,
    orderedOptions
  };
}