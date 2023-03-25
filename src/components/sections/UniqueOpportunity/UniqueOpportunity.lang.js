import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    h1: "A ",
    h2: "Unique Opportunity To Develop Your Activity Serenely",
    l1: "TIJ is looking to bring on board interpreters and translators to provide them with the necessary support to excel in the language service field",
    l2: "",
    bh1: "Reasons To Join Us",
  },

  fr: {
    h1: "Une",
    h2: "Opportunité Pour DévelopperVvotre Activité Sereinement",
    l1: "Nous recrutons, en continu, des interprètes et des traducteurs professionnels et nous leur fournissons le soutien nécessaire pour exceller dans le domaine des services linguistiques. ",
    l2: " ",
    bh1: "Raisons Pour Nous Rejoinder",
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
