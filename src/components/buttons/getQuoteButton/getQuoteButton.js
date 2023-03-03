import React from 'react'
import "./getQuoteButton.css"
import { useNavigate } from "react-router-dom";


export default function GetQuoteButton(props) {
  const navigate = useNavigate();

const handleClick = () => {
  // Navigate to the specified URL when the div is clicked
  navigate("/requestquote");
}
  const myStyle={
    ...props.style
  }
  const [isBlue, setIsBlue] = React.useState(props.blue||false);
  return (
    <div onClick={handleClick} className={props.blue?'get-quote get-quote-blueBG':'get-quote'} style={myStyle}>{props.title}</div>
  )
}

export  function GetQuoteButtonPurple(props) {
  const navigate = useNavigate();

const handleClick = () => {
  // Navigate to the specified URL when the div is clicked
  navigate("/requestquote");
}
  const myStyle={
    ...props.style,
  }
  const [isBlue, setIsBlue] = React.useState(props.blue||false);
  return (
    <div onClick={handleClick} className={props.blue?'get-quote-purple get-quote-blueBG':'get-quote-purple'} style={myStyle}>{props.title}</div>
  )
}