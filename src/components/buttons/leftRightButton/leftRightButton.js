import React from 'react'
import "./leftRightButton.css"
import EastIcon from '@mui/icons-material/East';

export default function LeftRightButton(props) {
  return (
    <div className='leftRightButton'>
      <div className='buttonText'>
       <b>{props.title} </b> 
      </div>
      <div className='test'>
      <div className='buttonIcon'>
        <EastIcon></EastIcon>
      </div>
      </div>
      </div>
  )
}
