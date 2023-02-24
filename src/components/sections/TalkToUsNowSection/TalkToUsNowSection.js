import React from 'react'
import "./TalkToUsNowSection.css"
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import FormRequestQuoteInput, { FormRequestQuoteInputMultiline } from '../../buttons/FormRequestQuoteInput/FormRequestQuoteInput';
import Image1 from "../../../assets/images/TalkToUs/TalkToUs1.png"
import HoverImage from '../../HoverImage/HoverImage';


export default function TalkToUsNowSection() {
    const [fileName, setFileName] = React.useState();
    const [file, setFile] = React.useState();
    const handlePutFile = (e) => {
        let file = e.target.value;
        setFile(file);
        const fileNameArray = file.split('\\')
        setFileName(fileNameArray[fileNameArray.length - 1])

    }
    const handleRemoveFile = () => {
        setFile(null);
        setFileName(null);
    }
    return (
        <div className='TalkToUsNowSection-background'>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br />
            <div style={{ width: "90%", maxWidth: 1500, margin: "auto" }}>
                <Grid container
                // direction="row"
                // justifyContent="center"
                // alignItems="center"
                >
                    <Grid item xs={6}>
                        <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div>
                                <div className='TalkToUsNowSection-title'>
                                    Talk to us now
                                </div>
                                <div className='TalkToUsNowSection-paragraph'>
                                    For further information, please contact us at contact<i className='thin'>@</i>cabinet<i className='thin'>-</i>tij.com or use the provided form. If you are a professional in translation or interpreting and wish to become part of our distinguished group of talents, kindly complete our Online <b>Application Form</b>
                                </div>
                                <br />
                                <br />

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <FormRequestQuoteInput required title="Full Name" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormRequestQuoteInput required title="Email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormRequestQuoteInput required title="Subject" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormRequestQuoteInputMultiline multiline required title="Notes" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label htmlFor="file" className='TalkToUsNowSection-selectFile'>
                                            <input type="file" className='displaynone' id="file" onChange={event => handlePutFile(event)} />
                                            <div className="TalkToUsNowSection-selectFile-button">
                                                <div>
                                                    Select a file
                                                </div>
                                            </div>
                                            <div className='EnrollementAttachFiles-fileName'>
                                                {!fileName && "No Chosen File"}
                                                {fileName && fileName}

                                            </div>
                                            {fileName && <ClearIcon sx={{ fill: "url(#linearColors)" }} style={{ transform: "translateY(2px)", cursor: "pointer" }} onClick={handleRemoveFile} ></ClearIcon>}
                                        </label>
                                    </Grid>


                                </Grid>




                            </div>
                            <br />
                            <br />
                            <div className='getQuoteForm-submit-button'>Submit</div>

                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <HoverImage img={Image1} />
                        <br />
                        <br />
                        <br />
                        <div className='TalkToUsNowSection-container'>
                            <div className='TalkToUsNowSection-subContainer'>
                                <div className='TalkToUsNowSection-pinkb'>Contact Us</div>
                                <div>contact@cabinet-tij.com</div>
                                <div>06 99 08 64 91</div>
                            </div>
                            <div className='TalkToUsNowSection-subContainer'>
                                <div className='TalkToUsNowSection-pinkb'>Find Us</div>
                                <div style={{width:200}}>1 rue René et Isa Lefèvre 93450 L'IIe-Saint-Denis</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    )
}
