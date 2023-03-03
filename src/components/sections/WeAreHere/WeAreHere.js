import React from 'react'
import BackgroundImage from '../../backgroundImage/backgroundImage'
import "./WeAreHere.css"
import Img from "../../../assets/images/OurCommunity/ourCommunityFinal.png";
import WeAreHereButton from '../../buttons/WeAreHereButton/WeAreHereButton';

export default function WeAreHere() {
  return (
    <div>
        <BackgroundImage rgba1="0,0,0" rgba2="0,0,0" opacity="0.27" img={Img}>
            <div className='WeAreHere-container' >
            <div className='OurCommunityHeader-title'>We are here, it<b className='normal'>'</b>s time<br /> for you to join TIJ.</div>
            
            <p className='OurCommunityHeader-paragraph'>It will take less than 10 minutes for you to submit your application <br /> for affiliation. The process will be completed in a time frame of 1<b className='normal'>-</b>2 weeks.<br /> Please note that only self<b className='normal'>-</b>employed individuals are eligible for affiliation <br /> with our network.</p>
       
            <div style={{display:"flex",gap:10}}>
            <WeAreHereButton title="Join Us" />
            <WeAreHereButton title="Contact Us" arrowColor="#6E533D" style={{backgroundColor:'white',color:"#6E533D"}}/>
            </div>
            </div>
        </BackgroundImage>
    </div>
  )
}
