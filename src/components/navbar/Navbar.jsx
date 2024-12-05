import React, { useState, useEffect } from 'react';
import { useOpen } from '../../context/OpenContext';

const Navbar = () => {
  const { isOpen, setIsOpen } = useOpen();

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
      className={`fixed flex text-xl font-bold items-center overflow-hidden w-full ${
        isOpen ? 'h-full' : 'h-[75px] justify-between'
      }`}
    >
      <div className={`w-[100px] ml-5 ${isOpen ? 'hidden' : 'block'}`}>
        <img src="/hacklogo.svg" alt="HackNYU logo"></img>
      </div>
      <div className="hidden md:flex md:space-x-10 md:text-blue md:text-2xl">
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#faq">FAQ</a>
        <a href="#team">Team</a>
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
          <div className="absolute top-5 right-2 w-[40px] h-[40px] hover:cursor-pointer text-white">
            <span className="text-4xl" onClick={handleClick}>x</span>
          </div>
          <div className="flex flex-col space-y-10 text-white text-2xl text-center">
            <a href="#about" onClick={handleClick}>About</a>
            <a href="#tracks" onClick={handleClick}>Tracks</a>
            <a href="#faq" onClick={handleClick}>FAQ</a>
            <a href="#team" onClick={handleClick}>Team</a>
          </div>
        </>
        } 
      </div>
      <div className="md:w-[100px] md:mr-5">
        <button className="hidden md:block bg-blue text-white p-2 md:text-xl border-none rounded cursor-pointer transition-colors duration-300 hover:bg-orange-600">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
