import About from './sections/about/About';
import FAQ from './sections/faq/FAQ';
import Footer from './components/footer/Footer'
import Hero from './sections/hero/Hero';
import Navbar from './components/navbar/Navbar'
import Tracks from './sections/tracks/Tracks';
import { useOpen } from './context/OpenContext';

const App = () => {
  const { isOpen } = useOpen();

  return (
    <div className="h-screen box-border m-0 p-0">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <FAQ />
      { !isOpen && <Footer /> }
    </div>
  )
}

export default App;
