import React from 'react'
import "./dialogSelection.css"

export default function DialogSelection(props) {
    return (
        <div className="container" style={{marginLeft:20}} onClick={()=>{
            props.setSelectedDataId(props.id);

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
