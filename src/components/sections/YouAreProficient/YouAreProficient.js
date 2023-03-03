import React from 'react'
import "./YouAreProficient.css"
import Grid from '@mui/material/Grid';
import Zoomed from "../../../assets/images/OurCommunity/zoomed.png";
import Idea from "../../../assets/images/OurCommunity/idea.svg";

export default function YouAreProficient() {
    return (
        <div className='white-background'>
            <br /><br /><br /><br /><br /><br />
            <div className='YouAreProficient-container' style={{transform:"translateX(-40px)"}}>
                <br /><br /><br />

                <div className='YouAreProficient-zoom'>
                    <img src={Zoomed} style={{ width: 600 }} alt="" />
                </div>

                <div className='YouAreProficient-blueBakcground'>
                    <img src={Idea} style={{height:70}} />

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
                    <div  className='YouAreProficient-blueButton'>
                    Become a member
                    </div>
                </div>

                
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
