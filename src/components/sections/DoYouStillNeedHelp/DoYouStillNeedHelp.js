import React from 'react'
import "./DoYouStillNeedHelp.css"
import Grid from '@mui/material/Grid';
import Image from "../../../assets/images/Group 1582.svg"
import GetQuoteButton from '../../buttons/getQuoteButton/getQuoteButton';
import Media from 'react-media';

export default function DoYouStillNeedHelp() {

  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 1020px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1020px)"
  };
  return (
    <div style={{backgroundColor:'white'}}>
    <br />
    <br />

    <Media queries={GLOBAL_MEDIA_QUERIES}>
        {matches => (
          <React.Fragment>
            {matches.small && <div>
    <Grid container direction="column"
  justifyContent="center"
  alignItems="center" spacing={5}>

        <Grid item xs={3}>
            <img className='shortImage' src={Image}/>
        </Grid>
        <Grid item xs={6}>
          <div style={{textAlign:"center"}}>

        <div className='firstClass'>Do You Still Need Help?</div>
        <p style={{fontWeight:"bold",
    fontSize:" 20px",color:'grey',width:550}}>Contact us directly and we will answer your questions and requests .</p>
          </div>
        </Grid>
        <Grid item xs={3}>
        
        <div className='RequestAQuoteButton'>
            Contact Us
        </div>
        </Grid>

    </Grid>
              </div>}
            {matches.large && <div>


    <Grid container direction="row"
  justifyContent="center"
  alignItems="center" spacing={5}>

        <Grid item xs={3}>
            <img className='shortImage' src={Image}/>
        </Grid>
        <Grid item xs={6}>
        <div className='firstClass'>Do You Still Need Help?</div>
        <p style={{fontWeight:"bold",
    fontSize:" 20px",color:'grey',width:550}}>Contact us directly and we will answer your questions and requests .</p>
        </Grid>
        <Grid item xs={3}>
        
        <div className='RequestAQuoteButton'>
            Contact Us
        </div>
        </Grid>

    </Grid>
              </div>}
              </React.Fragment>
        )
            }
            </Media>
    <br /><br /><br /><br />
    </div>
  )
}
