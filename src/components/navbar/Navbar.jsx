import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const circleElement = document.querySelector('.circle');
    if (circleElement) {
      if (isOpen) {
        circleElement.classList.add('active');
      } else {
        circleElement.classList.remove('active');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed flex text-xl items-center overflow-hidden w-full bg-white z-10 ${
        isOpen ? 'h-full' : 'h-[75px] justify-center'
      }`}
    >
      <div className={`absolute left-5 w-[100px] ${isOpen ? 'hidden' : 'block'}`}>
        <img src="/2025/hacklogo.svg" alt="HackNYU logo"></img>
      </div>
      <div className="hidden font-bold lg:flex lg:space-x-10 lg:text-blue lg:text-2xl">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
        >
          About
        </Link>

        <Link
          to="tracks"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
        >
          Tracks
        </Link>

        <Link
          to="schedule"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
        >
          Schedule
        </Link>

        <Link
          to="sponsors"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
        >
          Sponsors
        </Link>
        
        <Link
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
        >
          FAQ
        </Link>

        <Link
          to="team"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
        >
          Team
        </Link>
      </div>
      <div className="relative flex flex-col justify-center items-center w-full h-full lg:hidden ">
        <div className="circle"></div>
        {!isOpen ? /* menu */
          <span className="flex flex-col justify-center items-center gap-y-1 absolute top-5 right-2 w-[40px] h-[40px] hover:cursor-pointer" onClick={handleClick}>
              <span className="bg-black w-[25px] h-1 rounded"></span>
              <span className="bg-black w-[25px] h-1 rounded"></span>
          </span>
        :
        <>
          <div className="absolute top-5 right-2 w-[40px] h-[40px] hover:cursor-pointer text-white font-bold">
            <span className="text-4xl" onClick={handleClick}>x</span>
          </div>
          <div className="flex flex-col space-y-10 text-white text-2xl text-center font-bold">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
              className="hover:cursor-pointer hover:brightness-90"
              onClick={handleClick}
            >
              About
            </Link>

            <Link
              to="tracks"
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
              className="hover:cursor-pointer hover:brightness-90"
              onClick={handleClick}
            >
              Tracks
            </Link>

            <Link
              to="schedule"
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
              className="hover:cursor-pointer hover:brightness-90"
              onClick={handleClick}
            >
              Schedule
            </Link>

            <Link
              to="sponsors"
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
              className="hover:cursor-pointer hover:brightness-90"
              onClick={handleClick}
            >
              Sponsors
            </Link>

            <Link
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
              className="hover:cursor-pointer hover:brightness-90"
              onClick={handleClick}
            >
              FAQ
            </Link>

            <Link
              to="team"
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
              className="hover:cursor-pointer hover:brightness-90"
              onClick={handleClick}
            >
              Team
            </Link>
          </div>
          </>
        } 
      </div>
      <div className={`fixed max-w-[100px] min-w-[60px] top-0 lg:right-5 right-16 w-[10%] z-11 ${isOpen ? 'hidden' : 'block'}`}>
        <a id="mlh-trust-badge" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season" className='w-full'/></a>
      </div>
    </nav>
  );
};

export default Navbar;
