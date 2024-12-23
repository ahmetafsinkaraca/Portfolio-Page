import './App.scss';
import Intro from './components/intro/Intro';
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import { useState } from 'react';
import Menu from './components/menu/Menu';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
     <Intro/>
     <Portfolio/>
     <Works/>
     <Testimonials/>
     <Contact/>
     </div>
    </div>
  );
}

export default App;
