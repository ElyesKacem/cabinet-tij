import React from 'react'
import BackgroundImage from '../../backgroundImage/backgroundImage'
import LeftRightButton from '../../buttons/leftRightButton/leftRightButton'
import "./proJoinOurTeam.css"
import Background from "../../../assets/images/meeting.jpg"
import VerticalBar from '../../verticalBar/verticalBar' 
import Media from 'react-media'

export default function ProJoinOurTeam() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 816px)",
    medium: "(max-width: 816px)",
  };
  return (


    <BackgroundImage style={{ height: 550 }} img={Background} rgba1="0,0,0" rgba2="0,0,0" opacity="0.3">
      <div className="proJoinOurTeam-content">
        <VerticalBar top="100px" left="50px" />
        <VerticalBar top="200px" left="70%" />
        <VerticalBar top="400px" left="90%" />


        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {matches => (
            <React.Fragment>
              {matches.large &&
                <>
                  <div className='proJoinOurTeam-content-header'>Professional ? <br /> Join Our team</div>
                  <div className='proJoinOurTeam-content-paragraph'>join our community and be a part of something special .</div>
                  <div className='proJoinOurTeam-content-paragraph'>Together, we can make a difference and create meaningful change.</div>
                  <LeftRightButton title="Career" style={{ transform: 'translateY(35px)' }} />
                </>
              }
              {matches.medium &&
              <>
                <div style={{transform:"scale(0.7)"}}>
                  <div className='proJoinOurTeam-content-header' style={{whiteSpace: "nowrap"}}>Professional ? <br /> Join Our team</div><br />
                  <div className='proJoinOurTeam-content-paragraph'>join our community and be a part of something special .</div>
                  <div className='proJoinOurTeam-content-paragraph'>Together, we can make a difference and create meaningful change.</div>
                </div>
                <LeftRightButton title="Career" />
              </>
              }
            </React.Fragment>
          )
          }
        </Media>



        
      </div>
    </BackgroundImage>
  )
}
