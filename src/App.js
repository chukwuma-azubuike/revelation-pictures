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

function App() {

  return (
    <div className='font-sans grid' >
      <TopNav />
      <SideNav />
      <Router>
        <Switch>
          <Route path='/' >
            <Home />
          </Route>
          <Route path='/projects' >
            <Home />
          </Route>
          <Route path='/talent' >
            <Home />
          </Route>
          <Route path='/about' >
            <About/>
          </Route>
          <Route path='/contact' >
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
