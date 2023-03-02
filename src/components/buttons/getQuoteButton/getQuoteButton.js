import React from 'react'
import "./getQuoteButton.css"

export default function GetQuoteButton(props) {
  const myStyle={
    ...props.style
  }
  const [isBlue, setIsBlue] = React.useState(props.blue||false);
  return (
    <div className={props.blue?'get-quote get-quote-blueBG':'get-quote'} style={myStyle}>{props.title}</div>
  )
}

export  function GetQuoteButtonPurple(props) {
  const myStyle={
    ...props.style,
  }
  const [isBlue, setIsBlue] = React.useState(props.blue||false);
  return (
    <div className={props.blue?'get-quote-purple get-quote-blueBG':'get-quote-purple'} style={myStyle}>{props.title}</div>
  )
}