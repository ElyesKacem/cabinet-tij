// import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'

// import './Navbar.css'

// const Navbar = () => {

//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const closeMenu = () => setClick(false)

//     return (
//         <div className='header'>
//             <nav className='navbar'>
//                 <a href='/' className='logo'>
//                     <img src={logo} alt='logo' />
//                 </a>
//                 <div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                         : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

//                 </div>
//                 <ul className={click ? "nav-menu active" : "nav-menu"}>
//                     <li className='nav-item'>
//                         <a href='/' onClick={closeMenu}>Home</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#about' onClick={closeMenu}>About</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#demo' onClick={closeMenu}>Demo</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Navbar


import React from 'react'
import NavbarButton from '../buttons/navbarButton'
import './navbar.css'
// import logo from './images/logo.png';
import logo from '../../assets/images/logo.png';


export default function Navbar() {
  return (
    <div className='nav' >
       <div className='nav-element'><img src={logo}/></div>
       <div className='nav-element' style={{float:'left'}}>
        <div>
            <NavbarButton></NavbarButton>
        </div>
        <div>
            <NavbarButton></NavbarButton>
        </div>
        <div>
            <NavbarButton></NavbarButton>
        </div>
        <div>
            <NavbarButton></NavbarButton>
        </div>
       </div>
    </div>
  )
}
