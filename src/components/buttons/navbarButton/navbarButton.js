import React from 'react'
import './navbarButton.css'
import EastIcon from '@mui/icons-material/East';


export default function NavbarButton(props) {
  return (
    <div>
       
       <div className="button">
    <div className="btnTwo">
      <p className="btnText2"><EastIcon /></p>
    </div>
    <p className="btnText"><b>{props.title}</b></p>
 </div>

       
       </div>
  )
}
