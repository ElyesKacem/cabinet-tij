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
                <div>
                    <div className="getQuoteForm-content-title">Request A Quote</div>
                    <br />
                <div className='getQuoteForm-margin'>
                <Grid className='getQuoteForm-margin' container spacing={2}>
                <Grid item xs={3}><RequestQuoteButton title="Translation" /></Grid>
                        <Grid item xs={3}><RequestQuoteButton title="Interepting" /></Grid>
                        <Grid item xs={3}><RequestQuoteButton title="Transcription" /></Grid>
                        <Grid item xs={3}><RequestQuoteButton title="VIP Services" /></Grid>
                </Grid>
                </div>
                <div className='getQuoteForm-margin white-text'>Required fields are marked with asterisk <i style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>(*)</i></div>
                <br />
                <br />
                <div>
                    <Grid container spacing={2.2}>
                            <Grid item xs={6}>
                               <Grid container spacing={2}>
                                <Grid item xs={12}>
                                     <input type="text" className='getQuoteForm-input' placeholder='Full Name' />
                                </Grid>
                                <Grid item xs={12}>
                                     <input type="text" className='getQuoteForm-input' placeholder='Full Name' />
                                </Grid>
                                <Grid item xs={12}>
                                     <input type="text" className='getQuoteForm-input' placeholder='Full Name' />
                                </Grid>
                               </Grid>
                            </Grid>
                            <Grid item xs={6}>
                               <Grid container spacing={2}>
                                <Grid item xs={12}>
                                     <input type="text" className='getQuoteForm-input' placeholder='Do you need Proofreading'/>
                                </Grid>
                                <Grid item xs={12}>
                                     <input type="text" className='getQuoteForm-input' placeholder='Do you need Proofreading'/>
                                </Grid>
                                <Grid item xs={12}>
                                     <input type="text" className='getQuoteForm-input' placeholder='Do you need Proofreading'/>
                                </Grid>
                               </Grid>
                                
                            </Grid>
                    </Grid>
                    <div>
                        coco
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
