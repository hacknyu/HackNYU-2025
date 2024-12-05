import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse justify-center w-full h-screen px-8 py-10 md:flex-row md:justify-between md:items-center md:gap-10">
      <div className="md:ml-8 lg:mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue -mt-5 md:mt-0 mb-5">
          February 8-9, 2025
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl text-blue leading-relaxed mb-7">
          Brooklyn Athletic Facility
        </p>
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <a className="bg-orange text-white py-3 px-6 md:text-xl border-none rounded cursor-pointer transition-colors duration-300 hover:bg-orange-600"
              href="https://forms.gle/eUhikbS4VpcnXTvA9"
              target="_blank"
              rel="noopener noreferrer"
          > 
            Register
          </a>
          <a className="text-blue underline py-5 sm:px-5" href="https://forms.gle/Mo6ruwsNf6xHC89N8" target="_blank" rel="noopener noreferrer">Become a Mentor/Volunteer</a>
        </div>
      </div>
      <div className="flex flex-col justify-center text-6xl sm:text-7xl lg:text-8xl text-white font-bold w-3/4 sm:w-[400px] h-[500px] mx-auto md:pr-8">
        <span className="bg-blue py-8 rounded-full w-full text-center -rotate-12">HACK</span>
        <span className="bg-orange py-8 rounded-full w-full text-center -mt-2 ml-8">NYU</span>
        <span className="bg-black py-8 rounded-full w-full text-center -mt-4 -ml-10">2025</span>
      </div>
    </section>
  );
}

export default Hero;
