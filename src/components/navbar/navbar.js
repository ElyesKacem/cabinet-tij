import React, { useState } from 'react'
import NavbarButton from '../buttons/navbarButton/navbarButton'
import './navbar.css'
// import logo from './images/logo.png';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logoWhite.png';
import GetQuoteButton, { GetQuoteButtonPurple } from '../buttons/getQuoteButton/getQuoteButton';
import LanguageMenu from '../languageMenu/languageMenu';
import Media from 'react-media';




export default function Navbar() {
  const [color, setColor] = useState(false);
  const [activateAnimation, setActivateAnimation] = useState(false);

  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 999px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1000px)"
  };
  // const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  //  const [logoToSet, setLogoToSet] = useState(logo)

  const changeColor = () => {
    if (window.pageYOffset > 0) {
      setColor(true);
    }
    else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);


  return (
    <div >
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {matches => (
          <React.Fragment>
            {matches.small && <div style={{ display: "block" }} className={color ? 'nav nav-background' : 'nav'}><div className={color ? "languageMenuContainer languageMenuContainer0 " : "languageMenuContainer"}>

              <LanguageMenu opacity="0.7" style={{ position: "absolute", right: 19, top: 10, zIndex: "4" }} />
            </div>
              <div className={color ? 'marginTop-30 nav-main' : "nav-main"}>
                <div>
                  <img className={color ? 'width100 logoMobile' : 'logoMobile'} src={color ? logoWhite : logo} />
                </div>
                <div>
                  {/* Others */}
                  <GetQuoteButtonPurple purple blue={color} title="Get Quote" style={{ color: "white", transform: "translate(-100px,37px)" }} />
                  <div>
                    <input type="checkbox" id="active" onClick={() => {
                      setActivateAnimation(!activateAnimation);
                    }} />
                    <label htmlFor="active" className={color ? "menu-btn menu-btn-white" : "menu-btn"}><span></span></label>
                    <label htmlFor="active" className="close"></label>

                    <div className="wrapperMobile">
                      <div className='wrapperMobile-menu'>
                        <div>
                          <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">Home</a></p>
                          <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Services</a></p>
                          <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">About</a></p>
                          <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Contact</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>}

            {matches.large && <div style={{ display: "flex" }} className={color ? 'nav nav-background' : 'nav'}>
              <div><img className={color ? 'logoWeb width99' : 'logoWeb'} src={color ? logoWhite : logo} /></div>
              <div className={color ? 'nav-element navbarAnimation' : "nav-element nav-element-down navbarAnimation"}>
                <div style={{ marginRight: 30 }}>
                  <NavbarButton title="Home" href="" />
                </div>
                <div style={{ marginRight: 30 }}>
                  <NavbarButton title="Services" href="" />
                </div>
                <div style={{ marginRight: 30 }}>
                  <NavbarButton title="About" href="" />
                </div>
                <div style={{ marginRight: 30 }}>
                  <NavbarButton title="Contact" href="" />
                </div>
                <div style={{ marginRight: 40,marginLeft:10 }}>
                  <GetQuoteButton blue={color} title="Get Quote"></GetQuoteButton>

                </div>
                <div style={{ marginRight: 20 }}>
                  <LanguageMenu></LanguageMenu>
                </div>
              </div>
            </div>}
          </React.Fragment>
        )}
      </Media>



      {/* <div style={{ transform: "translateY(5px)" }}> <div className={color ? " navbarAnimation navbarAnimation-up" : "navbarAnimation"}><div className={color ? "logoScrolled navbarAnimation" : "navbarAnimation"}><img className='logo' src={color ? logoWhite : logo} /></div></div> </div>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {matches => (
          <React.Fragment>
            {matches.small && <div>


              <div>
                <GetQuoteButton blue={color} title="Get Quote" style={{ transform: "translate(-80px,8px)", color: "white" }}></GetQuoteButton>
                <input type="checkbox" id="active" onClick={() => {
                  setActivateAnimation(!activateAnimation);
                }} />
                <label htmlFor="active" className="menu-btn"><span></span></label>
                <label htmlFor="active" className="close"></label>
                
                <div className="wrapperMobile">
                  <div className='wrapperMobile-menu'>
                    <div>
                      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">Home</a></p>
                      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Services</a></p>
                      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">About</a></p>
                      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Contact</a></p>
                    </div>
                  </div>
                </div>
              </div>


            </div>}

            {matches.large && <div className={color ? 'nav-element navbarAnimation' : "nav-element nav-element-down navbarAnimation"}>
              <div style={{ marginRight: 40 }}>
                <NavbarButton title="Home" href="" />
              </div>
              <div style={{ marginRight: 40 }}>
                <NavbarButton title="Services" href="" />
              </div>
              <div style={{ marginRight: 40 }}>
                <NavbarButton title="About" href="" />
              </div>
              <div style={{ marginRight: 40 }}>
                <NavbarButton title="Contact" href="" />
              </div>
              <div style={{ marginRight: 40 }}>
                <GetQuoteButton blue={color} title="Get Quote"></GetQuoteButton>

              </div>
              <div style={{ marginRight: 20 }}>
                <LanguageMenu></LanguageMenu>
              </div>
            </div>}
          </React.Fragment>
        )}
      </Media> */}



    </div>
  )
}

{/* <div>

<input type="checkbox" id="active" onClick={() => {
  setActivateAnimation(!activateAnimation);
}} />
<label htmlFor="active" className="menu-btn"><span></span></label>
<label htmlFor="active" className="close"></label>

<div className="wrapperMobile">
  <div className='wrapperMobile-menu'>
    <div>
      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">Home</a></p>
      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Services</a></p>
      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">About</a></p>
      <p className={activateAnimation ? 'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit' : "wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Contact</a></p>
    </div>
  </div>
</div>
</div> */}