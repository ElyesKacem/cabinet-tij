import React from "react";
import "./footer.js";
import Grid from "@mui/material/Grid";
// import Container from '@mui/material/Container';
import CabinetTIJ from "../../../assets/images/logo.png";
import GoogleMaps from "../../../assets/images/googleMaps.png";
import LinkedIn from "../../../assets/images/LinkedIn.png";
import FooterText from "../../footerText/footerText.js";
import Media from "react-media";
import "./footer.css";

export default function Footer() {
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1222px)",
    medium: "(max-width: 1222px) and (min-width: 851px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    small: "(max-width: 850px)",
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <div>
            {matches.large && (
              <>
                <div
                  className="footer-container"
                  style={{ transform: "translateX(-50px)" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transform: "translateY(-30px)",
                      marginRight: 30,
                    }}
                  >
                    <img src={CabinetTIJ} style={{ height: 200 }} />
                    <div>
                      <img src={GoogleMaps} style={{ height: 30 }} />
                      <img src={LinkedIn} style={{ height: 30 }} />
                    </div>
                  </div>

                  <div style={{ transform: "translateX(10px)" }}>
                    <FooterText
                      title="About"
                      content="We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial."
                    />
                    <br />
                    <br />
                    <FooterText title="Support" content="Contact Us" />
                  </div>

                  <div
                    style={{ transform: "translateX(10px)", marginRight: 40 }}
                  >
                    <FooterText title="Solutions" />
                  </div>

                  <div style={{ transform: "translateX(80px)" }}>
                    <FooterText title="Information" content=" " />
                  </div>
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <div
                  className="footer-container"
                  style={{ flexDirection: "column", alignItems: "center" }}
                >
                  <br />
                  <br />

                  <div
                    style={{
                      display: "flex",
                      gap: 70,
                      transform: "translateX(50px)",
                    }}
                  >
                    <div>
                      <FooterText
                        title="About"
                        content="We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial."
                      />
                      <FooterText title="Solutions" />
                    </div>
                    <div>
                      <FooterText title="Support" content="Contact Us" />
                      <FooterText title="Information" content=" " />
                    </div>
                  </div>

                  <div></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <img src={CabinetTIJ} style={{ height: 200 }} />
                  <div>
                    <img src={GoogleMaps} style={{ height: 30 }} />
                    <img src={LinkedIn} style={{ height: 30 }} />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
              </>
            )}
            {matches.small && (
              <>
                <div
                  className="footer-container"
                  style={{ flexDirection: "column", alignItems: "center" }}
                >
                  <br />
                  <br />

                  <div style={{ transform: "translateX(10px)" }}>
                    <div>
                      <FooterText
                        title="About"
                        content="We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial."
                      />
                      <FooterText title="Solutions" />
                    </div>
                    <div>
                      <FooterText title="Information" content=" " />
                      <FooterText title="Support" content="Contact Us" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transform: "translateY(-60px)",
                  }}
                >
                  <img src={CabinetTIJ} style={{ height: 200 }} />
                  <div>
                    <img src={GoogleMaps} style={{ height: 30 }} />
                    <img src={LinkedIn} style={{ height: 30 }} />
                  </div>
                </div>
                <br />
                <br />
              </>
            )}
          </div>
        )}
      </Media>

      {/* <br /><br /><br /><br /><br /> */}
      <div
        style={{
          height: 40,
          color: "white",
          backgroundColor: "black",
          position: "relative",
          zIndex: "3",
        }}
      >
        <div className="footer-b-container">
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/termeofuse"
          >
            Terms of use | Privacy and Policy
          </a>
          <div>All Copyrights © are reserved 2022</div>
        </div>
      </div>
    </div>
  );
}
