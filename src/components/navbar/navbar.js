import React, { useState } from 'react'
import NavbarButton from '../buttons/navbarButton/navbarButton'
import './navbar.css'
// import logo from './images/logo.png';
import logo from '../../assets/images/logo.png';
import logoFrance from '../../assets/images/franceR.png';
import GetQuoteButton from '../buttons/getQuoteButton/getQuoteButton';


export default function Navbar() {
 const [color, setColor] = useState(false);

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
       <div><img className='logo' src={logo}/></div>
       
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
        <GetQuoteButton title="Get Quote"></GetQuoteButton>
        
        </div>
        <div style={{marginRight:40}}>
          Choice a language
        </div>
       </div>
    </div>
  )
}
