import React from 'react'
import "./dialogInfo.css"
import Grid from '@mui/material/Grid';

export default function DialogInfo(props) {
    const myStyle = {
        ...props.style
    }

    return (
        <div className='dialogInfoClass dialogInfoClass-selected' style={myStyle} >
            <Grid container>
                <Grid item xs={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}  >
                    <img style={{ height: 270, margin: 30 }} src={props.data.image} alt="" />
                </Grid>
                <Grid item xs={6}>
                    <div className="dialogInfoClass-paragraph-container">
                        <div className="greyEmptyRectangle" style={{ transform: "translate(-35px,14px)" }}></div>


                        <div className="dialogInfoClass-title">
                            {props.data.title}
                        </div>
                        <div className='dialogInfoClass-paragraph'>
                            {props.data.paragraph}
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
export function DialogInfoMobile(props) {
    const myStyle = {
        ...props.style
    }

    return (
        <div className='dialogInfoM'>


            <img style={{ height: 270 }} src={props.data.image} alt="" />

            
                <div className="dialogInfoClass-paragraph-container">
                    <div className="greyEmptyRectangle" style={{ transform: "translate(-35px,14px)" }}></div>


                    <div className="dialogInfoClass-title">
                        {props.data.title}
                    </div>
                    <div className='dialogInfoClass-paragraph'>
                        {props.data.paragraph}
                    </div>
                </div>
            


        </div>
    )
}
