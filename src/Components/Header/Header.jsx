import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Hexnode</div>
    <nav>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <button className="trial-button">14 Day Free Trial</button>
  </header>
);

export default Header;
