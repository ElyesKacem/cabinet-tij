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

import GetText from "./navbar.lang";

import { HashLink } from "react-router-hash-link";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 999px)",
  // medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 999px)",
};

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [activateAnimation, setActivateAnimation] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);

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
                    setHideMenu={setHideMenu}
                    opacity="0.9"
                    style={{
                      position: "absolute",
                      right: 8,
                      top: 15,
                      zIndex: "8",
                    }}
                  />
                </div>
                <div
                  className={
                    color || activateAnimation
                      ? "marginTop-30 nav-main"
                      : "nav-main"
                  }
                >
                  <div>
                    <img
                      className={color ? "width100 logoMobile" : "logoMobile"}
                      src={color && !activateAnimation ? logoWhite : logo}
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
                        transform: "translate(-73px,35px)",
                      }}
                    />
                    <div>
                      <input
                        type="checkbox"
                        value={true}
                        id="active"
                        onClick={() => {
                          setActivateAnimation(!activateAnimation);
                        }}
                      />
                      <label
                        htmlFor="active"
                        className={
                          !color && hideMenu
                            ? "disable"
                            : color
                            ? "menu-btn menu-btn-white"
                            : "menu-btn"
                        }
                      >
                        <span></span>
                      </label>
                      <label htmlFor="active" className="close"></label>

                      <div
                        style={{ top: activateAnimation ? 0 : "100%" }}
                        className="wrapperMobile"
                      >
                        <div className="wrapperMobile-menu">
                          <div>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-left toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-left"
                              }
                            >
                              <HashLink
                                className="resetcss"
                                onClick={() => {
                                  setActivateAnimation(!activateAnimation);
                                }}
                                smooth
                                to="/#home"
                                style={{ fontWeight: "normal", fontSize: 28 }}
                              >
                                {texts.Home}
                              </HashLink>
                            </p>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-right toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-right"
                              }
                            >
                              <HashLink
                                className="resetcss"
                                onClick={() => {
                                  setActivateAnimation(!activateAnimation);
                                }}
                                smooth
                                to="/#about"
                                style={{ fontWeight: "normal", fontSize: 28 }}
                              >
                                {texts.About}
                              </HashLink>
                            </p>
                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-left toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-left"
                              }
                            >
                              <HashLink
                                className="resetcss"
                                onClick={() => {
                                  setActivateAnimation(!activateAnimation);
                                }}
                                smooth
                                to="/#services"
                                style={{ fontWeight: "normal", fontSize: 28 }}
                              >
                                {texts.Services}
                              </HashLink>
                            </p>

                            <p
                              className={
                                activateAnimation
                                  ? "wrapperMobile-menu-item wrapperMobile-menu-item-right toInit"
                                  : "wrapperMobile-menu-item wrapperMobile-menu-item-right"
                              }
                            >
                              <HashLink
                                className="resetcss"
                                onClick={() => {
                                  setActivateAnimation(!activateAnimation);
                                }}
                                smooth
                                to="/TalkToUsNow#contact"
                                style={{ fontWeight: "normal", fontSize: 28 }}
                              >
                                {texts.Contact}
                              </HashLink>
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
                    <HashLink className="resetcss" smooth to="/#home">
                      <NavbarButton title="Home" />
                    </HashLink>
                  </div>
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <HashLink className="resetcss" smooth to="/#about">
                      <NavbarButton title="About" />
                    </HashLink>
                  </div>
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <HashLink className="resetcss" smooth to="/#services">
                      <NavbarButton title="Services" />
                    </HashLink>
                  </div>
                  <div style={{ marginRight: 20, marginTop: 7 }}>
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/TalkToUsNow#contact"
                    >
                      <NavbarButton title="Contact" href="/TalkToUsNow" />
                    </HashLink>
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
