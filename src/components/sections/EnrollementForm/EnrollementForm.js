import React from 'react'
import "./EnrollementForm.css"
import Grid from '@mui/material/Grid';
import FormRequestQuoteInput from '../../buttons/FormRequestQuoteInput/FormRequestQuoteInput';
import EnrollementAttachFiles from '../../EnrollementAttachFiles/EnrollementAttachFiles';
import Media from 'react-media';
export default function EnrollementForm() {
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 999px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1000px)"
  };
  return (
    <div className='flexalignjustify white-background'>
      <div className='flexalignjustify EnrollementForm-content' >
        <br /><br /><br />
        <div className='EnrollementForm-paragraph'>
          On average, it takes our services <b>2</b> to <b>4</b> weeks to process your application.
        </div>
        <div className='EnrollementForm-paragraph'>
          Additional requests may be sent to you via email. Once your application is approve
        </div>
        <div className='EnrollementForm-paragraph'>
          a repsresentative will contact you to provide you with further information
        </div>

        <b className='EnrollementForm-blackTitle'>Apply for affiliation</b>
        <b className='EnrollementForm-title'>Identity</b>
        <br />
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput borderRadius="10px" title="Full name" required /> <br />
            <FormRequestQuoteInput borderRadius="10px" title="Phone" required /><br />
            <FormRequestQuoteInput borderRadius="10px" title="City" required /><br />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput borderRadius="10px" title="Email" required /> <br />
            <FormRequestQuoteInput borderRadius="10px" title="Adress" required /><br />
            <FormRequestQuoteInput borderRadius="10px" title="Postal Code" required /><br />
          </Grid>
        </Grid>
        <b className='EnrollementForm-title' style={{ width: 120, textAlign: "center" }}>Expertise And Experience</b>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormRequestQuoteInput borderRadius="10px" title="Spoken Languages ( with priority )" required />

          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput borderRadius="10px" title="Diploma 1" required /> <br />
            <FormRequestQuoteInput borderRadius="10px" title="Experience 1" required /><br />

          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput borderRadius="10px" title="Diploma 2" required /> <br />
            <FormRequestQuoteInput borderRadius="10px" title="Experience 2" required /><br />

          </Grid>
        </Grid>
        <b className='EnrollementForm-title'>Attach Files</b>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {matches => (
            <React.Fragment>
              {matches.large &&
                <>

                  <div className='Enrollement-attach-files'>
                    <div>
                      <EnrollementAttachFiles title="Attestation insee or Kbis" />
                      <EnrollementAttachFiles title="Identity document" />
                    </div>
                    <div>
                      <EnrollementAttachFiles title="Criminal record extract" />
                      <EnrollementAttachFiles title="Professional Photo" />
                    </div>
                  </div>
                  <label >
          <input className='displaynone' type="file" multiple />
          <div className='EnrollementForm-multiple-files'> <b style={{ fontFamily: "sans-serif" }}>+</b> Add More Files </div>
        </label>
                </>


              }




              {matches.small &&
                <>

                  <div className='Enrollement-attach-files' style={{ flexDirection: "column", transform: "translateX(-30px)", gap: 0 }}>
                    <br />
                    <EnrollementAttachFiles title="Attestation insee or Kbis" />
                    <EnrollementAttachFiles title="Identity document" />
                    <EnrollementAttachFiles title="Criminal record extract" />
                    <EnrollementAttachFiles title="Professional Photo" />
                  </div>
                  <label >
          <input className='displaynone' type="file" multiple />
          <div className='EnrollementForm-multiple-files' style={{padding:"10px 40px 10px 40px",transform:"translateX(10px)"}}> <b style={{ fontFamily: "sans-serif" }}>+</b> <span>Add More Files</span> </div>
        </label>
                </>


              }




            </React.Fragment>
          )
          }
        </Media>

        
        <br />
        <br />
        <div className='EnrollementForm-submit'>
          <div className='EnrollementForm-submit-title'>
            Submit
          </div>
        </div>


        <br /><br /><br />
      </div>
    </div>
  )
}
