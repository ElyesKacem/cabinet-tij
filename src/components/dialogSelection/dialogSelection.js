import React from 'react'
import "./dialogSelection.css"

export default function DialogSelection(props) {
    return (
        <div className="container" style={{marginLeft:20}}>
            

            <div style={{
                position: 'relative', zIndex: "3",
                display: "flex",
                flexDirection: "column",
                alignitems: "center"

            }}>
                <img style={{ width: props.width || 80 }} src={props.img} />
                <div className="titleDialogSelection">

                    {props.title}
                </div>
            </div>
        </div>
    )
}
