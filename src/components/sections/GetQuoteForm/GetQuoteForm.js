import React, { useState } from 'react'
import "./GetQuoteForm.css"
import Container from '@mui/material/Container';
import RequestQuoteButton from '../../buttons/RequestQuoteButton/RequestQuoteButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormRequestQuoteInput, { FormRequestQuoteInputMultiline } from '../../buttons/FormRequestQuoteInput/FormRequestQuoteInput';

export default function GetQuoteForm() {

  const [singleFile, setSingleFile] = useState(false);
  const [singleFileName, setSingleFileName] = useState(false);



  return (
    <div style={{ height: 1050 }}>
      <div className='getQuoteForm-overlay'></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='getQuoteForm-content'>
        <div style={{ width: "85%" }}>
          <div className="getQuoteForm-content-title">Request A Quote</div>
          <br />
          <div className='getQuoteForm-margin'>
            <Grid className='getQuoteForm-margin' container spacing={1}>
              <Grid item xs={3}><RequestQuoteButton title="Translation" /></Grid>
              <Grid item xs={3}><RequestQuoteButton title="Interepting" /></Grid>
              <Grid item xs={3}><RequestQuoteButton title="Transcription" /></Grid>
              <Grid item xs={3}><RequestQuoteButton title="VIP Services" /></Grid>
            </Grid>
          </div>
          <div className='getQuoteForm-margin white-text'>Required fields are marked with asterisk <i style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>(<b style={{ color: 'red' }}>*</b>)</i></div>
          <br />
          <br />
          <div>


            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Full Name " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput title="Company name " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="E mail " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Phone Number " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Source Language " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Target " />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className='getQuoteForm-hidden'>
                      <FormRequestQuoteInput required title="Languages " />
                      {/* <TextField required  id="filled-basic" label="Filled" variant="filled" fullWidth /> */}

                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInputMultiline multiline title="Notes " required></FormRequestQuoteInputMultiline>
                    {/* <TextField fullWidth id="filled-multiline-flexible" label="Multiline" multiline minRows={4} required variant="filled"/> */}
                  </Grid>
                  <Grid item xs={12} className="getQuoteForm-input-label">
                    <label className='getQuoteForm-input-file-label' htmlFor="requotefile"><input type="file" className='getQuoteForm-input-file' placeholder='Full Name' id="requotefile" onChange={(e) => {
                      let file = e.target.value;
                      setSingleFile(file);
                      const fileNameArray = file.split('\\')
                      setSingleFileName(fileNameArray[fileNameArray.length - 1]);
                    }} /> <span className='getQuoteForm-input-file-button'>Select a file</span> {
                        singleFileName ?
                          <>
                            <span>&nbsp;&nbsp;{singleFileName} </span>

                          </>
                          : <>
                            &nbsp;&nbsp;No file chosen
                          </>} </label>
                    {singleFile && <span style={{ color: "blue", cursor: "pointer" }} onClick={() => {
                      setSingleFile(null);
                      setSingleFileName(false);
                    }}> &nbsp;&nbsp; X </span>}
                  </Grid>
                  <Grid item xs={12} style={{marginTop:"6.5%"}}>
                    <label className='getQuoteForm-input-file-label' htmlFor="requoteMULTIPLEfile"><input type="file" className='getQuoteForm-input-file' placeholder='Full Name' id="requoteMULTIPLEfile" onChange={(e) => {
                      let file = e.target.value;
                      setSingleFile(file);
                      const fileNameArray = file.split('\\')
                      setSingleFileName(fileNameArray[fileNameArray.length - 1]);
                    }}  multiple/> <div className='getQuoteForm-input-multipleFile-button'><b style={{fontFamily:"sans-serif"}}>+ &nbsp;&nbsp;  </b> Add more files</div></label>
                    
                  </Grid>

                </Grid>

              </Grid>
            </Grid>


          </div>
        </div>
      </div>
    </div>
  )
}
