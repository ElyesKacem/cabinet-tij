import React from 'react'
import "./WeAreHereButton.css"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function WeAreHereButton(props) {
    const myStyle={
        ...props.style
    }
    const arrowColor={
      backgroundColor:props.arrowColor
    }
  return (
    <div className='WeAreHereButton' style={myStyle}>
        <div className='WeAreHereButton-ac'>
        <HorizontalRuleIcon  style={{transform:"scaleX(1.5) translateX(-1px)"}}/>
        <div className='WeAreHereButton-upArrow' style={arrowColor}></div>
        <div className='WeAreHereButton-buttonArrow' style={arrowColor}></div>
        </div>
        <div>{props.title}</div>
    </div>
  )
}
