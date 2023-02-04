import React from 'react'
import "./footerText.css"
import EastIcon from '@mui/icons-material/East';

export default function FooterText(props) {
    return (
        <div className='FooterText'>
            <div className='footerText-title'>
                <div style={{transform:"translateY(5px)"}}>
                    <EastIcon />
                </div>
                <div className='footerText-title'>
                    &nbsp;&nbsp;&nbsp;{props.title}
                </div>
            </div>
            <br />
            <div className='footerText-content'>
                {props.content}
                {props.title=="Solutions" && <>
                
                Interpreting 
                <br />
                <br />
                Bussiness 
                <br />
                <br />
                Certified Translation 
                <br />
                <br />
                Sworn Translation
                <br />
                <br />
                Personal Services 
                <br />
                <br />
                </>}
                {props.title=="Information" && <>
                
                contact@cabinet-tij.com
                <br />
                <br />
                06 99 08 64 91 
                <br />
                <br />
                1 rue René et Isa Lefèvre 93450 L'IIe-Saint-Denis
    
                </>}
            </div>
        </div>
    )
}
