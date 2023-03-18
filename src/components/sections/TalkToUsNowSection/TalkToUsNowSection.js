import React from "react";
import "./TalkToUsNowSection.css";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import FormRequestQuoteInput, {
  FormRequestQuoteInputMultiline,
} from "../../buttons/FormRequestQuoteInput/FormRequestQuoteInput";
import Image1 from "../../../assets/images/TalkToUs/TalkToUs1.jpg";
import HoverImage from "../../HoverImage/HoverImage";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";

export default function TalkToUsNowSection() {
  const [fileName, setFileName] = React.useState();
  const [file, setFile] = React.useState();
  const handlePutFile = (e) => {
    let file = e.target.value;
    setFile(file);
    const fileNameArray = file.split("\\");
    setFileName(fileNameArray[fileNameArray.length - 1]);
  };
  const handleRemoveFile = () => {
    setFile(null);
    setFileName(null);
  };
  const GLOBAL_MEDIA_QUERIES = {
    medium: "(max-width: 1200px)",
    small: " (max-width: 640px)",
    large: "(min-width: 1200px)",
  };
  return (
    <div className="TalkToUsNowSection-background">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {(matches.medium || matches.small) && (
              <div style={{ width: "90%", maxWidth: 1500, margin: "auto" }}>
                <div container>
                  <div item xs={6}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div className="TalkToUsNowSection-title">
                          Talk to us now
                        </div>
                        <div className="TalkToUsNowSection-paragraph">
                          For further information, please contact us at contact
                          <i className="thin">@</i>cabinet
                          <i className="thin">-</i>tij.com or use the provided
                          form. If you are a professional in translation or
                          interpreting and wish to become part of our
                          distinguished group of talents, kindly complete our
                          Online <b>Application Form</b>
                        </div>
                        <br />
                        <br />

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                          }}
                        >
                          <div item xs={12}>
                            <FormRequestQuoteInput required title="Full Name" />
                          </div>
                          <div item xs={12}>
                            <FormRequestQuoteInput required title="Email" />
                          </div>
                          <div item xs={12}>
                            <FormRequestQuoteInput required title="Subject" />
                          </div>
                          <div item xs={12}>
                            <FormRequestQuoteInputMultiline
                              multiline
                              required
                              title="Notes"
                            />
                          </div>
                          <div item xs={12}>
                            <label
                              htmlFor="file"
                              className="TalkToUsNowSection-selectFile"
                            >
                              <input
                                type="file"
                                className="displaynone"
                                id="file"
                                onChange={(event) => handlePutFile(event)}
                              />
                              <div className="TalkToUsNowSection-selectFile-button">
                                <div>Select a file</div>
                              </div>
                              <div className="EnrollementAttachFiles-fileName">
                                {!fileName && "No Chosen File"}
                                {fileName && fileName}
                              </div>
                              {fileName && (
                                <ClearIcon
                                  sx={{ fill: "url(#linearColors)" }}
                                  style={{
                                    transform: "translateY(2px)",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleRemoveFile}
                                ></ClearIcon>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div
                        className="getQuoteForm-submit-button"
                        style={{ transform: "translateY(0px)" }}
                      >
                        Submit
                      </div>
                    </div>
                  </div>
                  <div item xs={6} style={{ transform: "translateY(20px)" }}>
                    {matches.small && (
                      <div style={{ transform: "scale(0.6)" }}>
                        <HoverImage img={Image1} />
                      </div>
                    )}
                    {!matches.small && (
                      <>
                        <br />
                        <br />
                        <br />
                        <div>
                          <HoverImage img={Image1} />
                          <br />
                          <br />
                          <br />
                        </div>
                      </>
                    )}

                    <div className="TalkToUsNowSection-container">
                      <div className="TalkToUsNowSection-subContainer">
                        <div className="TalkToUsNowSection-pinkb">
                          Contact Us
                        </div>
                        <div>contact@cabinet-tij.com</div>

                        <div>06 99 08 64 91</div>
                      </div>
                      <div className="TalkToUsNowSection-subContainer">
                        <div className="TalkToUsNowSection-pinkb">Find Us</div>
                        <div style={{ width: 200 }}>
                          1 rue René et Isa Lefèvre{" "}
                        </div>
                        <div>93450 L'IIe-Saint-Denis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {matches.large && (
              <div style={{ width: "90%", maxWidth: 1500, margin: "auto" }}>
                <VerticalBar top="55%" left="50px" />
                <VerticalBar top="17%" left="47%" />
                <VerticalBar top="90%" left="90%" />
                <Grid container>
                  <Grid item xs={6}>
                    <div
                      style={{
                        width: "90%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div className="TalkToUsNowSection-title">
                          Talk to us now
                        </div>
                        <div className="TalkToUsNowSection-paragraph">
                          For further information, please contact us at contact
                          <i className="thin">@</i>cabinet
                          <i className="thin">-</i>tij.com or use the provided
                          form. If you are a professional in translation or
                          interpreting and wish to become part of our
                          distinguished group of talents, kindly complete our
                          Online <b>Application Form</b>
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
                            <FormRequestQuoteInputMultiline
                              multiline
                              required
                              title="Notes"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <label
                              htmlFor="file"
                              className="TalkToUsNowSection-selectFile"
                            >
                              <input
                                type="file"
                                className="displaynone"
                                id="file"
                                onChange={(event) => handlePutFile(event)}
                              />
                              <div className="TalkToUsNowSection-selectFile-button">
                                <div>Select a file</div>
                              </div>
                              <div className="EnrollementAttachFiles-fileName">
                                {!fileName && "No Chosen File"}
                                {fileName && fileName}
                              </div>
                              {fileName && (
                                <ClearIcon
                                  sx={{ fill: "url(#linearColors)" }}
                                  style={{
                                    transform: "translateY(2px)",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleRemoveFile}
                                ></ClearIcon>
                              )}
                            </label>
                          </Grid>
                        </Grid>
                      </div>
                      <br />
                      <br />
                      <div className="getQuoteForm-submit-button">Submit</div>
                    </div>
                  </Grid>
                  <Grid item xs={6} style={{ transform: "translateY(20px)" }}>
                    <HoverImage img={Image1} />
                    <br />
                    <br />
                    <br />
                    <div className="TalkToUsNowSection-container">
                      <div className="TalkToUsNowSection-subContainer">
                        <div className="TalkToUsNowSection-pinkb">
                          Contact Us
                        </div>
                        <div>contact@cabinet-tij.com</div>
                        <div>06 99 08 64 91</div>
                      </div>
                      <div className="TalkToUsNowSection-subContainer">
                        <div className="TalkToUsNowSection-pinkb">Find Us</div>
                        <div style={{ width: 200 }}>
                          1 rue René et Isa Lefèvre{" "}
                        </div>
                        <div>93450 L'IIe-Saint-Denis</div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
