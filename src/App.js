import './index.css';
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {

  return (
    <div className='font-sans grid bg-black h-full' >
      <TopNav />
      <SideNav />
      <Router>
        <Switch>
          <Route path='/projects' >
            <Home />
          </Route>
          <Route path='/talent' >
            <Home />
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
