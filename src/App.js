import './index.css';
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Home from './pages/Home/Home';

function App() {

  return (
    <div className='font-sans' >
      <TopNav />
      <SideNav />
      <Home />
    </div>
  );
}

export default App;
