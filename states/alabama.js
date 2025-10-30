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
    `,

    // Stubs (you can replace with AL content or leave generic)
    "How to Get Title for Deceased Owner": `
      For transfers when the owner is deceased in Alabama, requirements can vary by estate situation.
      Common documents include a death certificate, Letters of Administration / Testamentary, and the title.
      If you share a bit more context, I can point you to the right steps and forms.
    `,
    "Applying for Salvage/Nonrepairable Titles": `
      Interested in applying for a <em>salvage</em> or <em>nonrepairable</em> title?
      <ul>
        <li>Vehicles <strong>35 years or older</strong> are EXEMPT</li>
        <li>$15 application fee</li>
        <li>Turnaround: 2–4 weeks</li>
        <li>Use <strong>MVT-41-1</strong> application</li>
      </ul>
    `,
    "Lien Release": `
      To release a lien in Alabama, you'll typically need a lien release letter from the lienholder and the properly assigned title.
      If you tell me your situation, I can suggest the exact next steps.
    `,
    "General Information": `
      Want to ask broad title questions?
      Try:
      <ul>
        <li>Age exemption rules</li>
        <li>Role of mileage in transfers</li>
        <li>License plate handling after sale</li>
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