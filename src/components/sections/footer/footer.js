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
import GetText from "./footer.lang.js";
import { LangContext } from "../../../context/Lang.context.js";

export default function Footer() {
  const { lang } = React.useContext(LangContext);
  const text = GetText();
  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1253px)",
    medium: "(max-width: 1253px) and (min-width: 850px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    small: "(max-width: 850px)",
    vsmall: "(max-width: 376px)",
    mediumSmall: "(max-width: 573px)",
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
                  style={{ transform: "translateX(-56px)" }}
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
                      <a
                        target="_blank"
                        href="https://goo.gl/maps/7SrAawYYk3GdMg2u6"
                      >
                        <img
                          className="footer-icons"
                          src={GoogleMaps}
                          style={{ height: 30 }}
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/cabinet-tij/"
                      >
                        <img
                          className="footer-icons"
                          src={LinkedIn}
                          style={{ height: 30 }}
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/cabinet.TIJ?mibextid=LQQJ4d"
                      >
                        <img
                          className="footer-icons"
                          src={Facebook}
                          style={{ height: 30, marginLeft: 4 }}
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://instagram.com/cabinet_tij_de_france?igshid=YmMyMTA2M2Y="
                      >
                        <img
                          className="footer-icons"
                          src={Instagram}
                          style={{ height: 38 }}
                        />
                      </a>
                    </div>
                  </div>

                  <div style={{ transform: "translateX(10px)" }}>
                    <FooterText title={text.about} content={text.about_pg} />
                    <br />
                    <br />

                    <FooterText
                      title={text.support}
                      content={text.contact_us}
                    />
                  </div>

                  <div
                    style={{ transform: "translateX(40px)", marginRight: 40 }}
                  >
                    <FooterText title="Services" />
                  </div>

                  <div style={{ transform: "translateX(110px)" }}>
                    <FooterText
                      title={lang == "en" ? "Information" : "Informations"}
                      content=" "
                    />
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
                      <FooterText title={text.about} content={text.about_pg} />
                      <FooterText title="Services" />
                    </div>
                    <div>
                      <HashLink
                        className="resetcss"
                        smooth
                        to="/TalkToUsNow#contact"
                      >
                        <FooterText
                          title={text.support}
                          content={text.contact_us}
                        />
                      </HashLink>
                      <FooterText
                        style={{
                          transform:
                            lang == "en"
                              ? "translateY(50px)"
                              : "translateY(20px)",
                        }}
                        title={lang == "en" ? "Information" : "Informations"}
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
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/7SrAawYYk3GdMg2u6"
                    >
                      <img
                        className="footer-icons"
                        src={GoogleMaps}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/cabinet-tij/"
                    >
                      <img
                        className="footer-icons"
                        src={LinkedIn}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/cabinet.TIJ?mibextid=LQQJ4d"
                    >
                      <img
                        className="footer-icons"
                        src={Facebook}
                        style={{ height: 30, marginLeft: 4 }}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://instagram.com/cabinet_tij_de_france?igshid=YmMyMTA2M2Y="
                    >
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

                  <div>
                    <div>
                      <FooterText title={text.about} content={text.about_pg} />
                      <FooterText
                        style2={{ textAlign: "center" }}
                        title="Services"
                      />
                    </div>
                    <div>
                      <FooterText
                        title={lang == "en" ? "Information" : "Informations"}
                        content=" "
                      />
                      <HashLink
                        className="resetcss"
                        smooth
                        to="/TalkToUsNow#contact"
                      >
                        <FooterText
                          title={text.support}
                          content={text.contact_us}
                        />
                      </HashLink>
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
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/7SrAawYYk3GdMg2u6"
                    >
                      <img
                        className="footer-icons"
                        src={GoogleMaps}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/cabinet-tij/"
                    >
                      <img
                        className="footer-icons"
                        src={LinkedIn}
                        style={{ height: 30 }}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/cabinet.TIJ?mibextid=LQQJ4d"
                    >
                      <img
                        className="footer-icons"
                        src={Facebook}
                        style={{ height: 30, marginLeft: 4 }}
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://instagram.com/cabinet_tij_de_france?igshid=YmMyMTA2M2Y="
                    >
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
          // height: 40,
          padding: 10,
          color: "#d9d9d9",
          backgroundColor: "black",
          position: "relative",
          zIndex: "3",
          textAlign: "center",
        }}
      >
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              <div className="footer-b-container">
                <div
                  style={{
                    color: "#d9d9d9",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>
                      <HashLink
                        style={{ cursor: "pointer" }}
                        className="resetcss"
                        smooth
                        to="/termeofuse#termeofuse"
                      >
                        {lang == "en" ? "Terms of use" : "Mentions légales"}{" "}
                        {!matches.mediumSmall && <>&nbsp;</>}
                      </HashLink>
                    </div>
                    <div style={{ marginLeft: 5, marginRight: 5 }}>|</div>
                    <div>
                      <HashLink
                        style={{ cursor: "pointer" }}
                        className="resetcss"
                        smooth
                        to="/PrivacyPolicy#"
                      >
                        {!matches.mediumSmall && <>&nbsp;&nbsp;</>}
                        {lang == "en"
                          ? "Privacy Policy"
                          : "Politique de Confidentialité"}
                      </HashLink>
                    </div>
                  </div>
                </div>

                <div style={{ minWidth: 110 }}>
                  {lang == "en"
                    ? "All Copyrights © are reserved 2023"
                    : "Tous droits © réservés 2023"}
                </div>
              </div>
            </React.Fragment>
          )}
        </Media>
      </div>
    </div>
  );
}
