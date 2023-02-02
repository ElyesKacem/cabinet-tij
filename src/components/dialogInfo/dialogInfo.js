import React from 'react'
import "./dialogInfo.css"
import Grid from '@mui/material/Grid';

export default function DialogInfo({ data }) {

    return (
        <div className='dialogInfoClass dialogInfoClass-selected' >
            <Grid
                container
                 
                >
                <Grid item xs={6} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}  >
                    <img style={{ height: 270, margin: 30 }} src={data.image} alt=""  />
                </Grid>
                <Grid item xs={6}>
                    <div className="dialogInfoClass-paragraph-container">
                    <div className="greyEmptyRectangle" style={{transform:"translate(-35px,14px)"}}></div>
                

                <div className="dialogInfoClass-title">
                    {data.title}
                </div>
                <div className='dialogInfoClass-paragraph'>
                    {data.paragraph}
                </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
