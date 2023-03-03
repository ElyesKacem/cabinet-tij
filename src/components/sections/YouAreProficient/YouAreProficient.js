import React from 'react'
import "./YouAreProficient.css"
import Grid from '@mui/material/Grid';
import Zoomed from "../../../assets/images/OurCommunity/zoomed.png";
import Idea from "../../../assets/images/OurCommunity/idea.svg";
import Media from 'react-media';

export default function YouAreProficient() {
    const GLOBAL_MEDIA_QUERIES = {
        large: "(min-width: 1000px)",
        medium: "(max-width: 999px) and (min-width: 681px)",
        small: "(max-width: 680px) and (min-width: 494px)",
        verySmall: "(max-width: 494px)"
    };
    return (
        <div className='white-background'>


            <Media queries={GLOBAL_MEDIA_QUERIES}>
                {matches => (
                    <React.Fragment>
                        {
                            matches.large &&

                            <>
                                <br /><br /><br /><br /><br /><br />
                                <div className='YouAreProficient-container' style={{ transform: "translateX(-40px)" }}>
                                    <br /><br /><br />

                                    <div className='YouAreProficient-zoom'>
                                        <img src={Zoomed} style={{ width: 600 }} alt="" />
                                    </div>

                                    <div className='YouAreProficient-blueBakcground'>
                                        <img src={Idea} style={{ height: 70 }} />

                                        <div className='YouAreProficient-h1'>
                                            You are proficient in both a foreign language and French.
                                        </div>
                                        <br />
                                        <div className='YouAreProficient-p'>
                                            You align with our ethical principles ? you are independent ? you possess a strong moral compass and professional integrity ? you value confidentiality and objectivity highly ? you have a business mindset or are seeking an additional income ? and you are interested in making a career out of your language skills ?
                                        </div>
                                        <br />

                                        <div className='YouAreProficient-h2'>
                                            If so, we would be very happy for you to be a part of our adventure.
                                        </div>
                                        <br />
                                        <div className='YouAreProficient-blueButton'>
                                            Become a member
                                        </div>
                                    </div>

                                </div>
                                <br /><br /><br /><br /><br /><br />
                            </>
                        }
                        {
                            matches.medium &&

                            <>
                                <br /><br /><br /><br /><br /><br />
                                <div className='YouAreProficient-container' style={{ flexDirection: "column", gap: 30 }}>


                                    <div className='YouAreProficient-blueBakcground'>
                                        <img src={Idea} style={{ height: 70 }} />

                                        <div className='YouAreProficient-h1'>
                                            You are proficient in both a foreign language and French.
                                        </div>
                                        <br />
                                        <div className='YouAreProficient-p'>
                                            You align with our ethical principles ? you are independent ? you possess a strong moral compass and professional integrity ? you value confidentiality and objectivity highly ? you have a business mindset or are seeking an additional income ? and you are interested in making a career out of your language skills ?
                                        </div>
                                        <br />

                                        <div className='YouAreProficient-h2'>
                                            If so, we would be very happy for you to be a part of our adventure.
                                        </div>
                                        <br />
                                        <div className='YouAreProficient-blueButton'>
                                            Become a member
                                        </div>
                                    </div>
                                    <div className='YouAreProficient-zoom' style={{ transform: "translate(0px)" }}>
                                        <img src={Zoomed} style={{ width: 600 }} alt="" />
                                    </div>


                                </div>
                                <br /><br /><br /><br /><br /><br />
                            </>
                        }
                        {
                            (matches.small) &&

                            <>
                                <br /><br /><br /><br /><br /><br />
                                <div className='YouAreProficient-container' style={{ flexDirection: "column", gap: 30, transform: "scale(0.7)" }}>


                                    <div className='YouAreProficient-blueBakcground'>
                                        <img src={Idea} style={{ height: 70 }} />

                                        <div className='YouAreProficient-h1'>
                                            You are proficient in both a foreign language and French.
                                        </div>
                                        <br />
                                        <div className='YouAreProficient-p'>
                                            You align with our ethical principles ? you are independent ? you possess a strong moral compass and professional integrity ? you value confidentiality and objectivity highly ? you have a business mindset or are seeking an additional income ? and you are interested in making a career out of your language skills ?
                                        </div>
                                        <br />

                                        <div className='YouAreProficient-h2'>
                                            If so, we would be very happy for you to be a part of our adventure.
                                        </div>
                                        <br />
                                        <div className='YouAreProficient-blueButton'>
                                            Become a member
                                        </div>
                                    </div>
                                    <div className='YouAreProficient-zoom' style={{ transform: "translate(0px)" }}>
                                        <img src={Zoomed} style={{ width: 600 }} alt="" />
                                    </div>


                                </div>
                                <br /><br /><br /><br /><br /><br />
                            </>
                        }
                        {
                            (matches.verySmall) &&

                            <div className='YouAreProficient-container' style={{ flexDirection: "column", gap: 30, transform: "scale(0.7)" ,marginLeft:"5%"}}>



                                <div className='YouAreProficient-blueBakcground' style={{ padding: "30px 35px 30px 45px", alignItems: "center", justifyContent: "center" ,width:350}}>
                                    <img src={Idea} style={{ height: 70 }} />

                                    <div className='YouAreProficient-h1'>
                                        You are proficient in both a foreign language and French.
                                    </div>
                                    <br />
                                    <div className='YouAreProficient-p'>
                                        You align with our ethical principles ? you are independent ? you possess a strong moral compass and professional integrity ? you value confidentiality and objectivity highly ? you have a business mindset or are seeking an additional income ? and you are interested in making a career out of your language skills ?
                                    </div>
                                    <br />

                                    <div className='YouAreProficient-h2'>
                                        If so, we would be very happy for you to be a part of our adventure.
                                    </div>
                                    <br />
                                    <div className='YouAreProficient-blueButton'>
                                        Become a member
                                    </div>
                                </div>
                                <div className='YouAreProficient-zoom' style={{ transform: "translate(0px)", display: "flex", justifyContent: "center", alignItems: "center" ,width:"100%"}}>
                                    <img src={Zoomed} style={{width:"100%"}}  alt="" />
                                </div>



                            </div>
                        }
                    </React.Fragment>
                )
                }

            </Media>



        </div>
    )
}
