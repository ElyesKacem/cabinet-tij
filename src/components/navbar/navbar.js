import React, { useState } from 'react'
import NavbarButton from '../buttons/navbarButton/navbarButton'
import './navbar.css'
// import logo from './images/logo.png';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logoWhite.png';
import GetQuoteButton from '../buttons/getQuoteButton/getQuoteButton';
import LanguageMenu from '../languageMenu/languageMenu';


export default function Navbar() {
 const [color, setColor] = useState(false);
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
       
       <div className='nav-element'>
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
       </div>
    </div>
  )
}
