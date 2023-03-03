import React from 'react'
import BackgroundImage from '../../backgroundImage/backgroundImage'
import "./WeAreHere.css"
import Img from "../../../assets/images/OurCommunity/ourCommunityFinal.png";
import WeAreHereButton from '../../buttons/WeAreHereButton/WeAreHereButton';
import Media from 'react-media';

export default function WeAreHere() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 834px)",
    medium: "(max-width: 833px)",
    small: "(max-width: 618px)",


  };

  return (

    <BackgroundImage rgba1="0,0,0" rgba2="0,0,0" opacity="0.27" img={Img}>

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {matches => (
          <React.Fragment>
            {matches.large &&

              <div className='WeAreHere-container' >
                <div className='OurCommunityHeader-title'>We are here, it<b className='normal'>'</b>s time<br /> for you to join TIJ.</div>

                <p className='OurCommunityHeader-paragraph'>It will take less than 10 minutes for you to submit your application <br /> for affiliation. The process will be completed in a time frame of 1<b className='normal'>-</b>2 weeks.<br /> Please note that only self<b className='normal'>-</b>employed individuals are eligible for affiliation <br /> with our network.</p>

                <div style={{ display: "flex", gap: 10 }}>
                  <WeAreHereButton title="Join Us" />
                  <WeAreHereButton title="Contact Us" arrowColor="#6E533D" style={{ backgroundColor: 'white', color: "#6E533D" }} />
                </div>
              </div>
            }
            {(matches.medium || matches.small) &&

              <div className='WeAreHere-container' style={{transform:matches.small? "scale(0.7)":"scale(1)"}}>
                <div className='OurCommunityHeader-title'>We are here, it<b className='normal'>'</b>s time for you to join TIJ.</div>

                <p className='OurCommunityHeader-paragraph'>It will take less than 10 minutes for you to submit your application <br /> for affiliation. The process will be completed in a time frame of 1<b className='normal'>-</b>2 weeks.<br /> Please note that only self<b className='normal'>-</b>employed individuals are eligible for affiliation <br /> with our network.</p>

                <div style={{ display: "flex", gap: 10 }}>
                  <WeAreHereButton title="Join Us" />
                  <WeAreHereButton title="Contact Us" arrowColor="#6E533D" style={{ backgroundColor: 'white', color: "#6E533D" }} />
                </div>
              </div>
            }
          </React.Fragment>
        )
        }
      </Media>


    </BackgroundImage>

  )
}
