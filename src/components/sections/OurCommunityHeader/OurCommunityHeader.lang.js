import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    wh: "Take part in our",
    bh: "Community",
    parag:
      "TIJ is always on the lookout for multilingual individuals who are passionate about language to become a part of our national translator and interpreter network. We help these talented individuals to advance their careers in the field of language solutions.",
  },

  fr: {
    wh: "Rejoignez",
    bh: "Notre équipe",
    parag:
      "TIJ est toujours à la recherche de professionnels pour faire partie de notre réseau national de traducteurs et d'interprètes.  Nous aidons ces personnes à faire progresser leur carrière dans le domaine des services linguistiques.",
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
