import React, { useState } from 'react'
import NavbarButton from '../buttons/navbarButton/navbarButton'
import './navbar.css'
// import logo from './images/logo.png';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logoWhite.png';
import GetQuoteButton from '../buttons/getQuoteButton/getQuoteButton';
import LanguageMenu from '../languageMenu/languageMenu';
import  Media  from 'react-media';




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

 const changeColor=()=>{
  if(window.pageYOffset>0){
    setColor(true);
  }
  else{
    setColor(false);
  }
 }

 window.addEventListener('scroll',changeColor);

  return (
    <div className={color? 'nav nav-background':'nav'} >
       <div style={{transform:"translateY(5px)"}}><img className='logo' src={color?logoWhite:logo}/></div>
       {/* <div style={{transform:"translateY(5px)"}}><img className='logo' src={logo}/></div> */}
      <Media queries={GLOBAL_MEDIA_QUERIES}>
          {matches => (
            <React.Fragment>
              {matches.small && <div>
                
                
               <div>
               <input type="checkbox" id="active" onClick={()=>{
                setActivateAnimation(!activateAnimation);
               }}/>
    <label htmlFor="active" className="menu-btn"><span></span></label>
    <label htmlFor="active" className="close"></label>
    <div className="wrapperMobile">
      <div className='wrapperMobile-menu'>
        <div>
          <p className={activateAnimation?'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit':"wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">Home</a></p>
          <p className={activateAnimation?'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit':"wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Services</a></p>
          <p className={activateAnimation?'wrapperMobile-menu-item wrapperMobile-menu-item-left toInit':"wrapperMobile-menu-item wrapperMobile-menu-item-left"}><a href="#">About</a></p>
          <p className={activateAnimation?'wrapperMobile-menu-item wrapperMobile-menu-item-right toInit':"wrapperMobile-menu-item wrapperMobile-menu-item-right"}><a href="#">Contact</a></p>
        </div>
      </div>
      {/* <ul>
<li><a href="#">Home</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">Feedback</a></li>
cc
</ul> */}
</div>
               </div>
                
                
                </div>}
            
              {matches.large &&<div className='nav-element'>
              <div style={{marginRight:40}}>
                  <NavbarButton title="Home" href=""/>
              </div>
              <div style={{marginRight:40}}>
                  <NavbarButton title="Services" href=""/>
              </div>
              <div style={{marginRight:40}}>
                  <NavbarButton title="About" href=""/>
              </div>
              <div style={{marginRight:40}}>
                  <NavbarButton title="Contact" href=""/>
              </div>
              <div style={{marginRight:40}}>
              <GetQuoteButton blue={color} title="Get Quote"></GetQuoteButton>
              
              </div>
              <div style={{marginRight:20}}>
              <LanguageMenu></LanguageMenu>
              </div>
            </div>}
            </React.Fragment>
          )}
        </Media>
       
       
    </div>
  )
}
