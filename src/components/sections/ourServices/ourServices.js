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

export default function OurServices() {
  const [isHover, setIsHover] = useState([false, false, false, false, false]);
  const data = [
    {
      img: Image1,
      title: "Interpreting",
    },
    {
      img: Image2,
      title: "Translation",
    },
    {
      img: Image3,
      title: "Sworn Translation",
    },
    {
      img: Image4,
      title: "Business",
    },
    {
      img: Image5,
      title: "Personal Services",
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
                  <Container>
                    <div style={{ padding: "0px 50px 0px 55px" }}>
                      <div
                        className="greyEmptyRectangle"
                        style={{ transform: "translateX(-40px)" }}
                      />

                      <div className="greyRectangle">
                        <b style={{ fontSize: 25 }}>Our Services</b>
                      </div>
                      <br />
                      <br />
                      <div className="firstClass">
                        We Offer Solutions For Clients Both Large And Small,
                        From corporate, Government And Private Sectors
                      </div>
                    </div>
                  </Container>
                  <div style={{ margin: 50 }}>
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
                        <b style={{ fontSize: 25 }}>Our Services</b>
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
                        We Offer Solutions For Clients Both Large And Small,
                        From corporate, Government And Private Sectors
                      </div>
                    </div>
                  </Container>
                  <div style={{ margin: 50 }}>
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
