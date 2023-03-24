import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    t1: "You are language specialist ?",
    parag:
      "You align with our ethical principles ? you are independent ? you possess a strong moral compass and professional integrity ? you value confidentiality and objectivity highly ? you have a business mindset or are seeking an additional income ? and you are interested in making a career out of your language skills ?",
    t2: "If so, we would be very happy for you to be a part of our adventure.",
    bt: "Become a member",
  },

  fr: {
    t1: `Vous êtes un professionnel linguistique ?`,
    parag:
      "Vous êtes à cheval sur les principes déontologiques du métier ? Vous êtes auto-entrepreneur ou indépendant ? Vous avez un sens aiguë de l’intégrité et de la réserve professionnelles? Vous souhaitez augmenter votre activité sans vous soucier de la prospection ? Vous souhaitez mettre à profit vos compétences linguistiques et académiques ?",
    t2: "Rejoignez-nous, ensemble nous évoluons",
    bt: "Devenir membre",
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
