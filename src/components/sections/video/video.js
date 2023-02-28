import React from 'react'
import './video.css'
import video from '../../../assets/video/video.mp4'
import LeftRightButton from '../../buttons/leftRightButton/leftRightButton'
import VerticalBar from '../../verticalBar/verticalBar';


export default function VideoSection() {
  return (
    <div className='wrapper'>
          <VerticalBar top="55%" left="50px" />
            <VerticalBar top="20%" left="45%" />
            <VerticalBar top="30%" left="92%" />
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
      <div style={{display:"flex"}}>
      <div>
      <LeftRightButton title="Learn More" isBlue={true} />
      </div>
      <div style={{marginLeft:18}}>
      <LeftRightButton title="Get in Touch"  />
      </div>
      </div>
    </div>
    
  </div>
  )
}
