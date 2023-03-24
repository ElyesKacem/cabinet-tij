import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    h1: "Do You Still Need Help?",
    parag:
      "Contact us directly and we will answer your questions and requests.",
    bt1: "Contact Us",
  },

  fr: {
    h1: `Besoin D’aide Encore?`,
    parag:
      "Contactez-nous et nous allons répondre à vos questions et vos demandes",
    bt1: "Contacter-nous ",
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
