import React from 'react'
import "./ourServices.js"
import Container from '@mui/material/Container';
import HomePhotoHover from '../../homePhotoHover/homePhotoHover.js';
import Image1 from "../../../assets/images/hh0.png"
import Image2 from "../../../assets/images/hh1.png"
import Image3 from "../../../assets/images/hh2.png"
import Grid from '@mui/material/Grid';

export default function OurServices() {
  return (
    <div className='white-background'>
         <br />
    <br /> <br />
    <br />

    <Container>
    <div className='greyEmptyRectangle' style={{transform:'translateX(-40px)'}}/>
    <div className="greyRectangle">
              <b>
                Our Services
              </b>
            </div>
<br />
<br />
            <div className='firstClass'>We Offer Solutions For Clients Both Large And Small, From corporate, Government And Private Sectors</div>
            </Container>
            <div style={{margin:50}}>

            <Grid container spacing={7} direction="row"
  justifyContent="center"
  alignItems="center">
                <Grid item>

                    <HomePhotoHover img={Image1}/>
                </Grid>
                <Grid item>

                    <HomePhotoHover img={Image2}/>
                </Grid>
                <Grid item>

                    <HomePhotoHover img={Image3}/>
                </Grid>
                <Grid item>

                    <HomePhotoHover img={Image3}/>
                </Grid>
                <Grid item>

                    <HomePhotoHover img={Image1}/>
                </Grid>
            </Grid>
            </div>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{marginLeft:5,width:30,height:6,backgroundColor:'#e9e5e5',borderRadius:5}}/>
                <div style={{marginLeft:5,width:30,height:6,backgroundColor:'#e9e5e5',borderRadius:5}}/>
                <div style={{marginLeft:5,width:30,height:6,backgroundColor:'#858383',borderRadius:5}}/>
                <div style={{marginLeft:5,width:30,height:6,backgroundColor:'#e9e5e5',borderRadius:5}}/>
                <div style={{marginLeft:5,width:30,height:6,backgroundColor:'#e9e5e5',borderRadius:5}}/>
            </div>
            
            
            
            <br />
            <br />
            <br />
    </div>
  )
}
