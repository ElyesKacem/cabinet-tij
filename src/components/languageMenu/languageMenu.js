import React, { useContext } from "react";
import "./languageMenu.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EnglishFlag from "./../../assets/images/Flag_of_the_United_Kingdom.svg";
import FrenchFlag from "./../../assets/images/FrenchFlag.png";

import { LangContext } from "../../context/Lang.context";
import GetText from "./languageMenu.lang";

export default function LanguageMenu(props) {
  const [rotateButton, setRotateButton] = React.useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);

  const { setLang } = useContext(LangContext);
  const texts = GetText();

  const mStyle = {
    ...props.style,
    display: "flex",
    alignItems: "center",
    color: "white",
  };

  const mOpacity = {
    opacity: props.opacity,
  };

  return (
    <div style={mStyle}>
      <div>
        <div className={rotateButton ? "dropDownMenu" : "dropUpMenu"}>
          <div className="languageMenuContent-overlay" style={mOpacity}>
            <div className="languageMenuContent">
              <div
                style={{ display: "flex", cursor: "pointer" }}
                onClick={() => {
                  setLang("en");
                }}
              >
                <img src={EnglishFlag} /> &nbsp;&nbsp;&nbsp;
                <div>{texts.English}</div>
              </div>

              <br />

              <div
                onClick={() => {
                  setLang("fr");
                }}
                style={{ display: "flex", cursor: "pointer" }}
              >
                <img src={FrenchFlag} /> &nbsp;&nbsp;&nbsp;
                <div>{texts.French}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        style={{ height: 23, position: "relative", zIndex: "3" }}
        src={texts.flag}
        alt=""
      />
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
          <stop offset={0} stopColor="#242D65" />
          <stop offset={1} stopColor="#CF2032" />
        </linearGradient>
      </svg>
      <ExpandLessIcon
        className={rotateButton ? "rotateButtonForward" : "rotateButtonBack"}
        sx={{
          fontSize: 50,
          fill: props.color ? "white" : "url(#linearColors)",
          cursor: "pointer",
        }}
        onClick={() => {
          setRotateButton(!rotateButton);
          props.setHideMenu(!rotateButton);
        }}
      />
    </div>
  );
}
