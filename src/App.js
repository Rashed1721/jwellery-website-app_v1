import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Gold from './Pages/Products/Gold/Gold';
import Silver from './Pages/Products/Silver/Silver';
import Diamond from './Pages/Products/Diamond/Diamond';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import OurService from './Pages/OurService/OurService';
import JwelleryBag from './Pages/Accessories/JwelleryBag/JwelleryBag';
import JwelleryBox from './Pages/Accessories/JwelleryBox/JwelleryBox';
import JwelleryMachine from './Pages/Accessories/JwelleryMachine/JwelleryMachine';
import MenufactureItem from './Pages/Accessories/MenufactureItem/MenufactureItem';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/jwellerybag" element={<JwelleryBag />} />
          <Route path="/jwellerybox" element={<JwelleryBox />} />
          <Route path="/jwellerymachine" element={<JwelleryMachine />} />
          <Route path="/menufactureitem" element={<MenufactureItem />} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
