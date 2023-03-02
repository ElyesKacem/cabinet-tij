import React from 'react'
import Arrow from "../../../assets/images/DownArrow.png"
import "./EnrollementImage.css"
import Background from "../../../assets/images/EnrollementImage.png"
import BackgroundImage from '../../backgroundImage/backgroundImage'
import DownArrow from "../../../assets/images/DownArrow.png"
import VerticalBar from '../../verticalBar/verticalBar'
import Media from 'react-media'

export default function EnrollementImage() {

  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 901px)",
    medium: "(min-width: 420px) and (max-width: 900px)",
    small: "(max-width: 420px)"
  };
  return (


    <BackgroundImage img={Background} >
      <VerticalBar top="55%" left="50px" />
      <VerticalBar top="17%" left="40%" />
      <VerticalBar top="90%" left="90%" />


      <div className='EnrollementImage-content'>

        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {matches => (
            <React.Fragment>
              {matches.small && <div>
                <div className='EnrollementImage-title' style={{fontSize:45}}>Enrollement</div>
        <div className='EnrollementImage-paragraph'>We are delighted that you want to become a member of our group.</div>
        <div className='EnrollementImage-paragraph'>To submit your membership application, please fill out the form belowand attach any required documents.</div>
        <br /><br /><br /><br />
        <img src={DownArrow} className="EnrollementImage-Arrow" />

              </div>}
              {matches.medium && <div>
                <div className='EnrollementImage-title' style={{fontSize:60}}>Enrollement</div>
        <div className='EnrollementImage-paragraph'>We are delighted that you want to become a member of our group.</div>
        <div className='EnrollementImage-paragraph'>To submit your membership application, please fill out the form belowand attach any required documents.</div>
        <br /><br /><br /><br />
        <img src={DownArrow} className="EnrollementImage-Arrow" />

              </div>}
              {matches.large && <div>
                <div className='EnrollementImage-title'>Enrollement</div>
        <div className='EnrollementImage-paragraph'>We are delighted that you want to become a member of our group.</div>
        <div className='EnrollementImage-paragraph'>To submit your membership application, please fill out the form belowand attach any required documents.</div>
        <br /><br /><br /><br />
        <img src={DownArrow} className="EnrollementImage-Arrow" />

              </div>
              }
            </React.Fragment>
          )
          }
        </Media>


      </div>
    </BackgroundImage>
  )
}
