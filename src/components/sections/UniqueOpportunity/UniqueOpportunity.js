import React from "react";
import "./UniqueOpportunity.css";
import OurCommunityMap from "../../../assets/images/OurCommunity/ourCommunityMap.png";
import Media from "react-media";

export default function UniqueOpportunity() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1133px)",
    medium: "(min-width: 1009px) and (max-width: 1133px)",

    small: "(max-width: 1009px)",
  };
  return (
    <div className="UniqueOpportunity-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <div>
                <div>
                  <div className="grey-square" />
                  <div className="UniqueOpportunity-blueTitle">
                    A Unique Opportunity To Develop Your
                  </div>
                  <div className="UniqueOpportunity-blueTitle">
                    Activity Serenely
                  </div>
                </div>
                <br />
                <div className="UniqueOpportunity-paragraph">
                  TIJ is looking to bring on board interpreters and translators
                  to provide them
                </div>
                <div className="UniqueOpportunity-paragraph">
                  {" "}
                  with the necessary support to excel in the language service
                  field{" "}
                </div>
                <br />
                <br />
                <div className="UniqueOpportunity-blackTitle">
                  Reasons To Join Us
                </div>
                <br />
              </div>
            )}
            {matches.medium && (
              <div style={{ transform: "scale(0.8)" }}>
                <div>
                  <div className="grey-square" />
                  <div className="UniqueOpportunity-blueTitle">
                    A Unique Opportunity To Develop Your
                  </div>
                  <div className="UniqueOpportunity-blueTitle">
                    Activity Serenely
                  </div>
                </div>
                <br />
                <div className="UniqueOpportunity-paragraph">
                  TIJ is looking to bring on board interpreters and translators
                  to provide them
                </div>
                <div className="UniqueOpportunity-paragraph">
                  {" "}
                  with the necessary support to excel in the language service
                  field{" "}
                </div>
                <br />
                <br />
                <div className="UniqueOpportunity-blackTitle">
                  Reasons To Join Us
                </div>
                <br />
              </div>
            )}
            {matches.small && (
              <div style={{ transform: "scale(0.8)" }}>
                <div>
                  <div className="UniqueOpportunity-blueTitle">
                    <span style={{ position: "relative" }}>
                      <div style={{ left: 0 }} className="grey-square" />
                      <span style={{ position: "relative" }}>A</span>
                    </span>{" "}
                    Unique Opportunity To Develop Activity Serenely
                  </div>
                </div>
                <br />
                <div className="UniqueOpportunity-paragraph">
                  TIJ is looking to bring on board interpreters and translators
                  to provide them
                </div>
                <div className="UniqueOpportunity-paragraph">
                  {" "}
                  with the necessary support to excel in the language service
                  field{" "}
                </div>
                <br />
                <br />
                <div className="UniqueOpportunity-blackTitle">
                  Reasons To Join Us
                </div>
                <br />
              </div>
            )}
          </React.Fragment>
        )}
      </Media>

      <br />
      <img src={OurCommunityMap} style={{ width: "80%" }} />
      <br />
      <br />
    </div>
  );
}
