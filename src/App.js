import './index.css';
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='font-sans grid' >
      <TopNav />
      <SideNav />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
