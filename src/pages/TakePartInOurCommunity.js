import React from "react";
import { FadeUp } from "../assets/Animations/Fade";
import OurCommunityHeader from "../components/sections/OurCommunityHeader/OurCommunityHeader";
import UniqueOpportunity from "../components/sections/UniqueOpportunity/UniqueOpportunity";
import WeAreHere from "../components/sections/WeAreHere/WeAreHere";
import YouAreProficient from "../components/sections/YouAreProficient/YouAreProficient";

export default function TakePartInOurCommunity() {
  return (
    <div>
      <OurCommunityHeader />
      <FadeUp>
        <UniqueOpportunity />
      </FadeUp>
      <FadeUp>
        <YouAreProficient />
      </FadeUp>
      <WeAreHere />
    </div>
  );
}
