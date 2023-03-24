import React from "react";
import DownArrow from "../assets/images/DownArrow.png";

export default function TermOfUse() {
  const blueTitle = {
    fontSize: 20,
    color: "#2f49e7",
  };
  return (
    <div
      id="termeofuse"
      style={{ minHeight: 500 }}
      className="TalkToUsNowSection-background"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: 50 }}>
        <div className="EnrollementImage-title">Privacy Policy</div>
        <br />
        <br />
        <img
          src={DownArrow}
          style={{ width: 40 }}
          className="EnrollementImage-Arrow"
        />
        <br />
        <br />
        <br />
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Company name : </b> TIJ{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Headquarters Address : </b> 3 rue Boccador, 75008
          Paris.{" "}
        </p>
      </div>
    </div>
  );
}
