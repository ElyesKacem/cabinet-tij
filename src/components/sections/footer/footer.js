import React from "react";
import "./footer.js";
// import Container from '@mui/material/Container';
import CabinetTIJ from "../../../assets/images/logo.png";
import GoogleMaps from "../../../assets/images/footer/googleMaps.png";
import LinkedIn from "../../../assets/images/footer/linkedin.png";
import Facebook from "../../../assets/images/footer/facebook.png";
import Instagram from "../../../assets/images/footer/instagram.png";
import FooterText from "../../footerText/footerText.js";
import Media from "react-media";
import "./footer.css";
import { HashLink } from "react-router-hash-link";

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
                    <div
                      className="flexalignjustify"
                      style={{ gap: 5, transform: "translateX(10px)" }}
                    >
                      <a href="https://goo.gl/maps/7SrAawYYk3GdMg2u6">
                        <img
                          className="footer-icons"
                          src={GoogleMaps}
                          style={{ height: 30 }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/company/cabinet-tij/">
                        <img
                          className="footer-icons"
                          src={LinkedIn}
                          style={{ height: 30 }}
                        />
                      </a>
                      <a href="https://www.facebook.com/cabinet.TIJ?mibextid=LQQJ4d">
                        <img
                          className="footer-icons"
                          src={Facebook}
                          style={{ height: 30, marginLeft: 4 }}
                        />
                      </a>
                      <a href="https://instagram.com/cabinet_tij_de_france?igshid=YmMyMTA2M2Y=">
                        <img
                          className="footer-icons"
                          src={Instagram}
                          style={{ height: 38 }}
                        />
                      </a>
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
                    style={{ transform: "translateX(40px)", marginRight: 40 }}
                  >
                    <FooterText title="Solutions" />
                  </div>

                  <div style={{ transform: "translateX(110px)" }}>
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
                  {/* <div style={{ display: "flex" }}>
                    <FooterText
                      title="About"
                      content="We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial."
                    />
                    <FooterText title="Support" content="Contact Us" />
                  </div>
                  <div style={{ display: "flex" }}>
                    <FooterText title="Solutions" />
                    <FooterText title="Information" content=" " />
                  </div> */}
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
                        content="We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial."
                      />
                      <FooterText title="Solutions" />
                    </div>
                    <div>
                      <FooterText title="Support" content="Contact Us" />
                      <FooterText
                        style={{ transform: "translateY(50px)" }}
                        title="Information"
                        content=" "
                      />
                    </div>
                  </div>
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
                  <div
                    className="flexalignjustify"
                    style={{ gap: 5, transform: "translateX(10px)" }}
                  >
                    <a href="https://goo.gl/maps/7SrAawYYk3GdMg2u6">
                      <img
                        className="footer-icons"
                        src={GoogleMaps}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/cabinet-tij/">
                      <img
                        className="footer-icons"
                        src={LinkedIn}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a href="https://www.facebook.com/cabinet.TIJ?mibextid=LQQJ4d">
                      <img
                        className="footer-icons"
                        src={Facebook}
                        style={{ height: 30, marginLeft: 4 }}
                      />
                    </a>
                    <a href="https://instagram.com/cabinet_tij_de_france?igshid=YmMyMTA2M2Y=">
                      <img
                        className="footer-icons"
                        src={Instagram}
                        style={{ height: 38 }}
                      />
                    </a>
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
                  <div
                    className="flexalignjustify"
                    style={{ gap: 5, transform: "translateX(10px)" }}
                  >
                    <a href="https://goo.gl/maps/7SrAawYYk3GdMg2u6">
                      <img
                        className="footer-icons"
                        src={GoogleMaps}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/cabinet-tij/">
                      <img
                        className="footer-icons"
                        src={LinkedIn}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a href="https://www.facebook.com/cabinet.TIJ?mibextid=LQQJ4d">
                      <img
                        className="footer-icons"
                        src={Facebook}
                        style={{ height: 30, marginLeft: 4 }}
                      />
                    </a>
                    <a href="https://instagram.com/cabinet_tij_de_france?igshid=YmMyMTA2M2Y=">
                      <img
                        className="footer-icons"
                        src={Instagram}
                        style={{ height: 38 }}
                      />
                    </a>
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
          color: "#d9d9d9",
          backgroundColor: "black",
          position: "relative",
          zIndex: "3",
        }}
      >
        <div className="footer-b-container">
          <HashLink
            style={{
              color: "#d9d9d9",
              textDecoration: "none",
              cursor: "pointer",
            }}
            className="resetcss"
            smooth
            to="/termeofuse#termeofuse"
          >
            <div>
              Terms of use &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; Privacy and Policy
            </div>
          </HashLink>
          <div>All Copyrights © are reserved 2022</div>
        </div>
      </div>
    </div>
  );
}
