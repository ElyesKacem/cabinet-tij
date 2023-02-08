import React from 'react'
import "./GetQuoteForm.css"
import Container from '@mui/material/Container';
import RequestQuoteButton from '../../buttons/RequestQuoteButton/RequestQuoteButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function GetQuoteForm() {
    const theme = createTheme({
      overrides: {
        MuiOutlinedInput: {
          input: {
            color: "purple",
          },
        },
        MuiInputLabel: {
          input: {
            color: "purple",
          },
        },
      },
      typography: {
        fontFamily:"commuterssans-thin",
      },components: {
          MuiFormLabel: {
            styleOverrides: {
              asterisk: {
                color: "#db3131",
                fontFamily:"none",
                "&$error": {
                  color: "#db3131",
                  fontFamily:"none",
                },
              },
            },
          }, 
          // MuiButton: {
          //   styleOverrides: {
          //     // Name of the slot
          //     root: {
          //       // Some CSS
          //       fontSize: '1rem',
          //     },
          //   },
          // },
          
        },
      });

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
                <ThemeProvider theme={theme}>
                                   
                    <Grid container spacing={2.2}>
                            <Grid item xs={6}>
                               <Grid container spacing={2}>
                                <Grid item xs={12}>
                                     {/* <input type="text" className='getQuoteForm-input' placeholder='Full Name' /> */}
                                    
                                     <TextField  style={{ "& .MuiInputLabel": { color: "red" } }} required  id="filled-basic" label="Filled" variant="filled" fullWidth  
        //                              sx={{
        //   input: {
        //     color: "red",
        //     background: "green"
        //   }
        // }}
        />
                                </Grid>
                                <Grid item xs={12}>
                                     {/* <input type="text" className='getQuoteForm-input' placeholder='Full Name' /> */}
                                     <TextField required  id="filled-basic" label="Filled" variant="filled" fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                     {/* <input type="text" className='getQuoteForm-input' placeholder='Full Name' /> */}
                                     <TextField required  id="filled-basic" label="Filled" variant="filled" fullWidth />
                                </Grid>
                               </Grid>
                            </Grid>
                            <Grid item xs={6}>
                               <Grid container spacing={2}>
                                <Grid item xs={12}>
                                     <div className='getQuoteForm-hidden'>
                                     {/* <input type="text" className='getQuoteForm-input' placeholder='Do you need Proofreading'/> */}
                                     <TextField required  id="filled-basic" label="Filled" variant="filled" fullWidth />

                                     </div>
                                </Grid>
                                <Grid item xs={12}>
                                     {/* <input type="text" className='getQuoteForm-input' placeholder='Do you need Proofreading'/> */}
                                     <TextField fullWidth id="filled-multiline-flexible" label="Multiline" multiline minRows={4} required variant="filled"/>
                                </Grid>
                                
                               </Grid>
                                
                            </Grid>
                    </Grid>
                    </ThemeProvider>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
