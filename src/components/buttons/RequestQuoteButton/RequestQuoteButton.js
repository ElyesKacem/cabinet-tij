import React from 'react'
import "./RequestQuoteButton.css"

export default function RequestQuoteButton(props) {
  const mStyle={
    ...props.style
  }
  return (
    <div style={mStyle} className={props.blue?'RequestQuoteButton RequestQuoteButtonBlue':'RequestQuoteButton RequestQuoteButtonWhite'}
    onClick={()=>{
      let menuSelected=[false,false,false,false];
      menuSelected[props.id]=true;
      props.setMenuSelected(menuSelected);
    }}
    >
        <img src={props.icon} style={{height:33}} alt="" />
        {props.title}
    </div>
  )
}
