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

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed flex text-xl items-center overflow-hidden w-full bg-white z-10 ${
        isOpen ? 'h-full' : 'h-[75px] justify-between'
      }`}
    >
      <div className={`w-[100px] ml-5 ${isOpen ? 'hidden' : 'block'}`}>
        <img src="/2025/hacklogo.svg" alt="HackNYU logo"></img>
      </div>
      <div className="hidden font-bold md:flex md:space-x-10 md:text-blue md:text-2xl">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
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
          className="hover:cursor-pointer hover:text-dark_blue"
          onClick={handleClick}
        >
          Tracks
        </Link>

        <Link
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
          className="hover:cursor-pointer hover:text-dark_blue"
          onClick={handleClick}
        >
          FAQ
        </Link>
      </div>
      <div className="relative flex flex-col justify-center items-center w-full h-full md:hidden ">
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
          </div>
          </>
        } 
      </div>
      <div className="md:w-[100px] md:mr-5">
        <a className="hidden md:block bg-blue text-white py-3 px-4 md:text-xl border-none rounded cursor-pointer transition-colors duration-300 hover:cursor-pointer hover:bg-dark_blue"
            href="https://forms.gle/eUhikbS4VpcnXTvA9"
            target="_blank"
            rel="noopener noreferrer"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
