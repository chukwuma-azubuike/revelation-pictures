import './index.css';
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Talent from './pages/Talent/Talent';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className='font-sans grid bg-black h-full'>
      <Router>
        <TopNav />
        <SideNav />
        <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/talent' element={<Talent />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
