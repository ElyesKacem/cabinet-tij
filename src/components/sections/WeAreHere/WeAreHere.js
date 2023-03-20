import React from "react";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import "./WeAreHere.css";
import Img from "../../../assets/images/OurCommunity/ourCommunityFinal.jpg";
import WeAreHereButton from "../../buttons/WeAreHereButton/WeAreHereButton";
import Media from "react-media";

export default function WeAreHere() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 929px)",
    medium: "(max-width: 929px)",
    small: "(max-width: 531px)",
  };

  return (
    <BackgroundImage rgba1="0,0,0" rgba2="0,0,0" opacity="0.27" img={Img}>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <div className="WeAreHere-container">
                <div className="OurCommunityHeader-title">
                  We are here, it<b className="normal">'</b>s time
                  <br /> for you to join TIJ.
                </div>

                <p className="OurCommunityHeader-paragraph">
                  It will take less than 10 minutes for you to submit your
                  application <br /> for affiliation. We will get back to you as
                  soon as possible!
                </p>

                <div style={{ display: "flex", gap: 10 }}>
                  <WeAreHereButton title="Join Us" />
                  <WeAreHereButton
                    title="Contact Us"
                    arrowColor="#6E533D"
                    style={{ backgroundColor: "white", color: "#6E533D" }}
                  />
                </div>
              </div>
            )}
            {(matches.medium || matches.small) && (
              <div
                className="WeAreHere-container"
                style={{
                  transform: matches.small && "scale(0.9)",

                  paddingLeft: matches.small && 0,
                  paddingRight: matches.small && 0,
                }}
              >
                <div
                  className="OurCommunityHeader-title"
                  style={{
                    fontSize: matches.small && 43,
                  }}
                >
                  We are here, it<b className="normal">'</b>s time for you to
                  join TIJ.
                </div>

                <p
                  className="OurCommunityHeader-paragraph"
                  style={{ width: "auto" }}
                >
                  It will take less than 10 minutes for you to submit your
                  application <br /> for affiliation. We will get back to you as
                  soon as possible!
                </p>

                <div style={{ display: "flex", gap: 10 }}>
                  <WeAreHereButton title="Join Us" />
                  <WeAreHereButton
                    title="Contact Us"
                    arrowColor="#6E533D"
                    style={{ backgroundColor: "white", color: "#6E533D" }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
    </BackgroundImage>
  );
}
