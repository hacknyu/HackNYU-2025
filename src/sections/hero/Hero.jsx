import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
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
  )
}

export default Hero
