import React from "react";
import { FadeUp } from "../assets/Animations/Fade";
import DoYouStillNeedHelp from "../components/sections/DoYouStillNeedHelp/DoYouStillNeedHelp";
import GetQuoteForm from "../components/sections/GetQuoteForm/GetQuoteForm";

export default function GetQuote() {
  return (
    <div>
      <GetQuoteForm />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FadeUp>
        <DoYouStillNeedHelp />
      </FadeUp>
    </div>
  );
}
