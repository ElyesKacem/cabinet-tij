import React from "react";
import "./footerText.css";
import EastIcon from "@mui/icons-material/East";
import { LangContext } from "../../context/Lang.context";
import { HashLink } from "react-router-hash-link";

export default function FooterText(props) {
  const { lang } = React.useContext(LangContext);
  const ms = {
    ...props.style,
  };
  const ms2 = {
    ...props.style2,
  };
  return (
    <div className="FooterText" style={ms}>
      <div className="footerText-title">
        <div className="footerText-title-arrow">
          <EastIcon />
        </div>
        <div className="footerText-title">&nbsp;&nbsp;&nbsp;{props.title}</div>
      </div>
      <br />
      <div className="footerText-content" style={ms2}>
        {props.title != "Support" &&
          props.title !=
            ("Aide" || "Support" || "Information" || "Informations") &&
          props.content}
        {props.title == "Aide" && (
          <HashLink
            style={{ cursor: "pointer" }}
            className="resetcss"
            smooth
            to="/TalkToUsNow#contact"
          >
            Contactez-nous
          </HashLink>
        )}
        {props.title == "Support" && (
          <HashLink
            style={{ cursor: "pointer" }}
            className="resetcss"
            smooth
            to="/TalkToUsNow#contact"
          >
            Contact us{" "}
          </HashLink>
        )}
        {props.title == "Services" &&
          (lang == "en" ? (
            <>
              Interpretation
              <br />
              <br />
              Translation
              <br />
              <br />
              Sworn Translation
              <br />
              <br />
              Professional Services
              <br />
              <br />
              Personal Services
              <br />
              <br />
            </>
          ) : (
            <>
              Interprétariat
              <br />
              <br />
              Traduction
              <br />
              <br />
              Traduction assermentée
              <br />
              <br />
              Services aux entreprises
              <br />
              <br />
              Particuliers
              <br />
              <br />
            </>
          ))}
        {(props.title == "Information" || props.title == "Informations") && (
          <>
            contact@cabinet-tij.com
            <br />
            <br />
            +33 1 53 67 44 72
            <br />
            <br />
            +33 6 99 08 64 91
            <br />
            <br />
            42 Avenue Montaigne, <br /> 75008 Paris.
          </>
        )}
      </div>
    </div>
  );
}
