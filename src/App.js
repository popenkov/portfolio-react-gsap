import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import ScrollToTop from './ScrollToTop/ScrollToTop';
function App() {
  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
