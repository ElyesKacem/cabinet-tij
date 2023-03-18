import { useContext } from "react";
import { LangContext } from "../../context/Lang.context";

import EnglishFlag from "./../../assets/images/Flag_of_the_United_Kingdom.svg";
import FrenchFlag from "./../../assets/images/FrenchFlag.png";

const texts = {
  en: {
    flag: EnglishFlag,
    English: "English",
    French: "French",
  },

  fr: {
    flag: FrenchFlag,
    English: "Anglais",
    French: "Français",
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
