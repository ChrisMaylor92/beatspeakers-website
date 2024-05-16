
import { Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home';
import { About } from './components/About';
import { Workshops } from './components/Workshops';
import { Artists } from './components/Artists';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';


function App() {
  


  return (
    <div className="fixed" id="header">
      
      <div >
        <NavBar className=""/>
      </div>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
