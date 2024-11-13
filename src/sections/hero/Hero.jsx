import React from 'react';
import './Hero.css';
import Logo from '../../assets/logo.png';
import MlhLogo from '../../assets/mlh_logo.png';
import HeroImage from '../../assets/hero.png';
import HeroSection from '../../assets/hero_section.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="logo-container">
        <div className="logo">
          <img src={Logo} alt="Hackathon Logo" width="71" height="71" />
        </div>
        <div className="mlh-logo">
          <img src={MlhLogo} alt="MLH Logo" width="100" height="174" />
        </div>
      </div>
      {/* Container for text and buttons */}
      <div className="text-container">
        <h1>
          <span>Join a worldwide</span><br />
          <span>hackathon</span>
        </h1>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui <br />
          voluptatum - deleniti atque corrupti quos <br />
          dolores.
        </p>
        <div className="buttons">
          <button className="register-button">Register</button>
          <a href="#sponsor" className="sponsor-link">Sponsor Us</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="Hero Image" style={{ width: '80%', height: '80%' }} />
      </div>
      <div className="hero-section">
          <img src={HeroSection}/>
      </div>
    </div>
  );
}

export default Hero;
