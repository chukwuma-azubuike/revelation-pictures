import LandingPage from "./pages/LandingPage/LandingPage";
import './index.css';
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";

function App() {

  return (
    <div>
      <TopNav />
      <SideNav />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
