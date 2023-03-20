import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import logoFrance from "./assets/images/franceR.png";
import GetQuote from "./pages/GetQuote";
import Footer from "./components/sections/footer/footer";
import Enrollement from "./pages/Enrollement";
import TalkToUsNow from "./pages/TalkToUsNow";
import TakePartInOurCommunity from "./pages/TakePartInOurCommunity";
import Toaster from "./components/Toast/Toast";

import logo from "./logo.svg";
import "./App.css";

import { LangContext } from "./context/Lang.context";
import TermOfUse from "./pages/TermOfUse";

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // console.log(lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="gradient-color">
        <div className="myDiv2">
          <div className="bg2"></div>
          <div>
            <img className="logofr" src={logoFrance} />
          </div>
          <Toaster position="top-center" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requestquote" element={<GetQuote />} />
            <Route path="/enrollement" element={<Enrollement />} />
            <Route path="/talktousnow" element={<TalkToUsNow />} />
            <Route path="/termeofuse" element={<TermOfUse />} />
            <Route
              path="/TakePartInOurCommunity"
              element={<TakePartInOurCommunity />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
