import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    title: 'Single App Kiosk',
    description: 'Lock devices to a single application with limited functionalities.',
    image: 'single-app-kiosk.png',
  },
  {
    title: 'Multi-App Kiosk',
    description: 'Allow access to multiple specified applications.',
    image: 'multi-app-kiosk.png',
  },
  // Add more features as needed
];

const FeaturesSection = () => (
  <section className="features">
    {features.map((feature, index) => (
      <div className="feature" key={index}>
        <img src={`assets/${feature.image}`} alt={feature.title} />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    ))}
  </section>
);

export default FeaturesSection;