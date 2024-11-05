import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Tracks from './sections/tracks/Tracks';    
import Hero from './sections/hero/Hero';  

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section className="section-container" id="tracks">
        <Tracks />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
