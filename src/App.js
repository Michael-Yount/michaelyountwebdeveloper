import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import WebApps from "./pages/WebApps";
import Biography from "./pages/Biography";
import Games from "./pages/Games";
import Art from "./pages/Art";
import Resume from "./pages/Resume";

function App() {
  return (
    
    <HashRouter>
      <Navbar/>
            <Routes>
              <Route path="/"                  element={<Home />}/>
              <Route path="/Home"           element={<Home />} />
              <Route path="/Biography" element={<Biography />} />
              <Route path="/Games"        element={<Games />} />
              <Route path="/Art"        element={<Art />} />
              <Route path="/WebApps"        element={<WebApps />} />
              <Route path="/Resume"       element={<Resume />} />
            </Routes>
    </HashRouter>
  )
}

export default App;
