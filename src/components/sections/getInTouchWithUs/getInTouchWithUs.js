import React from 'react'
import "./getInTouchWithUs.css"
import Grid from '@mui/material/Grid';
import EastIcon from '@mui/icons-material/East';
import Media from 'react-media';
import LeftRightButton from '../../buttons/leftRightButton/leftRightButton';
export default function GetInTouchWithUs() {
    const GLOBAL_MEDIA_QUERIES = {
        large: "(min-width: 700px)",
        medium: "(max-width: 700px)",
        small: "(max-width: 600px)",
    };
    return (<Media queries={GLOBAL_MEDIA_QUERIES}>
        {matches => (
            <React.Fragment>
                {matches.large &&
                    <div className='getInTouchWithUs'>
                        <br /><br /><br /><br />
                        <div className='getInTouchWithUsFrom'>
                            <div className='getInTouchWithUsFrom-title'>Get in Touch With Us</div>
                            <br /><br />
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                    <input required type="text" placeholder='Your Name *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input type="text" placeholder='Company *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input type="text" placeholder='Your Email *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input type="text" placeholder='Subject *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <textarea placeholder='Your Subject  *' style={{ width: "99%", resize: "none" }} className='getInTouchWithUsFrom-input' />
                                </Grid>
                            </Grid>
                            <br />
                            <br />

                            <LeftRightButton isWhite title="Submit" />

                            {/* <div className='getInTouchWithUsFrom-button'>
                                <div style={{transform:"translate(-0.5px,3.5px)",display:"flex",cursor:"pointer"}}>

                                    <div>
                                        Submit
                                    </div>
                                    <div style={{ marginLeft: 20 }}>
                                        <EastIcon />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <br /><br /><br /><br />
                    </div>
                }
                {(matches.medium || matches.small) &&
                    <div className='getInTouchWithUs' style={{ padding:25 }}>
                        <br /><br /><br /><br />
                        <div className='getInTouchWithUsFrom' style={{ width: "auto", padding: matches.small ? "36px 50px 44px 26px" : "60px 125px 60px 100px" }}>
                            <div className='getInTouchWithUsFrom-title'>Get in Touch With Us</div>
                            <br /><br />
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <input required type="text" placeholder='Your Name *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12}>
                                    <input type="text" placeholder='Company *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12}>
                                    <input type="text" placeholder='Your Email *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12}>
                                    <input type="text" placeholder='Subject *' className='getInTouchWithUsFrom-input' />
                                </Grid>
                                <Grid item xs={12}>
                                    <textarea placeholder='Your Subject  *' style={{ width: "99%", resize: "none" }} className='getInTouchWithUsFrom-input' />
                                </Grid>
                            </Grid>
                            <br />
                            <br />

                            <LeftRightButton isWhite title="Submit" />

                            {/* <div className='getInTouchWithUsFrom-button'>
                                <div>
                                    Submit
                                </div>
                                <div style={{ marginLeft: 20 }}>
                                    <EastIcon />
                                </div>
                            </div> */}
                        </div>
                        <br /><br /><br /><br />
                    </div>
                }
            </React.Fragment>
        )
        }
    </Media>


    )
}
