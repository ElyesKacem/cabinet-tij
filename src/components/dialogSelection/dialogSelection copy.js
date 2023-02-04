import React from 'react'
import "./dialogSelection.css"

export default function DialogSelection(props) {
    return (
        <div className={props.haveShader?"container dialogInfoClass-selected-menu":"container"} style={{marginLeft:20}} onClick={()=>{
            props.setSelectedDataId(props.id);
            let isShadow=[false,false,false,false,false]
            isShadow[props.id]=true;
            props.setIsShadow(isShadow);

          }}>
            

            <div style={{
                position: 'relative', zIndex: "3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}>
                <img style={{ width: props.width || 50 }} src={props.img} />
                <div className="titleDialogSelection">

                    {props.title}
                </div>
            </div>
        </div>
    )
}
