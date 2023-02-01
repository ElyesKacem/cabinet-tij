import React from 'react'
import "./dialogInfo.css"
import Grid from '@mui/material/Grid';

export default function DialogInfo({ data }) {

    return (
        <div className='dialogInfoClass dialogInfoClass-selected' >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid item  >
                    <img style={{ height: 300, margin: 30 }} src={data.image} alt=""  />
                </Grid>
                <Grid item >
                    <div className="greyEmptyRectangle" style={{transform:"translate(-35px,14px)"}}></div>
                

                    <div className="dialogInfoClass-title">
                        {data.title}
                    </div>
                    <div className='dialogInfoClass-paragraph'>
                        {data.paragraph}
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
