import React from 'react'
import "./TalkToUsNowSection.css"
import Grid from '@mui/material/Grid';


export default function TalkToUsNowSection() {
    return (
        <div className='TalkToUsNowSection-background'>
            <br /><br /><br /><br /><br />
            <div>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={6}>
                        <div style={{ width: "90%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div className=''>
                                <div className='TalkToUsNowSection-title'>
                                    Talk to us now
                                </div>
                                <div className='TalkToUsNowSection-paragraph'>
                                    For further information, please contact us at contact<i className='thin'>@</i>cabinet<i className='thin'>-</i>tij.com or use the provided form. If you are a professional in translation or interpreting and wish to become part of our distinguished group of talents, kindly complete our Online <b style={{ color: "#7B264B" }}>Application Form</b>
                                </div>

                            </div>
                            <div className='flexalignjustify'>
                                Submit
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        Image
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
