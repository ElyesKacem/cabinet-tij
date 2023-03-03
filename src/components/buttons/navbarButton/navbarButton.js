import React from 'react'
import './navbarButton.css'
import EastIcon from '@mui/icons-material/East';


export default function NavbarButton(props) {
  return (
<div className='button'>
  <div className='btnArrow-container'>
    <div className='btnArrow-element'><EastIcon  /></div>
  </div>
  <div className="btnText">
    <b>{props.title}</b>
  </div>
</div>

  )
}
