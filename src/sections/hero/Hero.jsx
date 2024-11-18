import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse justify-center w-full h-full md:h-screen px-5 md:flex-row md:justify-between md:items-center">
      <div className="md:ml-8 lg:mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue -mt-5 md:mt-0 mb-5">
          <span>Join a worldwide <br/> hackathon</span>
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl text-blue leading-relaxed mb-7">
          February, 2025
        </p>
        <button className="bg-orange text-white py-3 px-6 md:text-xl border-none rounded cursor-pointer transition-colors duration-300 hover:bg-orange-600">
          Register
        </button>
      </div>
      <div className="flex flex-col justify-center text-6xl sm:text-7xl lg:text-8xl text-white font-bold w-3/4 sm:w-[400px] h-[500px] mx-auto -mt-5 md:mt-0">
        <span className="bg-blue py-8 rounded-full w-full text-center -rotate-12">HACK</span>
        <span className="bg-orange py-8 rounded-full w-full text-center z-1 -mt-2 ml-8">NYU</span>
        <span className="bg-black py-8 rounded-full w-full text-center -mt-4 -ml-10">2025</span>
      </div>
    </div>
  );
}

export default Hero;
