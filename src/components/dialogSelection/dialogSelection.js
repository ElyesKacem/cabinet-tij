import React from 'react'
import "./dialogSelection.css"
import Dialog from "../../assets/images/dialogselection.svg"
import DialogRect from "../../assets/images/dialogselection-rectangle.png"

export default function DialogSelection(props) {
    const mystyle={
        ...props.style,
        height:146,width:120,
        cursor:props.defaultCursor? "default":"pointer"
    }
    return (
        <div style={mystyle} onClick={()=>{
            props.setSelectedDataId(props.id);
            let isShadow=[false,false,false,false,false]
            isShadow[props.id]=true;
            props.setIsShadow(isShadow);

          }}>
            <div style={{position:"relative"}}>

                {props.haveShader &&
            <div className="dialogselection-shadow"></div>
                
                
                }
            <div >
                {props.haveShader &&
                <img src={Dialog} className="dialogSelection-dialog" />
                
                }
                {!props.haveShader &&
                
                <img src={DialogRect} className="dialogSelection-dialog-rect" />
                
                }
                <div className='dialogSelection-content'>
                        <img src={props.img} style={{height:50}} />
                        <div className='dialogSelection-content-title'>{props.title}</div>
                </div>

            </div>
            </div>
        </div>
    )
}
