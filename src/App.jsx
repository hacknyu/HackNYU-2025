import About from './sections/about/About';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useOpen } from './context/OpenContext';

const App = () => {
  const { isOpen } = useOpen();

  return (
    <div className="h-screen box-border m-0 p-0">
      <Navbar />
      <About />
      { !isOpen && <Footer /> }
    </div>
  )
}

export default App;
