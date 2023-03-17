import React from 'react'
import './navbarButton.css'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';


export default function NavbarButton(props) {
  const navigate = useNavigate();
  return (
<div className='button' onClick={()=>{
  navigate(props.href);
}}>
  <div className='btnArrow-container'>
    <div className='btnArrow-element'><EastIcon  /></div>
  </div>
  <div className="btnText">
    <b>{props.title}</b>
  </div>
</div>

  )
}
