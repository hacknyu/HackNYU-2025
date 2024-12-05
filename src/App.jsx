import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useOpen } from './context/OpenContext';
import About from './sections/about/About';

const App = () => {
  const { isOpen } = useOpen();

  return (
    <div className="h-screen box-border m-0 p-0">
      <Navbar />
      { !isOpen && <Footer /> }
    </div>
  )
}

export default App
