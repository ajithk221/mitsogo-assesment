import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'Hexnode is of great value. Works great with Android and iOS!',
    author: 'Justin Modrak, Technology Coordinator, East Troy Community School District',
    image: 'justin-modrak.png',
  },
  {
    quote: 'Most complete MDM solution I found, including major names.',
    author: 'Dalibor Kruljac, KAMELEYA LTD',
    image: 'dalibor-kruljac.png',
  },
  // Add more testimonials as needed
];

const Testimonials = () => (
  <section className="testimonials">
    {testimonials.map((testimonial, index) => (
      <div className="testimonial" key={index}>
        <img src={`assets/${testimonial.image}`} alt={testimonial.author} />
        <blockquote>{testimonial.quote}</blockquote>
        <p>{testimonial.author}</p>
      </div>
    ))}
  </section>
);

export default Testimonials;