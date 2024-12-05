import About from './sections/about/About';
import FAQ from './sections/faq/FAQ';
import Footer from './components/footer/Footer'
import Hero from './sections/hero/Hero';
import Navbar from './components/navbar/Navbar'
import Tracks from './sections/tracks/Tracks';

const App = () => {
  return (
    <div className="h-screen box-border m-0 p-0 scroll-m-20">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App;
