import React from "react";
import "./video.css";
import video from "../../../assets/video/video.mp4";
import LeftRightButton from "../../buttons/leftRightButton/leftRightButton";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";
import GetLang from "./video.lang";

const GLOBAL_MEDIA_QUERIES = {
  large: "(min-width: 1210px) ",
  medium: " (min-width:1110px) and (max-width: 1210px)",
  small: "(max-width:1110px)",
  // medium: "(min-width: 600px) and (max-width: 1199px)",
};

export default function VideoSection() {
  const texts = GetLang();

  return (
    <React.Fragment>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.small && (
              <div
                className="flexalignjustify"
                style={{
                  flexDirection: "column",
                  fontFamily: "Gilroy-Regular",
                }}
              >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <b>{texts.We_Provide_Outsourced}</b>
                <br />

                <div
                  className="videoContentMiddle"
                  style={{ color: "#0827D5", fontSize: 55 }}
                >
                  {texts.Translation}
                  <div
                    style={{
                      fontFamily: "sans-serif",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    &
                  </div>
                  {texts.Interpreting}
                </div>
                <br />

                <b>{texts.For_small_and_mid_sized_businesses}</b>

                <br />
                <div style={{ display: "flex" }}>
                  <div>
                    <LeftRightButton title={texts.LearnMore} />
                  </div>
                  <div style={{ marginLeft: 18 }}>
                    <LeftRightButton isBlue={true} title={texts.GetinTouch} />
                  </div>
                </div>

                <br />
                <br />
                <br />
                <div style={{ padding: 30 }}>
                  <video src={video} autoPlay loop muted></video>
                </div>
              </div>
            )}
            {matches.medium && (
              <div className="wrapper">
                <VerticalBar top="55%" left="50px" />
                <VerticalBar top="20%" left="45%" />
                <VerticalBar top="30%" left="92%" />
                <video src={video} autoPlay loop muted></video>
                <div className="videoContent">
                  <div>
                    <b>{texts.We_Provide_Outsourced}</b>
                  </div>
                  <br />

                  <div className="videoContentMiddle" style={{ fontSize: 70 }}>
                    {texts.Translation}
                    <div
                      style={{ fontFamily: "sans-serif", textAlign: "center" }}
                    >
                      &
                    </div>
                    {texts.Interpreting}
                  </div>
                  <br />

                  <div>
                    <b>{texts.For_small_and_mid_sized_businesses}</b>
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div>
                      <LeftRightButton title={texts.LearnMore} />
                    </div>
                    <div style={{ marginLeft: 18 }}>
                      <LeftRightButton title={texts.GetinTouch} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {matches.large && (
              <div className="wrapper">
                <VerticalBar top="55%" left="50px" />
                <VerticalBar top="20%" left="45%" />
                <VerticalBar top="30%" left="92%" />
                <video src={video} autoPlay loop muted></video>
                <div className="videoContent">
                  <div>
                    <b
                      style={{ fontWeight: "normal" }}
                      className="regular-font Gilroy-Regular"
                    >
                      {texts.We_Provide_Outsourced}
                    </b>
                  </div>
                  <br />

                  <div className="videoContentMiddle" style={{ fontSize: 90 }}>
                    {texts.Translation}
                    <div
                      style={{ fontFamily: "sans-serif", textAlign: "center" }}
                    >
                      &
                    </div>
                    {texts.Interpreting}
                  </div>
                  <br />

                  <div>
                    <b
                      style={{ fontWeight: "normal" }}
                      className="regular-font Gilroy-Regular"
                    >
                      {texts.For_small_and_mid_sized_businesses}
                    </b>
                  </div>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div>
                      <LeftRightButton title={texts.LearnMore} />
                    </div>
                    <div style={{ marginLeft: 18 }}>
                      <LeftRightButton title={texts.GetinTouch} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
    </React.Fragment>
  );
}
