import React from "react";
import "./DoYouStillNeedHelp.css";
import Grid from "@mui/material/Grid";
import Image from "../../../assets/images/dysnh.jpg";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";
import GetText from "./DoYouStillNeedHelp.lang";

export default function DoYouStillNeedHelp() {
  const t = GetText();
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 1100px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1100px)",
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <br />
      <br />

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.small && (
              <div>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item xs={3}>
                    <img className="shortImage" src={Image} />
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ textAlign: "center", padding: 30 }}>
                      <div className="firstClass">{t.h1}</div>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: " 20px",
                          color: "grey",
                        }}
                      >
                        {t.parag}
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/TalkToUsNow#contact"
                    >
                      <div className="RequestAQuoteButton">{t.bt1}</div>
                    </HashLink>
                  </Grid>
                </Grid>
              </div>
            )}
            {matches.large && (
              <div>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item xs={3}>
                    <img className="shortImage" src={Image} />
                  </Grid>
                  <Grid style={{ transform: "translateX(20px)" }} item xs={6}>
                    <div className="firstClass">{t.h1}</div>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: " 20px",
                        color: "grey",
                        width: 550,
                      }}
                    >
                      {t.parag}
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/TalkToUsNow#contact"
                    >
                      <div className="RequestAQuoteButton">{t.bt1}</div>
                    </HashLink>
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
    </div>
  );
}
