import React from 'react'
import BackgroundImage from '../../backgroundImage/backgroundImage'
import LeftRightButton from '../../buttons/leftRightButton/leftRightButton'
import "./proJoinOurTeam.css"
import Background from "../../../assets/images/meeting.png"
import VerticalBar from '../../verticalBar/verticalBar'

export default function ProJoinOurTeam() {
  return (
    //     <div className='proJoinOurTeam-wrapper'>

    //       <div className="proJoinOurTeam-content">
    //         <div className='proJoinOurTeam-content-header'>Professsional ? Join Our team</div>
    //         <div className='proJoinOurTeam-content-paragraph'>join our community and be a part of something special .</div>
    //         <div className='proJoinOurTeam-content-paragraph'>Together, we can make a difference and create meaningful change.</div>
    //         <LeftRightButton title="Career" style={{transform:'translateY(40px)'}}/>
    //       </div>
    // <div className="proJoinOurTeam-overlay"></div>
    //     </div>
    <BackgroundImage style={{ height: 550 }} img={Background} rgba1="0,0,0" rgba2="0,0,0" opacity="0.3">
      <div className="proJoinOurTeam-content">
        <VerticalBar top="100px" left="50px" />
            <VerticalBar top="200px" left="70%" />
            <VerticalBar top="400px" left="90%" />
        <div className='proJoinOurTeam-content-header'>Professsional ? Join Our team</div>
        <div className='proJoinOurTeam-content-paragraph'>join our community and be a part of something special .</div>
        <div className='proJoinOurTeam-content-paragraph'>Together, we can make a difference and create meaningful change.</div>
        <LeftRightButton title="Career" style={{ transform: 'translateY(40px)' }} />
      </div>
    </BackgroundImage>
  )
}
