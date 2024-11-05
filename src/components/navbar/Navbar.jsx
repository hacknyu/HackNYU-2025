import React from 'react';
import './Navbar.css';
import Menu from "../menu/Menu.jsx";

const Navbar = () => {
  // const [showingTracks, setTracksVisibility] = useState(false);
  const toggleTracks = () => setTracksVisibility(!showingTracks); // Toggle visibility of the Tracks section

  return (
    <header className="navbar">
      {/* <div className="logo">
        <img src="/google-x-hacknyu/hacklogo.svg" alt="HackNYU logo"></img>
      </div> */}
      {/* <div className={showingMenuInMobile ? "menu" : "menu invisibleInMobile"}> */}
      <div className="nav-center">
        <a href="#about" className="nav-link">About</a>
        <a href="#tracks" className="nav-link">Tracks</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#sponsor" className="nav-link">Sponsor</a>
      </div>
      <div className="nav-right">
        <a href="#register" className="register-button">Register</a>
        <a href="#sponsor" className="sponsor-button">Sponsor Us</a>
      </div>
      {/* <div className="menu-section" onClick={toggleMenu}>
          <Menu />
      </div> */}
    </header>
  );
};

export default Navbar;
