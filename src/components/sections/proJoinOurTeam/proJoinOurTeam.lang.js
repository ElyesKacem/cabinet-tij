import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    title1: "Are You A Professional ?",
    title2: "Join Our team",
    content1: "join our community and be a part of something special .",
    content2:
      "Together, we can make a difference and create meaningful change.",
    bt: "Career",
  },

  fr: {
    title1: "Vous êtes un professionnel?",
    title2: "Rejoignez-nous",
    content1: "Rejoignez notre équipe. ",
    content2: "Ensemble nous créons le changement.",
    bt: "Carrière",
  },
};

const GetText = () => {
  const { lang } = useContext(LangContext);
  if (!lang) {
    return texts.fr;
  } else {
    return texts[lang];
  }
};

export default GetText;
