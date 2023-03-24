import React from "react";
import "./footerText.css";
import EastIcon from "@mui/icons-material/East";

export default function FooterText(props) {
  const ms = {
    ...props.style,
  };
  return (
    <div className="FooterText" style={ms}>
      <div className="footerText-title">
        <div className="footerText-title-arrow">
          <EastIcon />
        </div>
        <div className="footerText-title">&nbsp;&nbsp;&nbsp;{props.title}</div>
      </div>
      <br />
      <div className="footerText-content">
        {props.title != ("Support" || "Information") && props.content}
        {props.title == "Support" && "Contact us"}
        {props.title == "Solutions" && (
          <>
            Interpreting
            <br />
            <br />
            Bussiness
            <br />
            <br />
            Certified Translation
            <br />
            <br />
            Sworn Translation
            <br />
            <br />
            Personal Services
            <br />
            <br />
          </>
        )}
        {props.title == "Information" && (
          <>
            contact@cabinet-tij.com
            <br />
            <br />
            06 99 08 64 91
            <br />
            <br />3 rue Boccador, 75008 Paris.
          </>
        )}
      </div>
    </div>
  );
}
