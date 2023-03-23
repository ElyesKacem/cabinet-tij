import React from "react";
import { HashLink } from "react-router-hash-link";
import "./getQuoteButton.css";

export default function GetQuoteButton(props) {
  const myStyle = {
    ...props.style,
  };

  return (
    <HashLink className="resetcss" smooth to="/requestquote#getquote">
      <div
        className={props.blue ? "get-quote get-quote-blueBG" : "get-quote"}
        style={myStyle}
      >
        {props.title}
      </div>
    </HashLink>
  );
}

export function GetQuoteButtonPurple(props) {
  const myStyle = {
    ...props.style,
  };

  return (
    <HashLink className="resetcss" smooth to="/requestquote#getquote">
      <div
        className={
          props.blue ? "get-quote-purple get-quote-blueBG" : "get-quote-purple"
        }
        style={myStyle}
      >
        {props.title}
      </div>
    </HashLink>
  );
}
