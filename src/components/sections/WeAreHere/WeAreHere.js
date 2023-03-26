import React from "react";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import "./WeAreHere.css";
import Img from "../../../assets/images/OurCommunity/ourCommunityFinal.jpg";
import WeAreHereButton from "../../buttons/WeAreHereButton/WeAreHereButton";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";
import GetText from "./WeAreHere.lang";
import { FadeLeft, FadeUp } from "../../../assets/Animations/Fade";

export default function WeAreHere() {
  const t = GetText();
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 929px)",
    medium: "(max-width: 929px)",
    small: "(max-width: 531px)",
    vsmall: "(max-width: 431px)",
  };

  return (
    <BackgroundImage rgba1="0,0,0" rgba2="0,0,0" opacity="0.27" img={Img}>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <div className="WeAreHere-container">
                <FadeLeft>
                  <div className="WeAreHere-container-title">
                    {t.h1}
                    <br /> {t.h2}
                  </div>

                  <p className="WeAreHere-container-paragraph">{t.parag}</p>

                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: matches.vsmall && "center",
                      flexDirection: matches.vsmall && "column",
                    }}
                  >
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/enrollement#enrollement"
                    >
                      <WeAreHereButton title={t.bt1} />
                    </HashLink>
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/TalkToUsNow#contact"
                    >
                      <WeAreHereButton
                        title={t.bt2}
                        arrowColor="#6E533D"
                        style={{ backgroundColor: "white", color: "#6E533D" }}
                      />
                    </HashLink>
                  </div>
                </FadeLeft>
              </div>
            )}
            {matches.medium && (
              <div
                className="WeAreHere-container"
                style={{
                  transform: matches.small && "scale(0.9)",

                  paddingLeft: matches.small && 0,
                  paddingRight: matches.small && 0,
                }}
              >
                <FadeUp>
                  <div
                    className="WeAreHere-container-title"
                    style={{
                      fontSize: matches.small && 43,
                    }}
                  >
                    {t.h1 + " " + t.h2}
                  </div>

                  <p
                    className="WeAreHere-container-paragraph"
                    style={{ width: "auto" }}
                  >
                    It will take less than 10 minutes for you to submit your
                    application <br /> for affiliation. We will get back to you
                    as soon as possible!
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 23,
                      transform: "translateY(20px)",
                      justifyContent: matches.small && "center",
                      alignItems: matches.vsmall && "center",
                      flexDirection: matches.vsmall && "column",
                    }}
                  >
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/enrollement#enrollement"
                    >
                      <WeAreHereButton title={t.bt1} />
                    </HashLink>
                    <HashLink
                      className="resetcss"
                      smooth
                      to="/TalkToUsNow#contact"
                    >
                      <WeAreHereButton
                        title={t.bt2}
                        arrowColor="#6E533D"
                        style={{ backgroundColor: "white", color: "#6E533D" }}
                      />
                    </HashLink>
                  </div>
                </FadeUp>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
    </BackgroundImage>
  );
}
