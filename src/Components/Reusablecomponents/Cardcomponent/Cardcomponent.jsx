import React from "react";
import "./Cardcomponent.css";

const Cardcomponent = ({ heading, highlight, skillsData, text }) => {
  return (
    <section className="eskills-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <h2 className="heading-secondary text-center">
            {heading} <span className="brand-highlight text-danger bg-red">{highlight}</span>
          </h2>
         <p className="small text-muted mb-2 mb-md-3 lh-sm lh-md-base px-1 px-md-0">
  {text}
</p>

        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {skillsData?.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="card-icon">{skill.icon}</span>
              <h3 className="card-title">{skill.title}</h3>
              <p className="card-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardcomponent;
