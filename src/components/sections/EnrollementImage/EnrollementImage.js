import React from "react";
import "./EnrollementImage.css";
import Background from "../../../assets/images/EnrollementImage.jpg";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import DownArrow from "../../../assets/images/DownArrow.png";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";
import GetText from "./EnrollementImage.lang";
import { FadeDown, FadeUp } from "../../../assets/Animations/Fade";

export default function EnrollementImage() {
  const text = GetText();
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
                  <FadeDown>
                    <div
                      className="EnrollementImage-title"
                      style={{ fontSize: matches.small ? 45 : 60 }}
                    >
                      {text.title}
                    </div>
                    <div className="EnrollementImage-paragraph">
                      {text.paragraph1}
                      <br /> {text.paragraph2}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src={DownArrow} className="EnrollementImage-Arrow" />
                  </FadeDown>
                </div>
              )}

              {matches.large && (
                <FadeDown>
                  <div>
                    <div className="EnrollementImage-title">{text.title}</div>
                    <div className="EnrollementImage-paragraph">
                      {text.paragraph1}
                      <br /> {text.paragraph2}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src={DownArrow} className="EnrollementImage-Arrow" />
                  </div>
                </FadeDown>
              )}
            </React.Fragment>
          )}
        </Media>
      </div>
    </BackgroundImage>
  );
}
