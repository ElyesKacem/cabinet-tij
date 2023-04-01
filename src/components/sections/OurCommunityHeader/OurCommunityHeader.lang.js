import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    wh: "Take part in our",
    bh: "Community",
    parag:
      "We welcome passionate professionals and invite them to be a part of our national network of translators and interpreters. We help these people reach career advancement in the field of language services.",
  },

  fr: {
    wh: "Rejoignez",
    bh: "Notre équipe",
    parag:
      "TIJ est toujours à la recherche de professionnels pour faire partie de son réseau national de traducteurs et interpretes.  Nous aidons ces personnes à faire progresser leur carrière dans le domaine des services linguistiques.",
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
