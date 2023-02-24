import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import logoFrance from './assets/images/franceR.png';
import GetQuote from './pages/GetQuote';
import Footer from './components/sections/footer/footer'
import Enrollement from './pages/Enrollement';
import TalkToUsNow from './pages/TalkToUsNow';
import TakePartInOurCommunity from './pages/TakePartInOurCommunity';

function App() {
  return (
    <div className='gradient-color'>

      <div className="myDiv2">
        <div className="bg2">


        </div>
        <div><img className='logofr' style={{height:19}} src={logoFrance}/></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/requestquote" element={<GetQuote />} />
          <Route path="/enrollement" element={<Enrollement />} />
          <Route path="/talktousnow" element={<TalkToUsNow />} />
          <Route path="/TakePartInOurCommunity" element={<TakePartInOurCommunity />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
