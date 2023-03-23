import React from "react";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import "./WeAreHere.css";
import Img from "../../../assets/images/OurCommunity/ourCommunityFinal.jpg";
import WeAreHereButton from "../../buttons/WeAreHereButton/WeAreHereButton";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";

export default function WeAreHere() {
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
                <div className="WeAreHere-container-title">
                  We are here, it<b className="normal">'</b>s time
                  <br /> for you to join TIJ.
                </div>

                <p className="WeAreHere-container-paragraph">
                  It will take less than 10 minutes for you to submit your
                  application <br /> for affiliation. We will get back to you as
                  soon as possible!
                </p>

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
                    <WeAreHereButton title="Join Us" />
                  </HashLink>
                  <HashLink
                    className="resetcss"
                    smooth
                    to="/TalkToUsNow#contact"
                  >
                    <WeAreHereButton
                      title="Contact Us"
                      arrowColor="#6E533D"
                      style={{ backgroundColor: "white", color: "#6E533D" }}
                    />
                  </HashLink>
                </div>
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
                <div
                  className="WeAreHere-container-title"
                  style={{
                    fontSize: matches.small && 43,
                  }}
                >
                  We are here, it<b className="normal">'</b>s time for you to
                  join TIJ.
                </div>

                <p
                  className="WeAreHere-container-paragraph"
                  style={{ width: "auto" }}
                >
                  It will take less than 10 minutes for you to submit your
                  application <br /> for affiliation. We will get back to you as
                  soon as possible!
                </p>

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
                    <WeAreHereButton title="Join Us" />
                  </HashLink>
                  <HashLink
                    className="resetcss"
                    smooth
                    to="/TalkToUsNow#contact"
                  >
                    <WeAreHereButton
                      title="Contact Us"
                      arrowColor="#6E533D"
                      style={{ backgroundColor: "white", color: "#6E533D" }}
                    />
                  </HashLink>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
    </BackgroundImage>
  );
}
