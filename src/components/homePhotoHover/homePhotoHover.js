import React from 'react'
import "./homePhotoHover.css"

export default function HomePhotoHover(props) {
  return (
    <div>
        <div>
            <img style={{width:200}} src={props.img}  />
        </div>
        <div>
             {props.title}
        </div>
    </div>
  )
}
