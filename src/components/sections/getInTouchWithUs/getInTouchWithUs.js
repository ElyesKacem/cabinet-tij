import React from 'react'
import "./getInTouchWithUs.css"
import Grid from '@mui/material/Grid';
import EastIcon from '@mui/icons-material/East';
export default function GetInTouchWithUs() {
  return (
    <div className='getInTouchWithUs'>
        <br />
        <br />
        <br />
        <br />


        <div className='getInTouchWithUsFrom'>

            <div className='getInTouchWithUsFrom-title'>Get in Touch With Us</div>
            <br />
            <br />
            
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <input required type="text" placeholder='Your Name' className='getInTouchWithUsFrom-input'/>

                </Grid>
                <Grid item xs={6}>
                    <input type="text" placeholder='Company' className='getInTouchWithUsFrom-input'/>

                </Grid>
                <Grid item xs={6}>
                    <input type="text" placeholder='Your Email' className='getInTouchWithUsFrom-input'/>

                </Grid>
                <Grid item xs={6}>
                    <input type="text" placeholder='Subject ' className='getInTouchWithUsFrom-input'/>

                </Grid>
                <Grid item xs={12}>
                    <textarea  placeholder='Your Subject' className='getInTouchWithUsFrom-input'/>

                </Grid>
               
                    

                

            </Grid>
            <br />
            <br />
           
                                    <div  className='getInTouchWithUsFrom-button'>
                                    <div>
                                        Submit
                                    </div>
                                    <div style={{marginLeft:20}}>
                                        <EastIcon />
                                    </div>
                                    </div>




        </div>


        <br />
        <br />
        <br />
        <br />
    </div>
  )
}
