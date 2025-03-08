import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="head">
        <h1>About Us</h1>
      </div>
      <div className="content">
        <p>We're a team of passionate individuals who believe in providing high-quality information and resources.</p>
        <p>Our mission is to help users make informed decisions when purchasing a new laptop.</p>
      </div>
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h4>Vishal kushwah    </h4> 
          <p>Founder and CEO</p>
        </div>
        <div className="team-member">
          <h4>Pawan  </h4>
          <p>Content Manager</p>
        </div>
      </div>
    </div>
  );
};

export default About;
