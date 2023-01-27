import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className='gradient-color'>

      <div className="myDiv2">
        <div className="bg2">


        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
