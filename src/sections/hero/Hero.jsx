import React from 'react';
import Logo from '../../assets/logo.png';
import MlhLogo from '../../assets/mlh_logo.png';
import HeroImage from '../../assets/hero.png';
import HeroSection from '../../assets/hero_section.png';

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center w-1/2 min-h-screen pl-10 pt-5 box-border">
      <div className="absolute top-0 left-0 z-50 mt-8 ml-12">
        <img src={Logo} alt="Hackathon Logo" width="71" height="71" />
      </div>
      <div className="absolute top-0 left-0 z-50 ml-40">
        <img src={MlhLogo} alt="MLH Logo" width="100" height="174" />
      </div>
      <div className="absolute left-[calc(100px+800px)] top-100">
        <img src={HeroImage} alt="Hero Image" style={{ width: '80%', height: '80%' }} />
      </div>
      <div className="absolute left-1/2 bottom-10 translate-x-[-50%] w-full max-w-screen-xl">
        <img src={HeroSection} />
      </div>
      <div className="absolute left-40 top-75 w-[calc(50%-10rem)]">
        <h1 className="text-8xl font-bold text-blue-600 mb-5">
          <span>Join a worldwide</span><br />
          <span>hackathon</span>
        </h1>
        <p className="text-xl text-blue-600 leading-loose mb-7">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui <br />
          voluptatum - deleniti atque corrupti quos <br />
          dolores.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-orange-600 text-white py-3 px-6 border-none rounded text-base cursor-pointer transition-colors duration-300">
            Register
          </button>
          <a href="#sponsor" className="text-blue-600 text-base font-bold underline cursor-pointer hover:no-underline">
            Sponsor Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
