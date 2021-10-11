import './index.css';
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Talent from './pages/Talent/Talent';
import Projects from './pages/Projects/Projects';

function App() {

  return (
    <div className='font-sans grid bg-black h-full' >
      <Router>
        <TopNav />
        <SideNav />
        <Switch>
          <Route path='/projects' >
            <Projects />
          </Route>
          <Route path='/talent' >
            <Talent />
          </Route>
          <Route path='/about' >
            <About />
          </Route>
          <Route path='/contact' >
            <ContactUs />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
