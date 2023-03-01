import React from 'react'
import "./Services.css"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from "../../../assets/images/Illustration.svg"
import Pause from "../../../assets/images/pause.png"
import Play from "../../../assets/images/play.png"


export default function Services() {
  return (
    <div className='services'>
      <br /><br /><br /><br /><br />
      <Container>
        <div className='greyEmptyRectangle' />
        <Grid container spacing={15}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} md={6} lg={6}>
            <div className='translateRight40'>


              <div className="greyRectangle">
                <b>
                  WHO WE ARE
                </b>
              </div>

              <p className='firstClass' style={{ transform: 'translateX(20px)' }}>Cabinet Tij For Translation And Interpreting</p>

              <p className='secondClass'>We are specialized in the field of technical, administrative and judicial translation and interpreting.</p>
              <p className='thirdClass'>Thanks to our wide network of qualified professionals and strategic partners, we respond quickly and efficiently to the requests of our clients.</p>

              <div>
                <div>

                </div>
                <div className='miniButtonClass'>
                  <div style={{position:"relative"}}>
                    <img src={Pause} style={{width:80}} />
                    <img src={Play} style={{width:80}} className="servicesPauseButton"/>
                  </div>
                  <div>
                    Our services
                  </div>
                </div>
              </div>
            </div>




          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <img className='ServicesleftImage' src={Image} />
          </Grid>
        </Grid>
      </Container>
      <br /><br /><br /><br /><br /><br />
    </div>
  )
}
