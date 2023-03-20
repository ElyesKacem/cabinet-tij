import React from "react";
import EnrollementBeforeFooter from "../components/sections/EnrollementBeforeFooter/EnrollementBeforeFooter";
import EnrollementForm from "../components/sections/EnrollementForm/EnrollementForm";
import EnrollementImage from "../components/sections/EnrollementImage/EnrollementImage";

export default function Enrollement() {
  return (
    <div>
      <EnrollementImage />
      <EnrollementForm />
      <EnrollementBeforeFooter />
    </div>
  );
}
