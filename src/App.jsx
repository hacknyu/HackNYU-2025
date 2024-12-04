import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { useOpen } from './context/OpenContext';

const App = () => {
  const { isOpen } = useOpen();

  return (
    <div className="h-screen max-w-full">
      <Navbar />
      { !isOpen && <Footer /> }
    </div>
  )
}

export default App
