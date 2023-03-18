import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    We_Provide_Outsourced: "We Provide Outsourced",
    Translation: "Translation",
    Interpreting: "Interpreting",
    For_small_and_mid_sized_businesses: `For small and mid sized businesses`,
    LearnMore: "Learn More",
    GetinTouch: "Get in Touch",
  },

  fr: {
    We_Provide_Outsourced: `Nous fournissons des services externalisés`,
    Translation: "Traduction",
    Interpreting: "Interprétariat",
    For_small_and_mid_sized_businesses:
      "Pour les petites et moyennes entreprises",
    LearnMore: "Apprendre encore plus",
    GetinTouch: "Entrer en contact",
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
