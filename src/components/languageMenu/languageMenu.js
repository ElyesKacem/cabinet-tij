import React from 'react'
import "./languageMenu.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EnglishFlag from './../../assets/images/Flag_of_the_United_Kingdom.svg';
import FrenchFlag from './../../assets/images/FrenchFlag.png';

export default function LanguageMenu(props) {
    const [rotateButton, setRotateButton] = React.useState(false);
    const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);
    const mStyle={
      ...props.style
    }
  return (
    <div>
        <div style={{display:'flex',alignItems:'center',color:"white",mStyle}}>
        <div >
            
            <div className={rotateButton? "dropDownMenu":"dropUpMenu"}>
            <div className='languageMenuContent-overlay'>
            </div>
            <div className='languageMenuContent'>
                <div style={{display:'flex'}}>
                <img src={EnglishFlag} /> &nbsp;&nbsp;&nbsp;<div>ENGLISH</div>
                </div>
                <br />
                <div style={{display:'flex'}}>
                <img src={FrenchFlag} /> &nbsp;&nbsp;&nbsp;<div>FRENCH</div>                
                </div>
            </div>
            </div>
        </div>
        
          <img style={{height:23,position:"relative",zIndex:"3"}} src={EnglishFlag} alt="" />
          <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor="#242D65" />
        <stop offset={1} stopColor="#CF2032" />
      </linearGradient>
    </svg>
    <ExpandLessIcon className={rotateButton? "rotateButtonForward":"rotateButtonBack"} sx={{ fontSize:50, fill: "url(#linearColors)",cursor: "pointer" }} onClick={()=>{
        setRotateButton(!rotateButton);
    }}/>  
        
        </div>
    </div>
  )
}
