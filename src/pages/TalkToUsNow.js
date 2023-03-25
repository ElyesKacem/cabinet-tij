import React from "react";
import TalkToUsNowSection from "../components/sections/TalkToUsNowSection/TalkToUsNowSection";
import DoYouNeedMoreAssistance from "../components/sections/doYouNeedMoreAssistance/doYouNeedMoreAssistance";
import { FadeUp } from "../assets/Animations/Fade";

export default function TalkToUsNow() {
  return (
    <div id="contact">
      <TalkToUsNowSection />
      <FadeUp>
        <DoYouNeedMoreAssistance style={{ backgroundColor: "white" }} />
      </FadeUp>
    </div>
  );
}
