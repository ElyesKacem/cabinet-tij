import React, { useState } from "react";
import "./ourServices.js";
import Container from "@mui/material/Container";
import HomePhotoHover from "../../homePhotoHover/homePhotoHover.js";
import Image1 from "../../../assets/images/services/hh0.jpg";
import Image2 from "../../../assets/images/services/hh1.jpg";
import Image3 from "../../../assets/images/services/hh2.jpg";
import Image4 from "../../../assets/images/services/business.jpg";
import Image5 from "../../../assets/images/services/personal.jpg";
import Grid from "@mui/material/Grid";
import Media from "react-media";
import GetText from "./ourServices.lang.js";
import { FadeDown, FadeUp } from "../../../assets/Animations/Fade.jsx";

export default function OurServices() {
  const [isHover, setIsHover] = useState([false, false, false, false, false]);
  const texts = GetText();
  const data = [
    {
      img: Image1,
      title: texts.inter,
    },
    {
      img: Image2,
      title: texts.transl,
    },
    {
      img: Image3,
      title: texts.sworn,
    },
    {
      img: Image4,
      title: texts.business,
    },
    {
      img: Image5,
      title: texts.personal,
    },
  ];
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1229px)",
    medium: "(max-width: 1229px)",
    small: "(max-width: 479px)",
  };
  return (
    <div className="white-background" id="services">
      <br />
      <br /> <br />
      <br />
      <div>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              {matches.large && (
                <>
                  <FadeDown>
                    <Container>
                      <div style={{ padding: "0px 50px 0px 55px" }}>
                        <div
                          className="greyEmptyRectangle"
                          style={{ transform: "translateX(-40px)" }}
                        />

                        <div className="greyRectangle">
                          <b style={{ fontSize: 25 }}>{texts.our_serv}</b>
                        </div>
                        <br />
                        <br />
                        <div className="firstClass">{texts.we_offer}</div>
                      </div>
                    </Container>
                  </FadeDown>
                  <div style={{ margin: 50 }}>
                    <FadeUp>
                      <Grid
                        container
                        spacing={4}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {data.map((element, index) => (
                          <Grid key={index} item>
                            <HomePhotoHover
                              setIsHover={setIsHover}
                              id={index}
                              img={element.img}
                              title={element.title}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FadeUp>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: 5,
                        width: 30,
                        height: 6,
                        backgroundColor: isHover[0] ? "#858383" : "#e9e5e5",
                        borderRadius: 5,
                      }}
                    />
                    <div
                      style={{
                        marginLeft: 5,
                        width: 30,
                        height: 6,
                        backgroundColor: isHover[1] ? "#858383" : "#e9e5e5",
                        borderRadius: 5,
                      }}
                    />
                    <div
                      style={{
                        marginLeft: 5,
                        width: 30,
                        height: 6,
                        backgroundColor: isHover[2] ? "#858383" : "#e9e5e5",
                        borderRadius: 5,
                      }}
                    />
                    <div
                      style={{
                        marginLeft: 5,
                        width: 30,
                        height: 6,
                        backgroundColor: isHover[3] ? "#858383" : "#e9e5e5",
                        borderRadius: 5,
                      }}
                    />
                    <div
                      style={{
                        marginLeft: 5,
                        width: 30,
                        height: 6,
                        backgroundColor: isHover[4] ? "#858383" : "#e9e5e5",
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </>
              )}
              {(matches.medium || matches.small) && (
                <>
                  <FadeDown>
                    <Container>
                      <div
                        style={{
                          padding: "0px 15px 0px 50px",
                        }}
                      >
                        <div
                          className="greyEmptyRectangle"
                          style={{ transform: "translateX(-40px)" }}
                        />

                        <div className="greyRectangle">
                          <b style={{ fontSize: 25 }}>{texts.our_serv}</b>
                        </div>
                        <br />
                        <br />
                        <div
                          style={{
                            fontSize: matches.small && 27,
                            marginTop: matches.small && 20,
                          }}
                          className="firstClass"
                        >
                          {texts.we_offer}
                        </div>
                      </div>
                    </Container>
                  </FadeDown>
                  <div style={{ margin: 50 }}>
                    <FadeUp>
                      <Grid
                        container
                        spacing={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {data.map((element, index) => (
                          <Grid key={index} item>
                            <HomePhotoHover
                              setIsHover={setIsHover}
                              id={index}
                              img={element.img}
                              title={element.title}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </FadeUp>
                  </div>
                </>
              )}
            </React.Fragment>
          )}
        </Media>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
