import Navbar from './components/Navbar.jsx';
import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./Home.jsx";
import WebApps from "./WebApps";
import Biography from "./Biography";
import Games from "./Games";
import DigitalArt from "./DigitalArt";
import Resume from "./Resume";

function App() {
  return (
    
    <HashRouter>
      <Navbar/>
            <Routes>
              <Route path="/Home" exact          element={<Home />} />
              <Route path="/Biography" element={<Biography />} />
              <Route path="/Games"        element={<Games />} />
              <Route path="/WebApps"        element={<WebApps />} />
              <Route path="/DigitalArt"       element={<DigitalArt />} />
              <Route path="/Resume"       element={<Resume />} />
            </Routes>
    </HashRouter>
  )
}

export default App
