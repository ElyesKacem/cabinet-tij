import React from "react";
import "./leftRightButton.css";
import EastIcon from "@mui/icons-material/East";

export default function LeftRightButton(props) {
  const myStyle = {
    ...props.style,
    background:
      props.isBlue &&
      "transparent linear-gradient(180deg, #4159F0 0%, #0827D5 100%) 0% 0% no-repeat padding-box",
    backgroundColor: props.isWhite && "white",
    // color:props.isWhite?"#0B2AD6":"white",
    border: (props.isBlue || props.isWhite) && "none",
    color: props.whiteText && "white",
    // paddingTop:(props.isWhite)&&14
  };
  const iconStyle = {
    ...props.iconStyle,
  };
  return (
    <div
      style={myStyle}
      className={
        props.isWhite
          ? "leftRightButton leftRightButton-white"
          : "leftRightButton"
      }
    >
      <div className="LeftRightButton-container">
        <div className="buttonText">
          <b>{props.title} </b>
        </div>
        <div className="test">
          <div className="buttonIcon" style={iconStyle}>
            <EastIcon></EastIcon>
          </div>
        </div>
      </div>
      <div className="LeftRightButton-background"></div>
    </div>
  );
}
