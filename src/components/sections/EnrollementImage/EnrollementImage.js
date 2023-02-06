import React from 'react'
import Arrow from "../../../assets/images/DownArrow.png"
import "./EnrollementImage.css"
export default function EnrollementImage() {
  return (
    <div className='EnrollementImage-background'>
      <div className="EnrollementImage-overlay"></div>
      <div className='EnrollementImage-content'>
        <div>
        <div className='EnrollementImage-title'>
          Enrollement
        </div>
<br />
        <div className='EnrollementImage-paragraph'>
We are delighted that you want to become a member of your group.
        </div>
        <div className='EnrollementImage-paragraph'>
To submit your membership application, please fill out the form belowand attach any required documents.
        </div>
        <br />
        <br />
        <br />
        <img src={Arrow} className="EnrollementImage-Arrow" alt="" />
        </div>
      </div>
    </div>
  )
}
