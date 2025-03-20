import React from 'react';
import './AdditionalFeatures.css';

const additionalFeatures = [
  {
    title: 'Brand Visibility',
    description: 'Customize the interface to boost brand presence.',
    icon: 'brand-visibility-icon.png',
  },
  {
    title: 'Data Security',
    description: 'Ensure data protection even in case of device loss.',
    icon: 'data-security-icon.png',
  },
  // Add more features as needed
];

const AdditionalFeatures = () => (
  <section className="additional-features">
    {additionalFeatures.map((feature, index) => (
      <div className="additional-feature" key={index}>
        <img src={`assets/${feature.icon}`} alt={feature.title} />
        <h4>{feature.title}</h4>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>
);

export default AdditionalFeatures;