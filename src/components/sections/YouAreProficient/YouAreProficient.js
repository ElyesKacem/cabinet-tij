import React from "react";
import "./YouAreProficient.css";
import Grid from "@mui/material/Grid";
import Zoomed from "../../../assets/images/OurCommunity/zoomed.jpg";
import Idea from "../../../assets/images/OurCommunity/idea.svg";
import Media from "react-media";
import GetText from "./YouAreProficient.lang";
import { HashLink } from "react-router-hash-link";

export default function YouAreProficient() {
  const t = GetText();
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1000px)",
    medium: "(max-width: 999px) ",
    small: "(max-width: 661px)",
    vsmall: "(max-width: 576px)",
  };
  return (
    <div className="white-background">
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div
                  className="YouAreProficient-container"
                  style={{ transform: "translateX(-40px)" }}
                >
                  <br />
                  <br />
                  <br />

                  <div className="YouAreProficient-zoom">
                    <img src={Zoomed} style={{ width: 600 }} alt="" />
                  </div>

                  <div className="YouAreProficient-blueBakcground">
                    <img src={Idea} style={{ height: 70 }} />

                    <div className="YouAreProficient-h1">{t.t1}</div>
                    <br />
                    <div className="YouAreProficient-p">{t.parag}</div>
                    <br />

                    <div className="YouAreProficient-h2">{t.t2}</div>
                    <br />

                    <HashLink
                      className="resetcss"
                      smooth
                      to="/enrollement#enrollement"
                    >
                      {" "}
                      <div className="YouAreProficient-blueButton">
                        <div className="YouAreProficient-blueButton-title">
                          {t.bt}
                        </div>
                      </div>
                    </HashLink>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </>
            )}
            {matches.medium && (
              <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div
                  className="YouAreProficient-container"
                  style={{ flexDirection: "column", gap: 30 }}
                >
                  <div
                    className="YouAreProficient-zoom"
                    style={{
                      transform: "translate(0px)",
                      width: matches.small && "100%",
                      height: matches.small && "auto",
                    }}
                  >
                    <img src={Zoomed} style={{ width: 600 }} alt="" />
                  </div>

                  <div
                    className="YouAreProficient-blueBakcground"
                    style={{
                      width: matches.small && "auto",
                      padding: matches.vsmall && 44,
                    }}
                  >
                    <img src={Idea} style={{ height: 70 }} />

                    <div className="YouAreProficient-h1">{t.t1}</div>
                    <br />
                    <div className="YouAreProficient-p">{t.parag}</div>
                    <br />

                    <div className="YouAreProficient-h2">{t.t2}</div>
                    <br />

                    <div className="YouAreProficient-blueButton">
                      <HashLink
                        className="resetcss"
                        smooth
                        to="/enrollement#enrollement"
                      >
                        <div
                          className="YouAreProficient-blueButton-title"
                          style={{ color: "white" }}
                        >
                          {t.bt}
                        </div>
                      </HashLink>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}
