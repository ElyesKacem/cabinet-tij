import React from "react";
import { FadeLeft, FadeRight, FadeUp } from "../assets/Animations/Fade";
import DoYouNeedMoreAssistance from "../components/sections/doYouNeedMoreAssistance/doYouNeedMoreAssistance";
import GetInTouchWithUs from "../components/sections/getInTouchWithUs/getInTouchWithUs";
import OurServices from "../components/sections/ourServices/ourServices";
import ProJoinOurTeam from "../components/sections/proJoinOurTeam/proJoinOurTeam";
import Services from "../components/sections/service/Services";
import VideoSection from "../components/sections/video/video";
import WhyChoiceUs from "../components/sections/whyChoiceUs/whyChoiceUs";

export default function Home() {
  return (
    <div id="home">
      <VideoSection />
      <FadeLeft>
        <Services />
      </FadeLeft>

      <FadeUp>
        <WhyChoiceUs />
      </FadeUp>
      <FadeRight>
        <DoYouNeedMoreAssistance />
      </FadeRight>
      <FadeLeft>
        <OurServices />
      </FadeLeft>
      <FadeRight>
        <GetInTouchWithUs />
      </FadeRight>

      <FadeLeft>
        <ProJoinOurTeam />
      </FadeLeft>
    </div>
  );
}
