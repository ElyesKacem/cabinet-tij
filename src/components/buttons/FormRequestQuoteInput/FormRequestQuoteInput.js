import React from 'react'
import "./FormRequestQuoteInput.css"

export default function FormRequestQuoteInput(props) {
    const [show, setShow] = React.useState(true);
  return (
    <div className={"did-floating-label-content "+props.className} style={props.style}>
  <input style={{borderRadius:props.borderRadius}} className={props.multiline?"did-floating-input FormRequestQuoteInput-multiline":"did-floating-input"} type="text" placeholder=" " 
//   onBlur={(e)=>{
//     if(e.target.value!=""){
//         setShow(true);
//     }
//   }}
//   onFocus={()=>{
//     setShow(!false);
//   }}
onChange={(e)=>{
e.target.value==""?setShow(true):setShow(false);
}}
  />
  {show && <label className="did-floating-label">
    
    
    {props.title=="Spoken Languages ( with priority )" && <>
    
    Spoken Languages <b style={{fontFamily:"sans-serif"}}>(</b> with priority <b style={{fontFamily:"sans-serif"}}>) </b>
    </>}
    {props.title!="Spoken Languages ( with priority )" && props.title}
  {props.required && <b className='FormRequestQuoteInput-star'>*</b>}
   </label>}
</div>
  )
}

export function FormRequestQuoteInputMultiline(props) {
  const [show, setShow] = React.useState(true);
  return <div className={"did-floating-label-content "+props.className}>
  <textarea className={props.multiline?"did-floating-input FormRequestQuoteInput-multiline":"did-floating-input"} type="text" placeholder=" " 
//   onBlur={(e)=>{
//     if(e.target.value!=""){
//         setShow(true);
//     }
//   }}
//   onFocus={()=>{
//     setShow(!false);
//   }}
onChange={(e)=>{
e.target.value==""?setShow(true):setShow(false);
}}
  />
  {show && <label className="did-floating-label">{props.title} 
  {props.required && <b className='FormRequestQuoteInput-star'>*</b>}
   </label>}
</div>;
}