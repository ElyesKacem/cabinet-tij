import React from "react";
import Arrow from "../../../assets/images/DownArrow.png";
import "./EnrollementImage.css";
import Background from "../../../assets/images/EnrollementImage.jpg";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import DownArrow from "../../../assets/images/DownArrow.png";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";

export default function EnrollementImage() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 901px)",
    medium: "(max-width: 900px)",
    small: "(max-width: 420px)",
  };
  return (
    <BackgroundImage img={Background}>
      <VerticalBar top="55%" left="50px" />
      <VerticalBar top="17%" left="40%" />
      <VerticalBar top="90%" left="90%" />

      <div className="EnrollementImage-content" id="enrollement">
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              {matches.medium && (
                <div style={{ padding: 20 }}>
                  <div
                    className="EnrollementImage-title"
                    style={{ fontSize: matches.small ? 45 : 60 }}
                  >
                    Enrollement
                  </div>
                  <div className="EnrollementImage-paragraph">
                    We are delighted that you want to become a member of our
                    group
                    <br /> To submit your membership application, please fill
                    out the form below and attach any required documents.
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <img src={DownArrow} className="EnrollementImage-Arrow" />
                </div>
              )}

              {matches.large && (
                <div>
                  <div className="EnrollementImage-title">Enrollement</div>
                  <div className="EnrollementImage-paragraph">
                    We are delighted that you want to become a member of our
                    group
                    <br /> To submit your membership application, please fill
                    out the form below and attach any required documents.
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <img src={DownArrow} className="EnrollementImage-Arrow" />
                </div>
              )}
            </React.Fragment>
          )}
        </Media>
      </div>
    </BackgroundImage>
  );
}
