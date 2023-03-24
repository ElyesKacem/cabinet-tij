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
          TIJ is committed to protecting the privacy of its customers and users'
          personal data. The information collected is used to respond to their
          requests and to improve the user experience. We do not disclose any
          information to third parties, except where required by law or
          competent authorities
        </p>
        <div className="EnrollementImage-title">Term of use</div>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Company name : </b> TIJ{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Registered address : </b> 3 rue Boccador, 75008
          Paris.{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Phone number : </b> 0033 06 99 08 64 91{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Registered address : </b> 3 rue Boccador, 75008
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Email address : </b> contact@cabinet-tij.com
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Registration number : </b> 90274422600017
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>Director : </b> Manel BOUABIDI
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
