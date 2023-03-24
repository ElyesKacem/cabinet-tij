import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    h1: "We are here, it's time",
    h2: "for you to join TIJ.",
    parag:
      "It will take less than 10 minutes for you to submit your application for affiliation. We will get back to you as soon as possible!",
    bt1: "Join Us",
    bt2: "Contact Us",
  },

  fr: {
    h1: `Nous sommes là,`,
    h2: `il est temps de nous rejoindre `,
    parag:
      "Prenez 10 minutes de votre temps pour nous soumettre votre candidature. Nous reviendrons vers vous le plus tôt possible!",
    bt1: "Rejoignez-nous ",
    bt2: "Nous contacter",
  },
};

const GetText = () => {
  const { lang } = useContext(LangContext);
  if (!lang) {
    return texts.en;
  } else {
    return texts[lang];
  }
};

export default GetText;
