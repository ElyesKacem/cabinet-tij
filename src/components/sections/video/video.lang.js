import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    We_Provide: "We Provide Outsourced",
    Translation: "Translation",
    Interpretation: "Interpretation",
    For_small_and_mid_sized_businesses: "For public and private sectors.",
    LearnMore: "Learn More",
    GetinTouch: "Get in Touch",
  },

  fr: {
    We_Provide: `Cabinet Tij`,
    Translation: "Traduction",
    Interpretation: "Interprétariat",
    For_small_and_mid_sized_businesses:
      "Pour les institutions publiques et au service des particuliers et des entreprises",
    LearnMore: "À propos",
    GetinTouch: "Nous contacter",
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
