import Footer from "./components/footer/Footer";
import MeetTheTeam from "./sections/meettheteam/MeetTheTeam";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline font-inter text-blue">
        Hello world!
      </h1>

      <MeetTheTeam />
      <Footer />
    </>
  );
};

export default App;
