import About from "./sections/about/About";
import FAQ from "./sections/faq/FAQ";
import Footer from "./components/footer/Footer";
import Hero from "./sections/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Tracks from "./sections/tracks/Tracks";
import Sponsors from "./sections/sponsors/Sponsors";
import Schedule from "./sections/schedule/Schedule";
import MeetTheTeam from "./sections/meettheteam/MeetTheTeam";

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
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default App;
