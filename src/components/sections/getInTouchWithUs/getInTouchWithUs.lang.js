import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    title: "Get In Touch With Us",
    name: "Your name",
    company: "Company",
    mail: "Your E-mail",
    subject: "Subject",
    content: "Your subject",
    sub: "Submit",
  },

  fr: {
    title: "Nous contacter",
    name: "Nom",
    company: "Structure",
    mail: "E-mail",
    subject: "Objet",
    content: "Votre demande",
    sub: "Envoyer",
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
