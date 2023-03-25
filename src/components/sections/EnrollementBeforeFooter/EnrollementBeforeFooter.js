import React from "react";
import "./EnrollementBeforeFooter.css";
import DoneIcon from "../../../assets/images/DoneIcon.svg";
import Media from "react-media";
import GetText from "./EnrollementBeforeFooter.lang";
import { LangContext } from "../../../context/Lang.context";
export default function EnrollementBeforeFooter() {
  const text = GetText();
  const { lang } = React.useContext(LangContext);
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 840px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 840px)",
  };
  return (
    <div>
      <br />
      <br />

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.small && (
              <div
                className="flexalignjustify"
                style={{ gap: 70, flexDirection: "column" }}
              >
                <div data-aos="flip-left" data-aos-duration="10">
                  <div className="EnrollementBeforeFooter-element">
                    <img src={DoneIcon} />
                    <div className="EnrollementBeforeFooter-title">
                      {text.a}
                    </div>
                  </div>
                </div>

                <div data-aos="flip-left" data-aos-duration="10">
                  <div className="EnrollementBeforeFooter-element">
                    <img src={DoneIcon} />
                    <div className="EnrollementBeforeFooter-title">
                      {text.b}
                    </div>
                  </div>
                </div>

                <div data-aos="flip-left" data-aos-duration="10">
                  <div className="EnrollementBeforeFooter-element">
                    <img src={DoneIcon} />
                    <div className="EnrollementBeforeFooter-title">
                      {text.c}
                    </div>
                  </div>
                </div>

                <div data-aos="flip-left" data-aos-duration="10">
                  <div
                    className="EnrollementBeforeFooter-element"
                    style={{ transform: "translateY(20px)" }}
                  >
                    <img src={DoneIcon} />
                    {lang == "en" ? (
                      <div className="EnrollementBeforeFooter-title">
                        New Missions <br /> And <br /> Assignments
                      </div>
                    ) : (
                      <div className="EnrollementBeforeFooter-title">
                        Missions innovantes
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {matches.large && (
              <div className="flexalignjustify" style={{ gap: 70 }}>
                <div
                  data-aos="flip-left"
                  data-aos-delay="0"
                  data-aos-duration="10"
                >
                  <div className="EnrollementBeforeFooter-element">
                    <img src={DoneIcon} />
                    <div className="EnrollementBeforeFooter-title">
                      {text.a}
                    </div>
                  </div>
                </div>

                <div
                  data-aos="flip-left"
                  data-aos-delay="100"
                  data-aos-duration="10"
                >
                  <div className="EnrollementBeforeFooter-element">
                    <img src={DoneIcon} />
                    <div className="EnrollementBeforeFooter-title">
                      {text.b}
                    </div>
                  </div>
                </div>

                <div
                  data-aos="flip-left"
                  data-aos-delay="200"
                  data-aos-duration="10"
                >
                  <div className="EnrollementBeforeFooter-element">
                    <img src={DoneIcon} />
                    <div className="EnrollementBeforeFooter-title">
                      {text.c}
                    </div>
                  </div>
                </div>

                <div
                  data-aos="flip-left"
                  data-aos-delay="400"
                  data-aos-duration="10"
                >
                  <div
                    className="EnrollementBeforeFooter-element"
                    style={{ transform: lang == "en" && "translateY(20px)" }}
                  >
                    <img src={DoneIcon} />
                    {lang == "en" ? (
                      <div className="EnrollementBeforeFooter-title">
                        New Missions <br /> And <br /> Assignments
                      </div>
                    ) : (
                      <div className="EnrollementBeforeFooter-title">
                        Missions innovantes
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>

      <br />
      <br />
    </div>
  );
}
