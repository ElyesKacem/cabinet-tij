import React from 'react'
import './video.css'
import video from '../../../assets/video/video.mp4'
import LeftRightButton from '../../buttons/leftRightButton/leftRightButton'


export default function VideoSection() {
  return (
    <div className='wrapper'>
    <video src={video} autoPlay loop muted></video>
    <div className="videoContent">
      <div> 
        <b>

        We Provide Outsourced
        </b>
        </div><br />
     
        <div className='videoContentMiddle'>Translation
            <div style={{fontFamily:"sans-serif",textAlign:"center"}}>&</div>
        Interpreting</div>
        <br />
      
      <div>
        <b>

        For small and mid sized businesses
        </b>
        </div>
        <br />
      <div>
      {/* <LeftRightButton></LeftRightButton> */}
      </div>
    </div>
    
  </div>
  )
}
