import React from 'react'
import "./leftRightButton.css"
import EastIcon from '@mui/icons-material/East';

export default function LeftRightButton(props) {
  // console.log(props.style)
  const myStyle={
    ...props.style,
    background:props.title=="Learn More" && "transparent linear-gradient(180deg, #4159F0 0%, #0827D5 100%) 0% 0% no-repeat padding-box"
  }
  return (
    <div style={myStyle} className='leftRightButton'>
      <div className='LeftRightButton-container'>

        <div className='buttonText'>
          <b>{props.title} </b>
        </div>
        <div className='test'>
          <div className='buttonIcon'>
            <EastIcon></EastIcon>
          </div>
        </div>
      </div>
      <div className='LeftRightButton-background'></div>
    </div>
  )
}
