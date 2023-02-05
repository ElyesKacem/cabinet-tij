import React from 'react'
import "./DoYouStillNeedHelp.css"
import Grid from '@mui/material/Grid';
import Image from "../../../assets/images/Group 1582.svg"
import GetQuoteButton from '../../buttons/getQuoteButton/getQuoteButton';

export default function DoYouStillNeedHelp() {
  return (
    <div style={{backgroundColor:'white'}}>
    <br />
    <br />
    <Grid container direction="row"
  justifyContent="center"
  alignItems="center" spacing={5}>

        <Grid item xs={12} md={3}>
            <img className='shortImage' src={Image}/>
        </Grid>
        <Grid item xs={12} md={6}>
        <div className='firstClass'>Do You Still Need Help?</div>
        <p style={{fontWeight:"bold",
    fontSize:" 20px",color:'grey',width:550}}>Contact us directly and we will answer your questions and requests .</p>
        </Grid>
        <Grid item xs={12} md={3}>
        
        <div className='RequestAQuoteButton'>
            Contact Us
        </div>
        </Grid>

    </Grid>
    <br /><br /><br /><br />
    </div>
  )
}
