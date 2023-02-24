import React from 'react'
import "./OurCommunityHeader.css"
import Grid from '@mui/material/Grid';
import DownArrow from "../../../assets/images/DownArrow.png"
import HoverImage from '../../HoverImage/HoverImage';
import Image1 from "../../../assets/images/OurCommunity/ourCommunityHeader.png"
import ActivityButton from "../../../assets/images/OurCommunity/Activity.png"
import FlexibleButton from "../../../assets/images/OurCommunity/Flexible.png"
import IncomeButton from "../../../assets/images/OurCommunity/Income.png"
import SupportButton from "../../../assets/images/OurCommunity/Support.png"


export default function OurCommunityHeader() {
    return (
        <div className='TalkToUsNowSection-background'>
            <br /><br /><br /><br /><br /><br /><br />
            <div className='OurCommunityHeader-container'>
                <Grid container  >
                    <Grid item xs={6}>
                        <div className='OurCommunityHeader-title'>Take part in our</div>
                        <div className='OurCommunityHeader-title blue'>Community</div>
                        <br />
                        <div className='OurCommunityHeader-paragraph'>
                            TIJ is always on the lookout for multilingual individuals who are passionate about language to become a part of our national translator and interpreter network. We help these talented individuals to advance their careers in the field of language solutions.
                        </div>
                        <br />
                        <br />
                        <img src={DownArrow} className="EnrollementImage-Arrow" style={{ height: 60, width: "auto", marginLeft: "40%" }} />
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ width: 650 }}>
                            <HoverImage img={Image1} />
                            <img src={ActivityButton} className="EnrollementImage-flyButton EnrollementImage-tl" />
                            <img src={IncomeButton} className="EnrollementImage-flyButton EnrollementImage-bl" />
                            <img src={FlexibleButton} className="EnrollementImage-flyButton EnrollementImage-tr" />
                            <img src={SupportButton} className="EnrollementImage-flyButton EnrollementImage-br" />

                        </div>
                    </Grid>
                </Grid>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
