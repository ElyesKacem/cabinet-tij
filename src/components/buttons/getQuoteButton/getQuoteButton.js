import React from 'react'
import "./getQuoteButton.css"

export default function GetQuoteButton(props) {
  const [isBlue, setIsBlue] = React.useState(props.blue||false);
  return (
    <div className={props.blue?'get-quote get-quote-blueBG':'get-quote'} >{props.title}</div>
  )
}
