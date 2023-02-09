import React, { useState } from 'react'
import "./GetQuoteForm.css"
import Container from '@mui/material/Container';
import RequestQuoteButton from '../../buttons/RequestQuoteButton/RequestQuoteButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormRequestQuoteInput, { FormRequestQuoteInputMultiline } from '../../buttons/FormRequestQuoteInput/FormRequestQuoteInput';
import whiteTranslation from "../../../assets/images/request a quote icons/whiteTranslation.svg"
import whiteInterpreting from "../../../assets/images/request a quote icons/whiteInterpreting.svg"
import whiteTranscription from "../../../assets/images/request a quote icons/whiteTranscription.svg"
import whiteVIP from "../../../assets/images/request a quote icons/whiteVIP.svg"
import blueTranslation from "../../../assets/images/request a quote icons/blueTranslation.svg"
import blueInterpreting from "../../../assets/images/request a quote icons/blueInterpreting.svg"
import blueTranscription from "../../../assets/images/request a quote icons/blueTranscription.svg"
import blueVIP from "../../../assets/images/request a quote icons/blueVIP.svg"
export default function GetQuoteForm() {

  const [singleFile, setSingleFile] = useState(false);
  const [singleFileName, setSingleFileName] = useState(false);
  const [menuSelected, setMenuSelected] = useState([true,false,false,false]);

  const menuData=[
    {
      title:"Translation",
      whiteIcon:whiteTranslation,
      blueIcon:blueTranslation,
    },
    {
      title:"Interpreting",
      whiteIcon:whiteInterpreting,
      blueIcon:blueInterpreting,
    },
    {
      title:"Transcription",
      whiteIcon:whiteTranscription,
      blueIcon:blueTranscription,
    },
    {
      title:"VIP Services",
      whiteIcon:whiteVIP,
      blueIcon:blueVIP,
    },
  ]


  return (
    <div style={{ height: 1050 }}>
      <div className='getQuoteForm-overlay'></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='getQuoteForm-content'>
        <div style={{ width: "85%",maxWidth: 1300 }}>
          <div className="getQuoteForm-content-title">Request A Quote</div>
          <br />
          <div className='getQuoteForm-margin'>
            <Grid className='getQuoteForm-margin' container spacing={1}>
              {menuData.map((element,index)=>
              <Grid key={index} item xs={3}><RequestQuoteButton setMenuSelected={setMenuSelected} icon={menuSelected[index]?element.whiteIcon:element.blueIcon} blue={menuSelected[index]} id={index} title={element.title} /></Grid>
            )}
             
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
                  <div className='getQuoteForm-hidden getQuoteForm-animation' >
                      
                      <div style={{transform:"translateY(-52px)"}}>
                        
                        <FormRequestQuoteInput className={menuSelected[1]||menuSelected[3]?"getQuoteForm-animation translateYdown52":"getQuoteForm-animation"} style={{position:"relative",zIndex:"3"}} required title="Location "  />
                        <FormRequestQuoteInput required title="Source Language " style={{marginTop:1}} />
                        
                      </div>
                      
                      {/* <TextField required  id="filled-basic" label="Filled" variant="filled" fullWidth /> */}

                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Target Language " />
                  </Grid>
                </Grid>
              </Grid>




              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="getQuoteForm-hidden getQuoteForm-animation">
                      <div className={menuSelected[1]||menuSelected[3]?'translateYdown getQuoteForm-animation':menuSelected[2]?"translateYup70 getQuoteForm-animation":"getQuoteForm-animation"}>
                      <div style={{transform:"translateY(-67px)"}}>
                      <FormRequestQuoteInput title="Date "  />
                      <FormRequestQuoteInput required title="Languages " style={{marginTop:86}} />
                      </div>
                      </div>
                      {/* <TextField required  id="filled-basic" label="Filled" variant="filled" fullWidth /> */}

                    </div>
                  </Grid>
                  <Grid item xs={12} className={menuSelected[0]?"getQuoteForm-animation translateYup":"getQuoteForm-animation"} >
                    <FormRequestQuoteInputMultiline  multiline title="Notes " required></FormRequestQuoteInputMultiline>
                    {/* <TextField fullWidth id="filled-multiline-flexible" label="Multiline" multiline minRows={4} required variant="filled"/> */}
                  </Grid>
                  <Grid item xs={12} className={menuSelected[0]?"getQuoteForm-animation getQuoteForm-input-label translateYup52":"getQuoteForm-animation getQuoteForm-input-label"}  >
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
                  <Grid item xs={12} className={menuSelected[0]?"getQuoteForm-animation translateYup":"getQuoteForm-animation"}  style={{marginTop:42}}>
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
