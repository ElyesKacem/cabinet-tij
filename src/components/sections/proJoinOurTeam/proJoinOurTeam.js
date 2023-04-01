import React from "react";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import LeftRightButton from "../../buttons/leftRightButton/leftRightButton";
import "./proJoinOurTeam.css";
import Background from "../../../assets/images/meeting.jpg";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";
import GetText from "./proJoinOurTeam.lang";
import { FadeDown } from "../../../assets/Animations/Fade";
import { LangContext } from "../../../context/Lang.context";

export default function ProJoinOurTeam() {
  const text = GetText();
  const { lang } = React.useContext(LangContext);
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 600px)",
    medium: "(max-width: 600px)",
    small: "(max-width: 500px)",
  };
  return (
    <div>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {(matches.large || matches.medium) && (
              <>
                <BackgroundImage
                  style={{ height: 550 }}
                  img={Background}
                  rgba1="0,0,0"
                  rgba2="0,0,0"
                  opacity="0.3"
                >
                  <FadeDown>
                    <div className="proJoinOurTeam-content">
                      <VerticalBar top="100px" left="50px" />
                      <VerticalBar top="200px" left="70%" />
                      <VerticalBar top="400px" left="90%" />
                      {lang == "fr" && (
                        <div
                          className="proJoinOurTeam-content-header"
                          style={{
                            fontSize: matches.medium && 36,
                            padding: 10,
                          }}
                        >
                          {text.title1} <br />{" "}
                          <b
                            style={{
                              fontSize: matches.large
                                ? 50
                                : matches.medium
                                ? 30
                                : 20,
                            }}
                          >
                            {text.title2}
                          </b>
                        </div>
                      )}
                      {lang == "en" && (
                        <div
                          className="proJoinOurTeam-content-header"
                          style={{
                            fontSize: matches.medium && 43,
                            padding: 10,
                          }}
                        >
                          {text.title1} <br />{" "}
                          <b
                            style={{
                              fontSize: matches.large
                                ? 50
                                : matches.medium
                                ? 38
                                : 20,
                            }}
                          >
                            {text.title2}
                          </b>
                        </div>
                      )}

                      <div className="proJoinOurTeam-content-paragraph">
                        {text.content1}
                      </div>
                      <div className="proJoinOurTeam-content-paragraph">
                        {text.content2}
                      </div>

                      <HashLink
                        className="resetcss"
                        smooth
                        to="TakePartInOurCommunity#community"
                      >
                        <LeftRightButton
                          title={text.bt}
                          style={{ transform: "translateY(35px)" }}
                          iconStyle={{ transform: "translateY(-1px)" }}
                        />
                      </HashLink>
                    </div>
                  </FadeDown>
                </BackgroundImage>
              </>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}
