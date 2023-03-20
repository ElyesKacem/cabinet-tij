import React from "react";
export default function BackgroundImage(props) {
  const myStyle = {
    backgroundImage:
      " linear-gradient(1800deg, rgba(" +
      (props.rgba1 || "36, 45, 101") +
      " , " +
      (props.opacity || ".2") +
      "), rgba(" +
      (props.rgba2 || "207, 32, 50") +
      " , " +
      (props.opacity || ".2") +
      ")),  url(" +
      props.img +
      ")",
    // boxShadow: props.overlay||"inset 0 0 0 1000px rgba("+(props.r||"0")+","+(props.v||"0")+","+(props.b||"0")+","+(props.opacity||".3"),
    // boxShadow: "inset 0 0 0 1000px rgba(0,0,0,"+(props.opacity||".3"),

    backgroundPosition: "center",
    backgroundSize: "cover",
    height: props.height || 857,
    ...props.style,
    position: "relative",
  };

  return <div style={myStyle}>{props.children}</div>;
}
