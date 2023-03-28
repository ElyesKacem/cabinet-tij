import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    about: "About",
    support: "Support",
    contact_us: "Contact Us",
    about: "About",

    about_pg:
      "We are a translation company whose main goal is to provide specialized translations of various documents both technical and administrative as well as judicial.",
  },

  fr: {
    about: "À propos",
    support: "Aide",
    contact_us: "Contactez-nous",
    about: "À propos",

    about_pg:
      "Nous sommes un Cabinet de traduction et d’interprétariat spécialisé dans les traductions administratives, techniques et judiciaires.",
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
