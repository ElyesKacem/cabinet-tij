import React from "react";
import "./UniqueOpportunity.css";
import OurCommunityMap from "../../../assets/images/OurCommunity/ourCommunityMap.png";
import OurCommunityMapFr from "../../../assets/images/OurCommunity/ourCommunityMapFr.png";
import OurCommunityMapMobile from "../../../assets/images/OurCommunity/ourCommunityMapMobile.png";
import OurCommunityMapMobileFr from "../../../assets/images/OurCommunity/ourCommunityMapMobileFr.png";
import Media from "react-media";
import GetText from "./UniqueOpportunity.lang";
import { LangContext } from "../../../context/Lang.context";

export default function UniqueOpportunity() {
  const { lang } = React.useContext(LangContext);
  const t = GetText();
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
              <>
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="UniqueOpportunity-blueTitle">
                      <span style={{ position: "relative" }}>
                        <div style={{ left: 0 }} className="grey-square" />
                        <span style={{ position: "relative" }}>{t.h1}</span>
                      </span>{" "}
                      {t.h2}
                    </div>
                  </div>
                  <br />
                  <div className="UniqueOpportunity-paragraph">{t.l1}</div>
                  <div className="UniqueOpportunity-paragraph">{t.l2}</div>
                  <br />
                  <br />
                  <div className="UniqueOpportunity-blackTitle">{t.bh1}</div>
                  <br />
                </div>
                <br />
                <img
                  src={lang == "en" ? OurCommunityMap : OurCommunityMapFr}
                  style={{ width: "80%" }}
                />
                <br />
                <br />
              </>
            )}
            {matches.medium && (
              <>
                <div style={{ transform: "scale(0.8)" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="UniqueOpportunity-blueTitle">
                      <span style={{ position: "relative" }}>
                        <div style={{ left: 0 }} className="grey-square" />
                        <span style={{ position: "relative" }}>{t.h1}</span>
                      </span>{" "}
                      {t.h2}
                    </div>
                  </div>
                  <br />
                  <div className="UniqueOpportunity-paragraph">{t.l1}</div>
                  <div className="UniqueOpportunity-paragraph">{t.l2}</div>
                  <br />
                  <br />
                  <div className="UniqueOpportunity-blackTitle">{t.bh1}</div>
                  <br />
                </div>
                <br />
                <img
                  src={lang == "en" ? OurCommunityMap : OurCommunityMapFr}
                  style={{ width: "80%" }}
                />
                <br />
                <br />
              </>
            )}
            {matches.small && (
              <>
                <div style={{ transform: "scale(0.8)" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="UniqueOpportunity-blueTitle">
                      <span style={{ position: "relative" }}>
                        <div style={{ left: 0 }} className="grey-square" />
                        <span style={{ position: "relative" }}>{t.h1}</span>
                      </span>{" "}
                      {t.h2}
                    </div>
                  </div>
                  <br />
                  <div className="UniqueOpportunity-paragraph">{t.l1}</div>
                  <div className="UniqueOpportunity-paragraph">{t.l2}</div>
                  <br />
                  <br />
                  <div className="UniqueOpportunity-blackTitle">{t.bh1}</div>
                  <br />
                </div>
                <br />
                <img
                  src={
                    lang == "en"
                      ? OurCommunityMapMobile
                      : OurCommunityMapMobileFr
                  }
                  style={{ width: 300 }}
                />
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}
