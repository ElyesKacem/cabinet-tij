import React from 'react'
import "./GetQuoteForm.css"
import Container from '@mui/material/Container';
import RequestQuoteButton from '../../buttons/RequestQuoteButton/RequestQuoteButton';
import Grid from '@mui/material/Grid';


export default function GetQuoteForm() {
    return (
        <div style={{ height: 1050 }}>
            <div className='getQuoteForm-overlay'></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='getQuoteForm-content'>
                <div className='getQuoteForm-content-flex'>

                    <div className="getQuoteForm-content-title">
                        Request A Quote
                    </div>
                    <div className="getQuoteForm-content-nav">
                        <RequestQuoteButton title="Translation" />
                        <RequestQuoteButton title="Transcription" />
                        <RequestQuoteButton title="Interepting" />
                        <RequestQuoteButton title="VIP Services" />
                    </div>
                </div>
                <br />
                <div style={{ display: "flex", justifyContent: "start" }}>
                    Required fields are marked with asterisk <i style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>(*)</i>
                </div>
                <br />
                <br />
                <div className='getQuoteForm-content-flex'>

                   
                   <Grid container direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={10}
  >

                    <Grid item xs={6}>
                        <input type="text" style={{width:"100%"}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <input type="text" style={{width:"100%"}}/>
                    </Grid>

                   </Grid>
                </div>
                <br />
            </div>
        </div>
    )
}
