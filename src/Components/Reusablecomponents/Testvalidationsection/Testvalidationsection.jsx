import React from 'react';
import { motion } from 'framer-motion';

/**
 * TestValidationSection Component
 * 
 * A fully reusable and responsive two-column section component
 * Left: Badge, Heading, Description, Image
 * Right: Process header and feature list
 * 
 * @param {Object} props
 * @param {string} props.badge - Badge text (e.g., "Test Validation")
 * @param {string} props.heading - Main heading text
 * @param {string} props.description - Description paragraph
 * @param {string} props.image - Image URL or path
 * @param {string} props.imageAlt - Alt text for image
 * @param {string} props.processHeader - Header text for the process list (e.g., "Our test validation process includes:")
 * @param {Array} props.feature - Array of feature objects with icon, title, and description
 * @param {boolean} props.imageOnLeft - If true, content/image on left, feature on right; if false, reverses
 */
const TestValidationSection = ({
  badge = "Test Validation",
  heading = "Ensure Fair, Accurate, and Legally Compliant Hiring",
  description = "Making smart hiring decisions starts with using valid, job-relevant assessments that accurately measure a candidate's ability to succeed in a role. Test validation ensures that your pre-employment assessments are fair, unbiased, and compliant with industry regulations — so you can confidently use them in hiring and promotion decisions.",
  image,
  imageAlt = "Illustration",
  processHeader = "Our test validation process includes:",
  feature = [],
  imageOnLeft = true
}) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="validation-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-blue: #2563eb;
          --light-blue: #eff6ff;
          --icon-bg: #e0e7ff;
          --text-dark: #0f172a;
          --text-body: #334155;
          --border-light: #e2e8f0;
          --background: #f8fafc;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
        }

        .validation-section {
          padding: 80px 20px;
          background: var(--background);
          overflow: hidden;
        }

        .section-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .two-column-layout.reverse {
          direction: rtl;
        }

        .two-column-layout.reverse > * {
          direction: ltr;
        }

        /* LEFT COLUMN */
        .content-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--primary-blue);
          color: white;
          font-size: 13px;
          font-weight: 600;
          border-radius: 4px;
          width: fit-content;
          letter-spacing: 0.3px;
        }

        .main-heading {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-dark);
          margin: 0;
        }

        .main-description {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-body);
          margin: 0;
          font-weight: 400;
        }

        .image-wrapper {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper img {
          width: 100%;
          max-width: 450px;
          height: auto;
          display: block;
        }

        /* RIGHT COLUMN */
        .feature-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-top: 8px;
        }

        .process-header {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin: 0 0 8px 0;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 16px;
          align-items: start;
        }

        .feature-icon-box {
          width: 40px;
          height: 40px;
          background: var(--icon-bg);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon-box svg {
          width: 20px;
          height: 20px;
          color: var(--primary-blue);
        }

        .feature-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .feature-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin: 0;
          line-height: 1.4;
        }

        .feature-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-body);
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .two-column-layout {
            gap: 60px;
          }

          .main-heading {
            font-size: 36px;
          }
        }

        @media (max-width: 968px) {
          .validation-section {
            padding: 60px 20px;
          }

          .two-column-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .two-column-layout.reverse {
            direction: ltr;
          }

          .feature-column {
            order: 2;
          }

          .content-column {
            gap: 20px;
          }

          .main-heading {
            font-size: 32px;
          }

          .image-wrapper {
            margin-top: 30px;
          }
        }

        @media (max-width: 640px) {
          .validation-section {
            padding: 40px 16px;
          }

          .two-column-layout {
            gap: 40px;
          }

          .main-heading {
            font-size: 28px;
          }

          .main-description {
            font-size: 15px;
          }

          .badge {
            font-size: 12px;
            padding: 5px 14px;
          }

          .process-header {
            font-size: 15px;
          }

          .feature-item {
            grid-template-columns: 36px 1fr;
            gap: 14px;
          }

          .feature-icon-box {
            width: 36px;
            height: 36px;
          }

          .feature-icon-box svg {
            width: 18px;
            height: 18px;
          }

          .feature-title {
            font-size: 15px;
          }

          .feature-description {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="section-container">
        <motion.div 
          className={`two-column-layout ${!imageOnLeft ? 'reverse' : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* LEFT COLUMN - Content & Image */}
          <div className="content-column">
            <motion.div variants={itemVariants}>
              <span className="badge">{badge}</span>
            </motion.div>

            <motion.h2 className="main-heading" variants={itemVariants}>
              {heading}
            </motion.h2>

            <motion.p className="main-description" variants={itemVariants}>
              {description}
            </motion.p>

            <motion.div className="image-wrapper" variants={itemVariants}>
              <img src={image} alt={imageAlt} />
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Features List */}
          <div className="feature-column">
            <motion.h3 className="process-header" variants={itemVariants}>
              {processHeader}
            </motion.h3>

            <motion.div className="feature-list" variants={containerVariants}>
              {feature.map((feature, index) => (
                <motion.div key={index} className="feature-item" variants={itemVariants}>
                  <div className="feature-icon-box">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestValidationSection;