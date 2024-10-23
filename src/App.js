import './styles/App.css';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Speakers from './components/Speakers';
import BecomeCreative from './components/BecomeCreative';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navigation />
      <AboutUs />
      <Courses />
      <Speakers />
      <BecomeCreative />
      <Footer/>
    </>
  );
}

export default App;