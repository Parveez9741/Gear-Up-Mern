import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="container">
        <h1 className="title">About GearUp</h1>
        <p className="subtitle">Drive with confidence — your trusted car rental partner.</p>

        <div className="about-text">
          <p><strong>GearUp</strong> We are here to make your travel easy and comfortable by offering a wide range of cars for rent.</p>
          <p>Our goal is to provide safe, affordable, and clean vehicles for every journey.
             <br />
             Whether it's a trip with family, friends, or for work - we've got you covered.
          </p>
        </div>

        <div className="founder-section">
          <img src="WhatsApp Image 2025-06-07 at 18.01.51_61b4d4a6 copy.jpg"/>
          <div className="founder-info">
            <h3>Mohammed Parveez</h3>
            <p>Founder & Developer, GearUp</p>
          </div>
        </div>
      </div>

      <footer>
        <p><strong>GearUp</strong> | Developed by Mohammed Parveez</p>
        <p>Email: <a href="mailto:mfarwiz1234@gmail.com">mfarwiz1234@gmail.com</a> | Phone: 9741387341</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mohammed-parveez">Mohammed Parveez</a></p>
        <p>&copy; 2025 GearUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
