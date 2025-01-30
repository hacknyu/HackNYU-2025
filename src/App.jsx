import About from "./sections/about/About";
import FAQ from "./sections/faq/FAQ";
import Footer from "./components/footer/Footer";
import Hero from "./sections/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Tracks from "./sections/tracks/Tracks";
import Sponsors from "./sections/sponsors/Sponsors";
import Schedule from "./sections/schedule/Schedule";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
