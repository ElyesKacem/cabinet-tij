import React from "react";
import BackgroundImage from "../../backgroundImage/backgroundImage";
import LeftRightButton from "../../buttons/leftRightButton/leftRightButton";
import "./proJoinOurTeam.css";
import Background from "../../../assets/images/meeting.jpg";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";
import { HashLink } from "react-router-hash-link";

export default function ProJoinOurTeam() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 686px)",
    medium: "(max-width: 686px)",
    small: "(max-width: 500px)",
  };
  return (
    <div>
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <>
                <BackgroundImage
                  style={{ height: 550 }}
                  img={Background}
                  rgba1="0,0,0"
                  rgba2="0,0,0"
                  opacity="0.3"
                >
                  <div className="proJoinOurTeam-content">
                    <VerticalBar top="100px" left="50px" />
                    <VerticalBar top="200px" left="70%" />
                    <VerticalBar top="400px" left="90%" />

                    <div className="proJoinOurTeam-content-header">
                      Professional ? <br />{" "}
                      <b style={{ fontSize: 50 }}>Join Our team</b>
                    </div>
                    <div className="proJoinOurTeam-content-paragraph">
                      join our community and be a part of something special .
                    </div>
                    <div className="proJoinOurTeam-content-paragraph">
                      Together, we can make a difference and create meaningful
                      change.
                    </div>

                    <HashLink
                      className="resetcss"
                      smooth
                      to="/enrollement#enrollement"
                    >
                      <LeftRightButton
                        title="Career"
                        style={{ transform: "translateY(35px)" }}
                        iconStyle={{ transform: "translateY(-1px)" }}
                      />
                    </HashLink>
                  </div>
                </BackgroundImage>
              </>
            )}
            {matches.medium && (
              <>
                <BackgroundImage
                  style={{ height: 750 }}
                  img={Background}
                  rgba1="0,0,0"
                  rgba2="0,0,0"
                  opacity="0.3"
                >
                  <div
                    className="proJoinOurTeam-content"
                    style={{
                      height: "100%",
                    }}
                  >
                    {/* <VerticalBar top="100px" left="50px" />
                    <VerticalBar top="200px" left="70%" />
                    <VerticalBar top="400px" left="90%" /> */}
                    <div style={{ padding: 20 }}>
                      <div
                        className="proJoinOurTeam-content-header"
                        style={{ fontSize: matches.small && 48 }}
                      >
                        Professional ? <br />{" "}
                        <b style={{ fontSize: 50 }}>Join Our team</b>
                      </div>
                      <div className="proJoinOurTeam-content-paragraph">
                        join our community and be a part of something special .
                      </div>
                      <div className="proJoinOurTeam-content-paragraph">
                        Together, we can make a difference and create meaningful
                        change.
                      </div>
                      <HashLink
                        className="resetcss"
                        smooth
                        to="/enrollement#enrollement"
                      >
                        <LeftRightButton
                          iconStyle={{ transform: "translateY(-1px)" }}
                          title="Career"
                          style={{
                            transform: "translateY(35px)",
                            margin: "auto",
                          }}
                        />
                      </HashLink>
                    </div>
                  </div>
                </BackgroundImage>
              </>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}
