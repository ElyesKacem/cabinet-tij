import React, { useState } from 'react'
import "./ourServices.js"
import Container from '@mui/material/Container';
import HomePhotoHover from '../../homePhotoHover/homePhotoHover.js';
import Image1 from "../../../assets/images/hh0.png"
import Image2 from "../../../assets/images/hh1.png"
import Image3 from "../../../assets/images/hh2.png"
import Grid from '@mui/material/Grid';
import Media from 'react-media';

export default function OurServices() {
  const [isHover, setIsHover] = useState([false, false, false, false, false]);
  const data = [
    {
      id: 0,
      img: Image1,
      title: "Interpreting",
      paragraph: "Learn More"
    },
    {
      id: 1,
      img: Image2,
      title: "Business",
      paragraph: "Learn More"
    },
    {
      id: 2,
      img: Image3,
      title: "Certified Translation",
      paragraph: "Learn More"
    },
    {
      id: 3,
      img: Image3,
      title: "Sworn Translation",
      paragraph: "Learn More"
    },
    {
      id: 4,
      img: Image1,
      title: "Personal Services",
      paragraph: "Learn More"
    }
  ]
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1229px)",
    medium: "(max-width: 1229px)"
  };
  return (
    <div className='white-background'>
      <br /><br /> <br /><br />



      <Container>
        <div style={{ padding: "0px 50px 0px 55px" }}>
          <div className='greyEmptyRectangle' style={{ transform: 'translateX(-40px)' }} />

          <div className="greyRectangle">
            <b style={{ fontSize: 25 }}>
              Our Services
            </b>
          </div>
          <br />
          <br />
          <div className='firstClass'>We Offer Solutions For Clients Both Large And Small, From corporate, Government And Private Sectors</div>
        </div>
      </Container>
      <div>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {matches => (
            <React.Fragment>
              {matches.large &&
                <>
                  <div style={{ margin: 50 }}>




                    <Grid container spacing={4} direction="row"
                      justifyContent="center"
                      alignItems="center">

                      {
                        data.map((element) =>
                          <Grid key={element.id} item>

                            <HomePhotoHover setIsHover={setIsHover} id={element.id} img={element.img} title={element.title} paragraph={element.paragraph} />
                          </Grid>)
                      }

                    </Grid>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginLeft: 5, width: 30, height: 6, backgroundColor: isHover[0] ? '#858383' : "#e9e5e5", borderRadius: 5 }} />
                    <div style={{ marginLeft: 5, width: 30, height: 6, backgroundColor: isHover[1] ? '#858383' : "#e9e5e5", borderRadius: 5 }} />
                    <div style={{ marginLeft: 5, width: 30, height: 6, backgroundColor: isHover[2] ? '#858383' : "#e9e5e5", borderRadius: 5 }} />
                    <div style={{ marginLeft: 5, width: 30, height: 6, backgroundColor: isHover[3] ? '#858383' : "#e9e5e5", borderRadius: 5 }} />
                    <div style={{ marginLeft: 5, width: 30, height: 6, backgroundColor: isHover[4] ? '#858383' : "#e9e5e5", borderRadius: 5 }} />
                  </div>

                </>
              }
              {matches.medium &&
                <>
                  <div style={{ margin: 50 }}>

                    <Grid container spacing={4} direction="column"
                      justifyContent="center"
                      alignItems="center">

                      {
                        data.map((element) =>
                          <Grid key={element.id} item>

                            <HomePhotoHover setIsHover={setIsHover} id={element.id} img={element.img} title={element.title} paragraph={element.paragraph} />
                          </Grid>)
                      }

                    </Grid>
                  </div>

                </>
              }
            </React.Fragment>
          )
          }
        </Media>

      </div>





      <br />
      <br />
      <br />
    </div>
  )
}
