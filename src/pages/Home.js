import React from 'react'
import DoYouNeedMoreAssistance from '../components/sections/doYouNeedMoreAssistance/doYouNeedMoreAssistance'
import Footer from '../components/sections/footer/footer'
import GetInTouchWithUs from '../components/sections/getInTouchWithUs/getInTouchWithUs'
import OurServices from '../components/sections/ourServices/ourServices'
import ProJoinOurTeam from '../components/sections/proJoinOurTeam/proJoinOurTeam'
import Services from '../components/sections/service/Services'
import VideoSection from '../components/sections/video/video'
import WhyChoiceUs from '../components/sections/whyChoiceUs/whyChoiceUs'


export default function Home() {
  return (
    <div>
      

      <VideoSection />
      <Services />
      <WhyChoiceUs />
      <DoYouNeedMoreAssistance />
      <OurServices/>
      <GetInTouchWithUs />
      <ProJoinOurTeam />
      <Footer />
    </div>
  )
}
