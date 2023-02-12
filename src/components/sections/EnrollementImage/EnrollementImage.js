import React from 'react'
import Arrow from "../../../assets/images/DownArrow.png"
import "./EnrollementImage.css"
import Background from "../../../assets/images/EnrollementImage.png"
import BackgroundImage from '../../backgroundImage/backgroundImage'
import DownArrow from "../../../assets/images/DownArrow.png"

export default function EnrollementImage() {
  return (
    
      // <div className='EnrollementImage-background'>
      // {/* <img src={Background} alt="" /> */}
      // </div>
      <BackgroundImage img={Background} >
        <div className='EnrollementImage-content'>
          <div className='EnrollementImage-title'>Enrollement</div>
          <div className='EnrollementImage-paragraph'>We are delighted that you want to become a member of our group.</div>
          <div className='EnrollementImage-paragraph'>To submit your membership application, please fill out the form belowand attach any required documents.</div>
          <br />
          <br />
          <br />
          <br />
          <img src={DownArrow} className="EnrollementImage-Arrow"/>


        </div>
      </BackgroundImage>
  )
}
