import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";

import GetQuote from "./pages/GetQuote";
import Footer from "./components/sections/footer/footer";
import Enrollement from "./pages/Enrollement";
import TalkToUsNow from "./pages/TalkToUsNow";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TakePartInOurCommunity from "./pages/TakePartInOurCommunity";
import Toaster from "./components/Toast/Toast";
import "./App.css";

import { LangContext } from "./context/Lang.context";
import TermOfUse from "./pages/TermOfUse";
import NotFound from "./pages/NotFound";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr");

  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "fr");
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="gradient-color">
        <div className="myDiv2">
          <div className="bg2"></div>

          <Toaster position="top-center" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requestquote" element={<GetQuote />} />
            <Route path="/enrollement" element={<Enrollement />} />
            <Route path="/talktousnow" element={<TalkToUsNow />} />
            <Route path="/termeofuse" element={<TermOfUse />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route
              path="/TakePartInOurCommunity"
              element={<TakePartInOurCommunity />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
