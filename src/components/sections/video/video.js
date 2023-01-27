import React from 'react'
import './video.css'
import video from '../../../assets/video/video.mp4'


export default function VideoSection() {
  return (
    <div className='wrapper'>
    <video src={video} autoPlay loop muted></video>
    
  </div>
  )
}
