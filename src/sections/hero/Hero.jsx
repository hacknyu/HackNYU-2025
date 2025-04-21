const Hero = () => {
  return (
    <section className="flex flex-col-reverse justify-center min-h-screen w-full px-8 md:flex-row md:justify-between md:items-center md:gap-10">
      <div className="-mt-12 sm:mt-0 mb-2 md:ml-8 lg:mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue">
          February 8-9, 2025
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl text-blue leading-relaxed mt-2 mb-8">
          NYU Tandon School of Engineering
        </p>
        <p className="inline-block bg-orange font-bold text-white py-2 px-4 md:text-xl border-none rounded transition-colors duration-300 mb-8">
          Event Over :(
        </p>
      </div>
      <div className="flex flex-col justify-center text-6xl sm:text-7xl lg:text-8xl text-white font-bold w-3/4 sm:w-[400px] h-[500px] mx-auto mt-10 lg:mt-20 md:pr-8">
        <span className="bg-blue py-8 rounded-full w-full text-center -rotate-12">HACK</span>
        <span className="bg-orange py-8 rounded-full w-full text-center -mt-2 ml-8">NYU</span>
        <span className="bg-black py-8 rounded-full w-full text-center -mt-4 -ml-10">2025</span>
      </div>
    </section>
  );
}

export default Hero;
