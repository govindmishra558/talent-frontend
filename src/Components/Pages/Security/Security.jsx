import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import securityimg from "../../../images/security-image.png";
import Learnmore from "../../Reusablecomponents/Learnmore/Learnmore";
import Reportcards from "../../Reusablecomponents/Reportcards/Reportcards";
import TestValidationSection from "../../Reusablecomponents/Testvalidationsection/Testvalidationsection";
import Test1 from "../../../images/Test1.png";
import Regulatory from "../../../images/Regulatory1.png"
import Data from "../../../images/DataSecurity1.png"
import Disaster from  "../../../images/Disaster1.png"
import Secure from "../../../images/Security1.png"
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";


const Security = () => {
  const validationFeatures = [
    {
      icon: "📋",
      title: "Role & Performance Analysis",
      description:
        "We review job descriptions and performance expectations to identify the core skills, responsibilities, and success factors required for the role.",
    },
    {
      icon: "🧩",
      title: "Tailored Assessment Development",
      description:
        "We build customized assessments by blending questions from our test library with role-specific evaluations designed for your organization.",
    },
    {
      icon: "👥",
      title: "Representative Workforce Testing",
      description:
        "Your assessment is administered to a diverse group of current employees to evaluate how well test results reflect real job performance.",
    },
    {
      icon: "📊",
      title: "Performance Data Evaluation",
      description:
        "We examine test outcomes and connect scores with on-the-job success, delivering detailed reports with actionable insights and recommendations.",
    },
    {
      icon: "✅",
      title: "Assessment Optimization & Compliance",
      description:
        "Where needed, we refine assessments to improve accuracy, fairness, compliance, and predictive effectiveness.",
    },
  ];

  const RegulatoryCompliance = [
    {
      icon: "⚖️",
      title: "EEOC & UGESP Alignment",
      description:
        "TSA’s pre-employment assessments follow the Uniform Guidelines on Employee Selection Procedures (UGESP), helping ensure evaluations remain fair, job-related, and free from discriminatory impact.",
    },
    {
      icon: "📉",
      title: "Adverse Impact Monitoring",
      description:
        "Our validation methods detect and reduce potential bias in testing, supporting organizations in building a more diverse, equitable, and inclusive workforce.",
    },
    {
      icon: "♿",
      title: "ADA & ADEA Conformity",
      description:
        "TSA assessments align with ADA and ADEA requirements, supporting reasonable accommodations and promoting an accessible, age-inclusive hiring process.",
    },
    {
      icon: "🏥",
      title: "HIPAA-Aware Testing Support",
      description:
        "For healthcare and related industries, our platform supports testing practices that reinforce awareness of privacy standards and sensitive data protection requirements.",
    },
    {
      icon: "📄",
      title: "I-9 Compliance Guidance",
      description:
        "TSA offers tools, resources, and best-practice guidance to help organizations meet employment verification and Form I-9 compliance standards.",
    },
  ];

  const DataSecurity = [
    {
      icon: "🔐",
      title: "Encrypted Data Transmission",
      description:
        "All information shared across public networks is protected using TLS 1.2+ encryption, ensuring secure communication and preventing unauthorized access.",
    },
    {
      icon: "🛂",
      title: "Controlled & Monitored Access",
      description:
        "Access to sensitive data is limited to verified personnel only, with all user activities recorded to support security oversight and compliance tracking.",
    },
    {
      icon: "☁️",
      title: "Secure Cloud Infrastructure",
      description:
        "The TSA Talent Assessment Platform operates on AWS data centers with high-availability architecture, reducing failure risks and maximizing system uptime.",
    },
    {
      icon: "🛡️",
      title: "Network & Application Protection",
      description:
        "We use secure network configurations, segmentation, continuous monitoring, and vulnerability scanning to defend against cyber threats.",
    },
    {
      icon: "🚨",
      title: "Proactive Threat & Vulnerability Management",
      description:
        "Our security specialists perform routine third-party penetration tests, risk assessments, and real-time monitoring to identify and address potential threats early.",
    },
    {
      icon: "📑",
      title: "Role-Based Controls & Audit Logging",
      description:
        "User permissions are assigned based on roles to ensure proper data handling, while internal audit logs track access and changes to meet GDPR and compliance requirements.",
    },
  ];

  const DisasterRecovery = [
    {
      icon: "🌍",
      title: "Resilient Multi-Region Cloud Infrastructure",
      description:
        "Our Talent Assessment Platform runs across geographically distributed data centers, providing redundancy, automatic failover, and protection from single points of failure.",
    },
    {
      icon: "🔄",
      title: "Continuous Data Replication",
      description:
        "Assessment data is constantly synchronized and securely backed up across cloud environments, helping reduce downtime and maintain availability during system issues.",
    },
    {
      icon: "🧯",
      title: "Certified Disaster Recovery Framework",
      description:
        "We operate a formally documented and regularly tested Disaster Recovery Plan (DRP), aligned with SOC 2 Type II standards, to restore services quickly after natural, cyber, or operational disruptions.",
    },
  ];


  const SecurityPolicies = [
    {
    icon: "🧾",
    title: "Pre-Employment Screening Standards",
    description:
      "All team members complete background verification, including education, work history, and lawful criminal record checks, following security and compliance best practices."
  },
  {
    icon: "🎓",
    title: "Continuous Cybersecurity Education",
    description:
      "Employees participate in ongoing security awareness training aligned with OWASP guidelines, helping them stay updated on emerging threats and data protection responsibilities."
  },
  {
    icon: "🔑",
    title: "Role-Based System Permissions",
    description:
      "Access to internal systems is assigned according to job responsibilities, ensuring sensitive data is available only to properly authorized personnel."
  },
  {
    icon: "📋",
    title: "Routine Security & Compliance Reviews",
    description:
      "TSA performs scheduled audits and policy checks to confirm that staff follow established security procedures and regulatory data protection requirements."
  },
  ];



  return (
    <>
      <div>
        <Assesmentreuse
          tag="Security & Compliance"
          title="Security and Compliance Done Right."
          highlight="Security and Compliance"
          description="The TSA Pre-Hire Assessment Platform is designed with robust security measures, strict access controls, and continuous compliance monitoring to safeguard your recruitment process and protect sensitive data."
          buttonText="Get a Demo"
          image={securityimg}
        />
      </div>
      <div>
        <Learnmore
          smallHeading="TSA"
          mainHeading="Why Compliance Matters"
          description="Compliance is more than a legal obligation — it’s the foundation of fair, ethical, and transparent hiring practices. TSA ensures your pre-employment assessments align with EEOC, OFCCP, ADA, GDPR, and other regulatory standards, helping you hire confidently while reducing legal risk."
          // onButtonClick={handleLearnMore}
        />
      </div>

      <div>
        <Reportcards
          tagText=""
          titleHighlight="The Risks of"
          titleNormal="Non-Compliance"
          description="With TSA, you can make smarter hiring decisions while staying secure and fully compliant through our reliable pre-employment testing platform."
          features={[
            {
              icon: "⚖️",
              iconColor: "blue",
              title: "Legal & Financial Consequences",
              description:
                "Failure to comply with hiring regulations can lead to costly fines, legal action, and serious damage to your organization’s reputation.",
            },
            {
              icon: "⚠️",
              iconColor: "green",
              title: "Hiring Bias & Discrimination Risks",
              description:
                "Without proper compliance oversight, assessments may unintentionally create barriers for certain candidates, increasing the risk of biased or discriminatory hiring decisions.",
            },
            {
              icon: "🔒",
              iconColor: "red",
              title: "Data Breaches & Privacy Violations",
              description:
                "Weak security measures can expose sensitive candidate information, causing loss of trust, privacy violations, and potential regulatory penalties.",
            },
          ]}
        />
      </div>

      <div>
        <TestValidationSection
          badge="Test Validation"
          heading="Promote Fair, Accurate, and Legally Sound Hiring"
          description="Effective hiring begins with reliable, role-specific assessments that accurately evaluate a candidate’s potential for success. Test validation helps ensure your pre-employment assessments are fair, unbiased, and aligned with industry regulations, allowing you to make hiring and promotion decisions with confidence."
          image={Test1} // apni image path
          imageAlt="Security Illustration"
          processHeader="Our test validation process includes:"
          feature={validationFeatures}
          imageOnLeft={true} // 👈 image right side chahiye toh false
        />
      </div>

      <div>
        <TestValidationSection
          badge="Regulatory Compliance"
          heading="Hiring With Confidence & Integrity"
          description="At TSA, we support organizations in making fair, objective, and legally compliant hiring decisions. Our assessments are built to align with EEOC, OFCCP, ADA, GDPR, and other regulatory standards, helping ensure your hiring process remains equitable, transparent, and defensible."
          image={Regulatory} // apni image path
          imageAlt="Security Illustration"
          processHeader="Our Commitment to Compliance:"
          feature={RegulatoryCompliance}
          imageOnLeft={false} // 👈 image right side chahiye toh false
        />
      </div>

      <div>
        <TestValidationSection
          badge="Data Security Measures"
          heading="Safeguarding Your Data with Industry-Leading Security"
          description="We prioritize data protection and privacy at every level. Our platform uses advanced security measures to safeguard candidate and client information, ensuring your hiring process stays secure, confidential, and compliant."
          image={Data} // apni image path
          imageAlt="Security Illustration"
          processHeader="How We Safeguard Your Data:"
          feature={DataSecurity}
          imageOnLeft={true} // 👈 image right side chahiye toh false
        />
      </div>

      <div>
        <TestValidationSection
          badge="Disaster Recovery & Business Continuity"
          heading="Ensuring Uninterrupted Security & Service"
          description="We recognize that strong data protection and reliable service are essential to your hiring operations. That’s why we follow a robust Disaster Recovery and Business Continuity strategy to keep your assessment platform secure, stable, and fully functional even during unexpected events."
          image={Disaster} // apni image path
          imageAlt="Security Illustration"
          processHeader="Here’s how we ensure business continuity:"
          feature={DisasterRecovery}
          imageOnLeft={false} // 👈 image right side chahiye toh false
        />
      </div>

      <div>
        <TestValidationSection
          badge="Security Policies for TSA Employees"
          heading="Our Rigorous Internal Data Protection Standards"
          description="At TSA, we apply strict security policies for both employees and external partners to ensure data is handled, stored, and accessed in a secure manner. Our comprehensive controls ensure that only authorized and trusted individuals can access sensitive information."
          image={Secure} // apni image path
          imageAlt="Security Illustration"
          processHeader="How We Maintain a Secure Workforce:"
          feature={SecurityPolicies}
          imageOnLeft={true} // 👈 image right side chahiye toh false
        />
      </div>

      <section className="subscription-footer-wrappers">
        <Getdemo />
      </section>
    </>
  );
};

export default Security;
