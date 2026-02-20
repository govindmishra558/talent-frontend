import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import Reportcards from "../../Reusablecomponents/Reportcards/Reportcards";
import Report from "../../../images/Report.png";
import Learnmore from "../../Reusablecomponents/Learnmore/Learnmore";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import FeatureShowcase from "../../Reusablecomponents/Featureshowcase/Featureshowcase";

const Reporting = () => {
  return (
    <>
      <Assesmentreuse
        tag="Reporting"
        title="Pre-Hire Assessment Insights for Selecting High-Performing Talent"
        highlight="Selecting High-Performing Talent"
        description="Look past the resume. Access in-depth candidate performance reports that break down overall scores, subject-wise grades, and even question-level analysis—giving you a complete picture of every applicant’s strengths and areas for improvement."
        buttonText="Get a Demo"
        image={Report}
      />

      <Reportcards
        tagText="In-depth analytics for better hiring"
        titleHighlight="Identify Top Talent"
        titleNormal="at a Glance"
        description="Understand your candidates deeply, identify high performers, and hire with certainty. TSA’s pre-employment assessment reports give you fast visibility into candidate performance, helping you pinpoint strengths, uncover gaps, and make confident, data-backed hiring decisions."
        features={[
          {
            icon: "1",
            iconColor: "blue",
            title: "Deep Candidate Insights",
            description:
              "Get a complete overview of every applicant — analyze skill-wise test performance, completion time, and collaborate with your team to evaluate subjective answers effectively.",
          },
          {
            icon: "2",
            iconColor: "green",
            title: "Optimize Your Hiring Assessments",
            description:
              "Track average scores, completion trends, and question-level feedback to continuously refine your tests and improve hiring accuracy.",
          },
          {
            icon: "3",
            iconColor: "red",
            title: "Tailored Reporting for Your Business",
            description:
              "Measure what matters most with customized reports built around your company’s unique KPIs and recruitment goals.",
          },
        ]}
      />

      <div>
        <Learnmore
          smallHeading="Refine assessments for better outcomes."
          mainHeading="Understand Pre-Employment Test Results"
          description="Using a custom pre-employment test? Use test analytics to understand how well your test is measuring performance. Understand average scores, time-to-complete, and question feedback to create a test optimized for improved hiring."
          // onButtonClick={handleLearnMore}
        />
      </div>

      <div>
        <FeatureShowcase
          tagText="Understand your candidates"
          titleHighlight="Measure"
          titleNormal="Candidate Results"
          description="With TSA pre-employment test reporting tools, you can dive deeper into applicant performance. See overall top performers, then drill down into other performance indicators like score by skill type, time-to-complete, and even flags for potential cheating to identify the perfect candidate for your role."
          imageSrc={Report}
          imageAlt="Dashboard Preview"
          imageOnLeft={false}
          features={[
            {
              icon: "clock",
              iconColor: "blue",
              title: "Skill-Wise Score Insights",
              description:
                "Break down results by individual skills to quickly spot candidates who match your job requirements.",
            },
            {
              icon: "target",
              iconColor: "green",
              title: "Improve Test Performance",
              description:
                "Monitor score trends, completion data, and question feedback to make your assessments smarter over time.",
            },
            {
              icon: "clock",
              iconColor: "purple",
              title: "Track Completion Speed",
              description:
                "Measure how fast candidates finish tests to identify applicants who are both capable and efficient.",
            },
            {
              icon: "users",
              iconColor: "orange",
              title: "Ensure Fair Testing",
              description:
                "Use proctoring tools to detect suspicious activity and maintain a fair evaluation process for every candidate.",
            },
          ]}
        />
      </div>

      <div>
        <Learnmore
          smallHeading="Use Tailored Employment Test Reports"
          mainHeading="Apply the assessment data that matters most to your hiring strategy."
          description="Combine custom-built reports with ready-made analytics to make data-backed hiring choices. Our Assessment Specialists collaborate with you to understand your goals and design reports that match your exact requirements."
          // onButtonClick={handleLearnMore}
        />
      </div>

      {/* Get Demo Section */}
      <section className="subscription-footer-wrappers">
        <Getdemo />
      </section>
    </>
  );
};

export default Reporting;
