import React, { useEffect, useState } from "react";
import "./FormRequestQuoteInput.css";
import CalendarIcon from "../../../assets/images/calendar.svg";
import { FullDateEn } from "../../../Functions/DateFunctions";

export default function FormRequestQuoteInput(props) {
  const { name, value, onChange } = props;
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(value == "");
  }, [value]);

  return (
    <div
      className={"did-floating-label-content " + props.className}
      style={props.style}
    >
      <input
        style={{ borderRadius: props.borderRadius }}
        className={
          props.multiline
            ? "did-floating-input FormRequestQuoteInput-multiline"
            : "did-floating-input"
        }
        type="text"
        value={value}
        name={name}
        placeholder=" "
        //   onBlur={(e)=>{
        //     if(e.target.value!=""){
        //         setShow(true);
        //     }
        //   }}
        //   onFocus={()=>{
        //     setShow(!false);
        //   }}
        onChange={onChange}
      />
      {show && (
        <label className="did-floating-label">
          {props.title}
          {props.required && (
            <b className="FormRequestQuoteInput-star">&nbsp;*</b>
          )}
        </label>
      )}
    </div>
  );
}

export function FormRequestQuoteInputMultiline(props) {
  const { name, value, onChange } = props;
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(value == "");
  }, [value]);

  return (
    <div className={"did-floating-label-content " + props.className}>
      <textarea
        className={
          props.multiline
            ? "did-floating-input FormRequestQuoteInput-multiline"
            : "did-floating-input"
        }
        type="text"
        name={name}
        value={value}
        placeholder=" "
        //   onBlur={(e)=>{
        //     if(e.target.value!=""){
        //         setShow(true);
        //     }
        //   }}
        //   onFocus={()=>{
        //     setShow(!false);
        //   }}
        onChange={onChange}
      />
      {show && (
        <label className="did-floating-label">
          {props.title}
          {props.required && (
            <b className="FormRequestQuoteInput-star">&nbsp;*</b>
          )}
        </label>
      )}
    </div>
  );
}

export function DateInputGetQuote(props) {
  const [show, setShow] = React.useState(true);
  return (
    <div
      onClick={() => {
        props.setShowCalendar(!props.showCalendar);
      }}
      className={"did-floating-input " + props.className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
      }}
    >
      <img src={CalendarIcon} style={{ width: 25 }} alt="" />
      <div style={{ fontWeight: "bold" }}> {FullDateEn(props.value)}</div>
    </div>
  );
}

// Tuesday, February 27, 2023
