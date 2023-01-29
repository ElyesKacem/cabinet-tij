import React from 'react'
import "./leftRightButton.css"
import EastIcon from '@mui/icons-material/East';

export default function LeftRightButton() {
  return (
    <div className='leftRightButton'>
      <div className='buttonText'>
       <b>Learn More </b> 
      </div>
      <div className='test'>
      <div className='buttonIcon'>
        <EastIcon></EastIcon>
      </div>
      </div>
      </div>
  )
}
