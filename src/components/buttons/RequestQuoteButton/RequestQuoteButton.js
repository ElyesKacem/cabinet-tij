import React from 'react'
import "./RequestQuoteButton.css"
import Icon from "../../../assets/images/Expertise.svg"

export default function RequestQuoteButton(props) {
  return (
    <div className='RequestQuoteButton'>
        <img src={Icon} style={{height:35}} alt="" />
        {props.title}
    </div>
  )
}
