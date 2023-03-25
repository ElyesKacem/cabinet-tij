import { useContext } from "react";
import { LangContext } from "../../context/Lang.context";

const texts = {
  en: {
    Home: "Home",
    Services: "Services",
    About: "About",
    Contact: "Contact",
    GetQuote: "Get Quote",
  },

  fr: {
    Home: "Accueil",
    Services: "Services",
    About: "À propos",
    Contact: "Contact",
    GetQuote: "Obtenir un devis",
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
