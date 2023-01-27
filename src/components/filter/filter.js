import React from 'react'
import './filter.css'

export default function Filter(props) {
  return (
    <div className='wrapper' style={{opacity:props.opacity}}>
    {props.children}
    
  </div>
  )
}
