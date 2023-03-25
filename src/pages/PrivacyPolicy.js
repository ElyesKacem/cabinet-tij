import React from "react";
import Media from "react-media";
import DownArrow from "../assets/images/DownArrow.png";
import { LangContext } from "../context/Lang.context";

export default function TermOfUse() {
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 583px)",
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 583px)",
  };
  const data = {
    fr: {
      h1: "Politique de Confidentialité ",
      parag:
        "TIJ s'engage à protéger la confidentialité des données personnelles de ses clients et de ses utilisateurs. Les informations collectées sont utilisées pour répondre à leurs demandes et pour améliorer l'expérience utilisateur. Nous ne divulguons aucune information à des tiers, sauf dans les cas où cela est exigé par la loi ou les autorités compétentes.",
    },
    en: {
      h1: "Privacy Policy",
      parag:
        "TIJ is committed to protecting the privacy of its customers and users' personal data. The information collected is used to respond to their requests and to improve the user experience. We do not disclose any information to third parties, except where required by law or competent authorities",
    },
  };

  const { lang } = React.useContext(LangContext);
  if (!lang) {
    // return texts.fr;
  } else {
    // return texts[lang];
  }
  const blueTitle = {
    fontSize: 20,
    color: "#2f49e7",
  };

  const [text, setText] = React.useState(data["fr"]);

  React.useEffect(() => {
    setText(data[lang]);
  }, [lang]);

  return (
    <div
      id="termeofuse"
      style={{
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="TalkToUsNowSection-background"
    >
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
      <div style={{ width: "85%" }}>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              <div
                className="EnrollementImage-title"
                style={{ fontSize: matches.small && "7vh" }}
              >
                {text.h1}
              </div>
            </React.Fragment>
          )}
        </Media>
        <br />
        <br />
        <img
          src={DownArrow}
          style={{ width: 40, margin: "auto" }}
          className="EnrollementImage-Arrow"
        />
        <br />
        <br />
        <br />

        <p
          style={{
            color: "white",

            lineHeight: "1.5",
            marginTop: 50,
            fontSize: 22,
          }}
        >
          {text.parag}
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
