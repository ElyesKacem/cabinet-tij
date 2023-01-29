import React from 'react'
import "./doYouNeedMoreAssistance.css"
import Grid from '@mui/material/Grid';
import Image from "../../../assets/images/Group 1582.svg"
import GetQuoteButton from '../../buttons/getQuoteButton/getQuoteButton';

export default function DoYouNeedMoreAssistance() {
  return (
    <div>
    <br />
    <br />
    <Grid container direction="row"
  justifyContent="center"
  alignItems="center" spacing={5}>

        <Grid item xs={3}>
            <img className='shortImage' src={Image}/>
        </Grid>
        <Grid item xs={6}>
        <p className='firstClass'>Do You Need More Assistance?</p>
        <p style={{fontWeight:"bold",
    fontSize:" 20px",color:'grey'}}>As per customer request, we can provide a suitable quote based on the nature of the document that needs to be translated. We offer the translation of different types of documents including technical and official ones. Our main goal is to provide our clients with all the help and assistance that they need, so feel free to contact us in order to receive a suitable quote.</p>
        </Grid>
        <Grid item xs={3}>
        
        <div className='RequestAQuoteButton'>
            Request a Quote
        </div>
        </Grid>

    </Grid>
    <br /><br /><br /><br />
    </div>
  )
}
