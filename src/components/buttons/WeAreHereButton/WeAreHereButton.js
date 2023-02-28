import React from 'react'
import "./WeAreHereButton.css"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function WeAreHereButton(props) {
    const myStyle={
        ...props.style
    }
  return (
    <div className='WeAreHereButton' style={myStyle}>
        <HorizontalRuleIcon></HorizontalRuleIcon>
        <div>{props.title}</div>
    </div>
  )
}
