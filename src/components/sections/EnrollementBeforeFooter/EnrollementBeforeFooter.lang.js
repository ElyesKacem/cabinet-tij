import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    a: "Renowned Clients",
    b: "Reccuring income",
    c: "Free Affiliation",
  },

  fr: {
    a: "Clients assurés",
    b: "Revenus réguliers",
    c: "Affiliation gratuite",
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
