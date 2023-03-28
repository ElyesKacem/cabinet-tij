import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    title: "Joining Us",
    paragraph1:
      "We are delighted that you want to become a member of our group",
    paragraph2:
      "To submit your membership application, please fill out the form below and attach any required documents.",
  },

  fr: {
    title: "Recrutement",
    paragraph1:
      "Nous sommes ravis que vous souhaitiez devenir membre de notre équipe.  ",
    paragraph2:
      "Pour soumettre votre candidature, veuillez remplir le formulaire ci-dessous et joindre tous les documents requis",
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
