import React from 'react'
import "./footer.js"
import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
import CabinetTIJ from "../../../assets/images/logo.png"
import GoogleMaps from "../../../assets/images/googleMaps.png"
import LinkedIn from "../../../assets/images/LinkedIn.png"
import FooterText from '../../footerText/footerText.js';


export default function Footer() {
  return (
    <div>

<br /><br /><br /><br />
<Grid container spacing={10} direction="row"
  justifyContent="center"
  alignItems="flex-start">
                <Grid item xs={3} style={{display:"flex",flexDirection:"column",justifyItems:"center"}}>
<div>

                <img src={CabinetTIJ} style={{height:200}} />
                <br />
</div>
<div>

                <img src={GoogleMaps} style={{height:30}} />
                <img src={LinkedIn} style={{height:30}} />
</div>

                </Grid>
                <Grid item xs={3}>

                <FooterText title="About" content="We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial."/>
                <br /><br />
                <FooterText title="Support" content="Contact Us"/>
                </Grid>
                <Grid item xs={3}>

                    <FooterText title="Solutions" content="Contact Us"/>
                </Grid>
                <Grid item xs={3}>

                    
                    <FooterText title="Information" content="Contact Us"/>
                </Grid>
                
            </Grid>
    <div style={{height:40,color:'white',backgroundColor:"black"}}>


<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
{/* <div> Terms of use </div> <div>|</div> <div>All Codivyrights © are reserved 2022</div> */}
..
</div>

<div>

</div>
    </div>
    </div>
  )
}
