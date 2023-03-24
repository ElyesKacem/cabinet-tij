import React from "react";
import "./OurCommunityHeader.css";
import Grid from "@mui/material/Grid";
import DownArrow from "../../../assets/images/DownArrow.png";
import HoverImage from "../../HoverImage/HoverImage";
import Image1 from "../../../assets/images/OurCommunity/ourCommunityHeader.jpg";
import ActivityButton from "../../../assets/images/OurCommunity/Activity.png";
import FlexibleButton from "../../../assets/images/OurCommunity/Flexible.png";
import IncomeButton from "../../../assets/images/OurCommunity/Income.png";
import SupportButton from "../../../assets/images/OurCommunity/Support.png";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";

export default function OurCommunityHeader() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1386px)",
    medium: "(min-width: 1300px) and (max-width: 1386px)",
    smallerMedium: "(min-width: 1223px) and (max-width: 1300px)",
    small: "(max-width: 1223px)",
    smallerSmall: "(max-width: 746px)",
    verySmall: "(max-width: 583px)",
  };
  return (
    <div className="TalkToUsNowSection-background">
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
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <div className="OurCommunityHeader-container">
                <Grid container>
                  <Grid item xs={6}>
                    <div className="OurCommunityHeader-title">
                      Take part in our
                    </div>
                    <div className="OurCommunityHeader-title blue">
                      Community
                    </div>
                    <br />
                    <div className="OurCommunityHeader-paragraph">
                      TIJ is always on the lookout for multilingual individuals
                      who are passionate about language to become a part of our
                      national translator and interpreter network. We help these
                      talented individuals to advance their careers in the field
                      of language solutions.
                    </div>
                    <br />
                    <br />
                    <img
                      src={DownArrow}
                      className="EnrollementImage-Arrow"
                      style={{ height: 60, width: "auto", marginLeft: "40%" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ width: 650, transform: "translateY(20px)" }}>
                      <HoverImage img={Image1} />
                      <img
                        src={ActivityButton}
                        className="EnrollementImage-flyButton EnrollementImage-tl"
                      />
                      <img
                        src={IncomeButton}
                        className="EnrollementImage-flyButton EnrollementImage-bl"
                      />
                      <img
                        src={FlexibleButton}
                        className="EnrollementImage-flyButton EnrollementImage-tr"
                      />
                      <img
                        src={SupportButton}
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
                    gap: 100,
                  }}
                >
                  <div>
                    <div className="OurCommunityHeader-title">
                      Take part in our
                    </div>
                    <div className="OurCommunityHeader-title blue">
                      Community
                    </div>
                    <br />
                    <div className="OurCommunityHeader-paragraph">
                      TIJ is always on the lookout for multilingual individuals
                      who are passionate about language to become a part of our
                      national translator and interpreter network. We help these
                      talented individuals to advance their careers in the field
                      of language solutions.
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div>
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
                        width: 650,
                        transform: "translate(-20px,-20px)",
                      }}
                    >
                      <HoverImage img={Image1} />
                      <img
                        src={ActivityButton}
                        className="EnrollementImage-flyButton EnrollementImage-tl"
                      />
                      <img
                        src={IncomeButton}
                        className="EnrollementImage-flyButton EnrollementImage-bl"
                      />
                      <img
                        src={FlexibleButton}
                        className="EnrollementImage-flyButton EnrollementImage-tr"
                      />
                      <img
                        src={SupportButton}
                        className="EnrollementImage-flyButton EnrollementImage-br"
                      />
                    </div>{" "}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={DownArrow}
                        className="EnrollementImage-Arrow"
                        style={{ height: 60, width: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
                  <div className="OurCommunityHeader-title">
                    Take part in our
                  </div>
                  <div className="OurCommunityHeader-title blue">Community</div>
                  <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
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
                        src={ActivityButton}
                        className="EnrollementImage-flyButton EnrollementImage-tl"
                      />
                      <img
                        src={IncomeButton}
                        className="EnrollementImage-flyButton EnrollementImage-bl"
                      />
                      <img
                        src={FlexibleButton}
                        className="EnrollementImage-flyButton EnrollementImage-tr"
                      />
                      <img
                        src={SupportButton}
                        className="EnrollementImage-flyButton EnrollementImage-br"
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={DownArrow}
                        className="EnrollementImage-Arrow"
                        style={{
                          height: 60,
                          width: "auto",
                          transform: matches.verySmall && "translateY(-100px)",
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
                      TIJ is always on the lookout for multilingual individuals
                      who are passionate about language to become a part of our
                      national translator and interpreter network. We help these
                      talented individuals to advance their careers in the field
                      of language solutions.
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
    </div>
  );
}
