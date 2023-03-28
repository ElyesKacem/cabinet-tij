import React from "react";
import "./Services.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Image from "../../../assets/images/Illustration.svg";
import Pause from "../../../assets/images/pause.png";
import Play from "../../../assets/images/play.png";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";
import GetText from "./Services.lang";
import { FadeLeft, FadeRight } from "../../../assets/Animations/Fade";

export default function Services() {
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 649px)",
    medium: "(max-width: 999px) ",
    large: "(min-width: 1000px)",
  };
  const texts = GetText();
  return (
    <div className="services" id="about">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <>
                <Container>
                  <Grid
                    container
                    spacing={12}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <FadeRight>
                        <div className="greyEmptyRectangle" />
                        <div className="translateRight40">
                          <div className="greyRectangle">
                            <b>{texts.who_we_are}</b>
                          </div>
                          <div
                            style={{
                              transform: "translateX(-14px)",
                            }}
                          >
                            <p
                              className="firstClass"
                              style={{ transform: "translateX(14px)" }}
                            >
                              {texts.cabinet_Tij_For}
                            </p>

                            <p className="secondClass">
                              {texts.we_are_specialized}
                            </p>
                            <p className="thirdClass">{texts.thanks_to_our}</p>

                            <div>
                              <div></div>
                              <HashLink
                                className="resetcss"
                                smooth
                                to="/#services"
                              >
                                <div className="miniButtonClass">
                                  <div style={{ position: "relative" }}>
                                    <img src={Pause} style={{ width: 80 }} />
                                    <img
                                      src={Play}
                                      style={{ width: 80 }}
                                      className="servicesPauseButton"
                                    />
                                  </div>

                                  <div
                                    // style={{ fontSize: 17 }}
                                    className="Gilroy-Regular"
                                  >
                                    {texts.our_services}
                                  </div>
                                </div>
                              </HashLink>
                            </div>
                          </div>
                        </div>
                      </FadeRight>
                    </Grid>
                    <Grid item xs={6}>
                      <FadeLeft>
                        <img className="ServicesleftImage" src={Image} />
                      </FadeLeft>
                    </Grid>
                  </Grid>
                </Container>
              </>
            )}
            {matches.medium && (
              <div style={{ padding: 2 }}>
                <div className="greyEmptyRectangle" />
                <div>
                  <div>
                    <div className="translateRight40" style={{ maxWidth: 500 }}>
                      <div className="greyRectangle">
                        <b>{texts.who_we_are}</b>
                      </div>
                      <div style={{ transform: "translateX(-14px)" }}>
                        <p
                          className="firstClass"
                          style={{ transform: "translateX(16px)" }}
                        >
                          {texts.cabinet_Tij_For}
                        </p>

                        <p className="secondClass">
                          {texts.we_are_specialized}
                        </p>
                        <p className="thirdClass">{texts.thanks_to_our}</p>

                        <div>
                          <div></div>
                          <HashLink className="resetcss" smooth to="/#services">
                            <div className="miniButtonClass">
                              <div style={{ position: "relative" }}>
                                <img src={Pause} style={{ width: 80 }} />
                                <img
                                  src={Play}
                                  style={{ width: 80 }}
                                  className="servicesPauseButton"
                                />
                              </div>

                              <div style={{ fontSize: 17 }}>
                                {texts.our_services}
                              </div>
                            </div>
                          </HashLink>
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                  <div>
                    <img
                      className="ServicesleftImage"
                      style={{ transform: "translateX(-2px)" }}
                      src={Image}
                    />
                  </div>
                </div>
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
