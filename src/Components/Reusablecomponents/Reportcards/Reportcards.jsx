import React from 'react';
import './Reportcards.css';

/**
 * FeaturesSection - A reusable section component for displaying features with customizable content
 * 
 * @param {Object} props - Component props
 * @param {string} props.tagText - Badge text displayed at the top
 * @param {string} props.titleHighlight - First part of title (gradient text)
 * @param {string} props.titleNormal - Second part of title (normal text)
 * @param {string} props.description - Main description paragraph
 * @param {Array} props.features - Array of feature objects
 * @param {string} props.features[].icon - Emoji or icon for the feature
 * @param {string} props.features[].iconColor - Color variant: 'blue', 'purple', 'green', 'orange'
 * @param {string} props.features[].title - Feature title
 * @param {string} props.features[].description - Feature description
 * @param {string} props.imageSrc - Optional image source (if null, no image shown)
 * @param {string} props.imageAlt - Alt text for the image
 * @param {boolean} props.imageOnLeft - If true, image appears on left, content on right
 * @param {string} props.sectionClassName - Additional custom class for section styling
 * @param {Object} props.ctaButton - Optional CTA button config
 * @param {string} props.ctaButton.text - Button text
 * @param {string} props.ctaButton.link - Button URL/link
 */
const Reportcards = ({
  tagText,
  titleHighlight,
  titleNormal,
  description,
  features = [],
  imageSrc = null,
  imageAlt = '',
  imageOnLeft = false,
  sectionClassName = 'custom-tests-section',
  ctaButton = null
}) => {
  return (
    <section className={sectionClassName}>
      <div className="container-fluid px-4">
        <div className="row align-items-center justify-content-center">
          {/* Image Section - Conditionally rendered */}
          {imageSrc && (
            <div 
              className={`col-lg-6 col-md-8 col-12 ${
                imageOnLeft ? 'order-1 order-lg-1' : 'order-2 order-lg-1'
              } text-center mb-4 mb-lg-0`}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="custom-image mx-auto d-block"
              />
            </div>
          )}

          {/* Content Section */}
          <div 
            className={`${imageSrc ? 'col-lg-6' : 'col-lg-12'} col-12 ${
              imageOnLeft ? 'order-2 order-lg-2 ps-lg-5' : 'order-1 order-lg-2 ps-lg-5'
            }`}
          >
            {/* Tag Badge */}
            {tagText && (
              <div className="tag-badge">
                <span className="tag-text">{tagText}</span>
              </div>
            )}

            {/* Title */}
            <h2 className="main-title">
              {titleHighlight && (
                <>
                  <span className="gradient-text">{titleHighlight}</span>
                  <br />
                </>
              )}
              {titleNormal && <span className="text-dark">{titleNormal}</span>}
            </h2>

            {/* Description */}
            {description && (
              <p className="description-text">{description}</p>
            )}

            {/* Features Grid */}
            {features.length > 0 && (
              <div className="features-container">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-item"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <div className={`feature-icon icon-${feature.iconColor || 'blue'}`}>
                      {feature.icon}
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {ctaButton && (
              <div className="cta-container">
                <a href={ctaButton.link} className="cta-button">
                  <span>{ctaButton.text}</span>
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reportcards;