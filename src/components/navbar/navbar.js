import React, { useContext, useState } from "react";
import NavbarButton from "../buttons/navbarButton/navbarButton";
import "./navbar.css";
// import logo from './images/logo.png';
import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logoWhite.png";
import GetQuoteButton, {
  GetQuoteButtonPurple,
} from "../buttons/getQuoteButton/getQuoteButton";
import LanguageMenu from "../languageMenu/languageMenu";
import Media from "react-media";

import { LangContext } from "../../context/Lang.context";
import GetText from "./navbar.lang";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 999px)",
  // medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1000px)",
};

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [activateAnimation, setActivateAnimation] = useState(false);

  const texts = GetText();

  // const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  //  const [logoToSet, setLogoToSet] = useState(logo)

  const changeColor = () => {
    if (window.pageYOffset > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.small && (
              <div
                style={{ display: "block" }}
                className={color ? "nav nav-background" : "nav"}
              >
                <div
                  className={
                    color
                      ? "languageMenuContainer languageMenuContainer0 "
                      : "languageMenuContainer"
                  }
                >
                  <LanguageMenu
                    opacity="0.9"
                    style={{
                      position: "absolute",
                      right: 21,
                      top: 10,
                      zIndex: "4",
                    }}
                  />
                </div>
                <div className={color ? "marginTop-30 nav-main" : "nav-main"}>
                  <div>
                    <img
                      className={color ? "width100 logoMobile" : "logoMobile"}
                      src={color ? logoWhite : logo}
                    />
                  </div>
                  <div>
                    {/* Others */}
                    <GetQuoteButtonPurple
                      purple
                      blue={color}
                      title="Get Quote"
                      style={{
                        color: "white",
                        transform: "translate(-100px,37px)",
                      }}
                    />
                    <div>
                      <input
                        type="checkbox"
                        id="active"
                        onClick={() => {
                          setActivateAnimation(!activateAnimation);
                        }}
                      />
                      <label
                        htmlFor="active"
                        className={
                          color ? "menu-btn menu-btn-white" : "menu-btn"
                        }
                      >
                        <span></span>
                      </label>
                      <label htmlFor="active" className="close"></label>

                      <div className="wrapperMobile">
                        <div className="wrapperMobile-menu">
                          <div>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-left toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-left"
                              }
                            >
                              <a href="#">{texts.Home}</a>
                            </p>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-right toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-right"
                              }
                            >
                              <a href="#">{texts.Services}</a>
                            </p>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-left toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-left"
                              }
                            >
                              <a href="#">{texts.About}</a>
                            </p>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-right toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-right"
                              }
                            >
                              <a href="#">{texts.Contact}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {matches.large && (
              <div
                style={{ display: "flex" }}
                className={color ? "nav nav-background" : "nav"}
              >
                <div>
                  <img
                    className={color ? "logoWeb width99" : "logoWeb"}
                    src={color ? logoWhite : logo}
                  />
                </div>
                <div
                  className={
                    color
                      ? "nav-element navbarAnimation"
                      : "nav-element nav-element-down navbarAnimation"
                  }
                >
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <NavbarButton title="Home" href="/" />
                  </div>
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <NavbarButton title="Services" href="/#services" />
                  </div>
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <NavbarButton title="About" href="" />
                  </div>
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <NavbarButton title="Contact" href="/TalkToUsNow" />
                  </div>
                  <div style={{ marginRight: 40, marginLeft: 20 }}>
                    <GetQuoteButton
                      blue={color}
                      title="Get Quote"
                    ></GetQuoteButton>
                  </div>
                  <div style={{ marginRight: 20 }}>
                    <LanguageMenu color={color}></LanguageMenu>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}
