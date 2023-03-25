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
import AOS from "aos";

export default function Services() {
  React.useEffect(() => {
    AOS.init();
  }, []);
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
                  <div className="greyEmptyRectangle" />
                  <Grid
                    container
                    spacing={12}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={6}>
                      <div className="translateRight40">
                        <div className="greyRectangle">
                          <b>{texts.who_we_are}</b>
                        </div>
                        <div style={{ transform: "translateX(-14px)" }}>
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
                    </Grid>
                    <Grid item xs={6}>
                      <img className="ServicesleftImage" src={Image} />
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
                          style={{ transform: "translateX(20px)" }}
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
            {/* {matches.small && (
              <div style={{ padding: 10 }}>
                <div>
                  <div className="translateRight40" style={{ maxWidth: 350 }}>
                    <div>
                      <div
                        className="greyEmptyRectangle"
                        style={{ transform: "translateX(-39px)" }}
                      />
                      <div className="greyRectangle">
                        <b>{texts.who_we_are}</b>
                      </div>
                    </div>
                    <p
                      className="firstClass"
                      style={{ transform: "translateX(20px)" }}
                    >
                      {texts.cabinet_Tij_For}
                    </p>

                    <p className="secondClass">
                      We are specialized in the field of technical,
                      administrative and judicial translation and interpreting.
                    </p>
                    <p className="thirdClass">
                      Thanks to our wide network of qualified professionals and
                      strategic partners, we respond quickly and efficiently to
                      the requests of our clients.
                    </p>

                    <div>
                      <div></div>
                      <div className="miniButtonClass">
                        <div style={{ position: "relative" }}>
                          <img src={Pause} style={{ width: 80 }} />
                          <img
                            src={Play}
                            style={{ width: 80 }}
                            className="servicesPauseButton"
                          />
                        </div>
                        <div>{texts.our_services}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <img className="ServicesleftImage" src={Image} />
                </div>
              </div>
            )} */}
          </React.Fragment>
        )}
      </Media>

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Container>
        <div className='greyEmptyRectangle' />
        <Grid container spacing={15}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} md={6} lg={6}>
            <div className='translateRight40'>


              <div className="greyRectangle">
                <b>
                  {texts.who_we_are}
                </b>
              </div>

              <p className='firstClass' style={{ transform: 'translateX(20px)' }}>{texts.cabinet_Tij_For}</p>

              <p className='secondClass'>We are specialized in the field of technical, administrative and judicial translation and interpreting.</p>
              <p className='thirdClass'>Thanks to our wide network of qualified professionals and strategic partners, we respond quickly and efficiently to the requests of our clients.</p>

              <div>
                <div>

                </div>
                <div className='miniButtonClass'>
                  <div style={{ position: "relative" }}>
                    <img src={Pause} style={{ width: 80 }} />
                    <img src={Play} style={{ width: 80 }} className="servicesPauseButton" />
                  </div>
                  <div>
                    {texts.our_services}
                  </div>
                </div>
              </div>
            </div>




          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <img className='ServicesleftImage' src={Image} />
          </Grid>
        </Grid>
      </Container> */}
    </div>
  );
}
