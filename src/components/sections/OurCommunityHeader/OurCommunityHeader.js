import React from "react";
import "./OurCommunityHeader.css";
import Grid from "@mui/material/Grid";
import DownArrow from "../../../assets/images/DownArrow.png";
import HoverImage from "../../HoverImage/HoverImage";
import Image1 from "../../../assets/images/OurCommunity/ourCommunityHeader.jpg";
import ActivityButton from "../../../assets/images/OurCommunity/Activity.png";
import ActivityButtonFr from "../../../assets/images/OurCommunity/ActivityFr.png";
import FlexibleButton from "../../../assets/images/OurCommunity/Flexible.png";
import FlexibleButtonFr from "../../../assets/images/OurCommunity/FlexibleFr.png";
import IncomeButton from "../../../assets/images/OurCommunity/Income.png";
import IncomeButtonFr from "../../../assets/images/OurCommunity/IncomeFr.png";
import SupportButton from "../../../assets/images/OurCommunity/Support.png";
import SupportButtonFr from "../../../assets/images/OurCommunity/SupportFr.png";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";
import GetText from "./OurCommunityHeader.lang";
import { LangContext } from "../../../context/Lang.context";
import { FadeDown } from "../../../assets/Animations/Fade";

export default function OurCommunityHeader() {
  const { lang } = React.useContext(LangContext);
  const t = GetText();
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1386px)",
    medium: "(min-width: 1300px) and (max-width: 1386px)",
    smallerMedium: "(min-width: 1223px) and (max-width: 1300px)",
    small: "(max-width: 1223px)",
    smallerSmall: "(max-width: 746px)",
    verySmall: "(max-width: 618px)",
    veryExtraSmall: "(max-width: 400px)",
  };
  return (
    <div id="community" className="TalkToUsNowSection-background">
      <VerticalBar top="55%" left="50px" />
      <VerticalBar top="17%" left="43%" />
      <VerticalBar top="90%" left="95%" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FadeDown>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              {matches.large && (
                <div className="OurCommunityHeader-container">
                  <Grid container>
                    <Grid item xs={6}>
                      <div className="OurCommunityHeader-title">{t.wh}</div>
                      <div className="OurCommunityHeader-title blue">
                        {t.bh}
                      </div>
                      <br />
                      <div className="OurCommunityHeader-paragraph">
                        {t.parag}
                      </div>
                      <br />
                      <br />
                      <img
                        src={DownArrow}
                        className="EnrollementImage-Arrow"
                        style={{ marginLeft: "40%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <div
                        style={{
                          position: "relative",
                          width: 650,
                          transform: "translate(-px,20px)",
                        }}
                      >
                        <HoverImage img={Image1} />
                        <img
                          src={lang == "fr" ? ActivityButtonFr : ActivityButton}
                          className="EnrollementImage-flyButton EnrollementImage-tl"
                        />
                        <img
                          src={lang == "fr" ? IncomeButtonFr : IncomeButton}
                          className="EnrollementImage-flyButton EnrollementImage-bl"
                        />
                        <img
                          src={lang == "fr" ? FlexibleButtonFr : FlexibleButton}
                          className="EnrollementImage-flyButton EnrollementImage-tr"
                        />
                        <img
                          src={lang == "fr" ? SupportButtonFr : SupportButton}
                          className="EnrollementImage-flyButton EnrollementImage-br"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              )}
              {(matches.medium || matches.smallerMedium) && (
                <div className="OurCommunityHeader-container">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <div className="OurCommunityHeader-title">{t.wh}</div>
                    <div className="OurCommunityHeader-title blue">{t.bh}</div>
                    <div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          position: "relative",
                          width: 650,
                          transform: matches.verySmall
                            ? "translateY(-80px)  scale(0.5)   "
                            : matches.smallerSmall
                            ? "translateY(-20px) scale(0.8)"
                            : "translateY(-20px)",
                        }}
                      >
                        <HoverImage img={Image1} />
                        <img
                          src={lang == "fr" ? ActivityButtonFr : ActivityButton}
                          className="EnrollementImage-flyButton EnrollementImage-tl"
                        />
                        <img
                          src={lang == "fr" ? IncomeButtonFr : IncomeButton}
                          className="EnrollementImage-flyButton EnrollementImage-bl"
                        />
                        <img
                          src={lang == "fr" ? FlexibleButtonFr : FlexibleButton}
                          className="EnrollementImage-flyButton EnrollementImage-tr"
                        />
                        <img
                          src={lang == "fr" ? SupportButtonFr : SupportButton}
                          className="EnrollementImage-flyButton EnrollementImage-br"
                        />
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={DownArrow}
                          className="EnrollementImage-Arrow"
                          style={{
                            transform:
                              matches.verySmall && "translateY(-100px)",
                          }}
                        />
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div>
                      <br />
                      <div
                        className="OurCommunityHeader-paragraph"
                        style={{ width: "auto" }}
                      >
                        {t.parag}
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              )}
              {(matches.small || matches.smallerSmall || matches.verySmall) && (
                <div className="OurCommunityHeader-container">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <div className="OurCommunityHeader-title">{t.wh}</div>
                    <div className="OurCommunityHeader-title blue">{t.bh}</div>
                    <div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        style={{
                          position: "relative",
                          width: 650,
                          transform: matches.veryExtraSmall
                            ? "translateY(-80px) scale(0.44)"
                            : matches.verySmall
                            ? "translateY(-80px)  scale(0.5)   "
                            : matches.smallerSmall
                            ? "translateY(-20px) scale(0.8)"
                            : "translateY(-20px)",
                        }}
                      >
                        <HoverImage img={Image1} />
                        <img
                          src={lang == "fr" ? ActivityButtonFr : ActivityButton}
                          className="EnrollementImage-flyButton EnrollementImage-tl"
                        />
                        <img
                          src={lang == "fr" ? IncomeButtonFr : IncomeButton}
                          className="EnrollementImage-flyButton EnrollementImage-bl"
                        />
                        <img
                          src={lang == "fr" ? FlexibleButtonFr : FlexibleButton}
                          className="EnrollementImage-flyButton EnrollementImage-tr"
                        />
                        <img
                          src={lang == "fr" ? SupportButtonFr : SupportButton}
                          className="EnrollementImage-flyButton EnrollementImage-br"
                        />
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={DownArrow}
                          className="EnrollementImage-Arrow"
                          style={{
                            transform:
                              matches.verySmall && "translateY(-100px)",
                          }}
                        />
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div>
                      <br />
                      <div
                        className="OurCommunityHeader-paragraph"
                        style={{ width: "auto" }}
                      >
                        {t.parag}
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </Media>
      </FadeDown>
    </div>
  );
}
