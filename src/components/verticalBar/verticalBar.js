import React from 'react'
import "./verticalBar.css"

export default function VerticalBar(props) {
    const vbcStyle={
        top:props.top
    }
    const vbStyle={
        left:props.left
    }
  return (
    <div className='VerticalBar' style={vbStyle}>
         <div className='VerticalBarCircle' style={vbcStyle}></div>
    </div>
  )
}
