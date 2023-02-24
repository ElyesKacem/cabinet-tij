import React from 'react'
import "./UniqueOpportunity.css"
import OurCommunityMap from "../../../assets/images/OurCommunity/ourCommunityMap.png";

export default function UniqueOpportunity() {
    return (
        <div className='UniqueOpportunity-container'>
            <br /><br /><br /><br /><br />
            <div>
                <div className='grey-square' />
                <div className='UniqueOpportunity-blueTitle'>
                    A unique opportunity to develop your
                </div>
                <div className='UniqueOpportunity-blueTitle'>
                    activity serenely
                </div>
            </div>
            <br />
            <div className='UniqueOpportunity-paragraph'>Intertrad is looking to bring on board interpreters, translators and foreign language educators</div>
            <div className='UniqueOpportunity-paragraph'> and to provide them with the necessary support to excel in the language service field </div>
            <br /><br />
            <div className='UniqueOpportunity-blackTitle'>Reasons To Join Us</div>
            <br />
            <br />
            <img src={OurCommunityMap} style={{width:"80%"}} />
            <br /><br />
        </div>
    )
}
