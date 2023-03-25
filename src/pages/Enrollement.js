import React from "react";
import { FadeUp } from "../assets/Animations/Fade";
import EnrollementBeforeFooter from "../components/sections/EnrollementBeforeFooter/EnrollementBeforeFooter";
import EnrollementForm from "../components/sections/EnrollementForm/EnrollementForm";
import EnrollementImage from "../components/sections/EnrollementImage/EnrollementImage";

export default function Enrollement() {
  return (
    <div>
      <EnrollementImage />
      <FadeUp>
        <EnrollementForm />
      </FadeUp>
      <EnrollementBeforeFooter />
    </div>
  );
}
