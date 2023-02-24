import React from 'react'
import TalkToUsNowSection from '../components/sections/TalkToUsNowSection/TalkToUsNowSection';
import DoYouNeedMoreAssistance from '../components/sections/doYouNeedMoreAssistance/doYouNeedMoreAssistance';

export default function TalkToUsNow() {
    return (
        <div>
            <TalkToUsNowSection/>
            <DoYouNeedMoreAssistance style={{backgroundColor:"white"}}/>
        </div>
    )
}
