import React from "react";
import DownArrow from "../assets/images/DownArrow.png";
import { LangContext } from "../context/Lang.context";

export default function TermOfUse() {
  const data = {
    fr: {
      h1: "Politique de Confidentialité :",
      parag:
        "TIJ s'engage à protéger la confidentialité des données personnelles de ses clients et de ses utilisateurs. Les informations collectées sont utilisées pour répondre à leurs demandes et pour améliorer l'expérience utilisateur. Nous ne divulguons aucune information à des tiers, sauf dans les cas où cela est exigé par la loi ou les autorités compétentes.",
      h2: "Motions légales :",
      t1: "Nom de la société :",
      t2: "Adresse siège Social : ",
      t3: "Numéro de telephone ",
      t4: "Adresse e-mail ",
      t5: "Numéro d’immatriculation ",
      t6: "Directeur",
    },
    en: {
      h1: "Privacy Policy",
      parag:
        "TIJ is committed to protecting the privacy of its customers and users' personal data. The information collected is used to respond to their requests and to improve the user experience. We do not disclose any information to third parties, except where required by law or competent authorities",
      h2: "Terms of Use :",
      t1: "Company name :",
      t2: "Registered address :",
      t3: "Phone number :",
      t4: "Email address :",
      t5: "Registration number :",
      t6: "Director :",
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
      style={{ minHeight: 500 }}
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
      <div style={{ marginLeft: 50 }}>
        <div className="EnrollementImage-title">{text.h1}</div>
        <br />
        <br />
        <img
          src={DownArrow}
          style={{ width: 40 }}
          className="EnrollementImage-Arrow"
        />
        <br />
        <br />
        <br />
        <p style={{ color: "white" }}>{text.parag}</p>
        <div className="EnrollementImage-title">{text.h2}</div>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>{text.t1} </b> TIJ{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>{text.t2} </b> 3 rue Boccador, 75008 Paris.{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>{text.t3} </b> 0033 06 99 08 64 91{" "}
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>{text.t4} </b> contact@cabinet-tij.com
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>{text.t5} </b> 90274422600017
        </p>
        <p style={{ color: "white" }}>
          {" "}
          <b style={blueTitle}>{text.t6} </b> Manel BOUABIDI
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
