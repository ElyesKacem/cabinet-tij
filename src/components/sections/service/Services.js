import React from 'react'
import "./Services.css"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from "../../../assets/images/Illustration.svg"

export default function Services() {
  return (
    <div className='services'>
      <br /><br /><br /><br /><br />
      <Container>
        <div className='greyEmptyRectangle'/>
        <Grid container spacing={15}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <div className='translateRight40'>

            
            <div className="greyRectangle">
              <b>
                WHO WE ARE
              </b>
            </div>

            <p className='firstClass'>Cabinet Tij For Translation And Interpreting</p>

            <p className='secondClass'>We are specialized in the field of technical, administrative and judicial translation and interpreting.</p>
            <p className='thirdClass'>Thanks to our wide network of qualified professionals and strategic partners, we respond quickly and efficiently to the requests of our clients.</p>

            <div>
              <div>

              </div>
              <div className='miniButtonClass'>
                Our services
              </div>
            </div>
            </div>



          </Grid>
          <Grid item xs={6}>
            <img src={Image} />
          </Grid>
        </Grid>
      </Container>
      <br /><br /><br /><br /><br /><br />
    </div>
  )
}
