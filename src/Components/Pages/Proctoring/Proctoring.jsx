import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import proctoring from "../../../images/proctoring.png";
import Learnmore from "../../Reusablecomponents/Learnmore/Learnmore";
import FeatureShowcase from "../../Reusablecomponents/Featureshowcase/Featureshowcase";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";

const Proctoring = () => {
  return (
    <>
      <div>
        <Assesmentreuse
          tag="Proctoring"
          title="Reliable and Secure Online Assessment Proctoring"
          highlight="Secure Online Assessment"
          description="TSA’s proctoring and anti-cheating technology ensures the authenticity of pre-employment test results, empowering you to make fair, data-backed hiring decisions."
          buttonText="Get a Demo"
          image={proctoring}
        />
      </div>
      <div>
        <Learnmore
          smallHeading="TSA"
          mainHeading="Protect the Integrity of Your Hiring Process"
          description="TSA’s online proctoring solutions prevent cheating and protect exam integrity, so you can confidently focus on selecting top talent. From live monitoring to automated features like ID verification and behavior tracking, TSA makes dependable hiring possible."
          // onButtonClick={handleLearnMore}
        />
      </div>

      <div>
        <FeatureShowcase
          tagText="How It Works"
          titleHighlight="Ensure the Authenticity of"
          titleNormal="Pre-Hire Test Results"
          description="TSA’s proctoring process is built to protect assessment integrity effortlessly, blending advanced technology with human supervision to deliver secure, accurate, and fair results every time."
          //   imageSrc={proctoring}    
          imageAlt="Dashboard Preview"
          imageOnLeft={false}
          features={[
            {
              icon: "shield",
              iconColor: "blue",
              title: "Authenticate Candidates",
              description:
                "Confirm a candidate’   s identity through photo ID verification before the test starts, ensuring the right person is completing the assessment.",
            },
            {
              icon: "settings",
              iconColor: "green",
              title: "Automatic Tools",
              description:
                "Throughout the assessment, candidates are actively monitored to identify and prevent questionable activity. TSA’s automated detection system tracks actions like copy-paste attempts and tab switching, flagging unusual behavior for instant review or follow-up.",
            },
            {
              icon: "video",
              iconColor: "purple",
              title: "Video Proctoring",
              description:
                "Looking for stronger exam security? Use live proctoring to observe candidates in real time, reducing cheating risks and ensuring a fair testing environment.",
            },  
          ]}
        />
      </div>
      <section className="subscription-footer-wrappers">
        <Getdemo />
      </section>
    </>
  );
};

export default Proctoring;
