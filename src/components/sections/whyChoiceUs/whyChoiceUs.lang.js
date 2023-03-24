import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    why_choice: "WHY CHOOSE US",
    here_are: "Here Are Few Reasons To Trust Us",
    expertise: "Expertise",
    experience: "Experience",
    quality: "Quality",
    agility: "Agility",
    efficiency: "Efficiency",
    expertise_pg:
      "Our Cabinet Provides a large network of over 400 language professionals.",
    experience_pg: "More than 80 Languages translated and interpreted.",
    quality_pg: "Tracking and verification of all completed missions.",
    agility_pg: "24/7 and 365 days a year intervention throughout France.",
    efficiency_pg: "A quick and effective response to your needs.",
  },

  fr: {
    why_choice: "Pourquoi nous choisir",
    here_are: "Raison de nous faire confiance",
    expertise: "Expertise",
    experience: "Expérience",
    quality: "Qualité",
    agility: "Agilité",
    efficiency: "Efficiacité",
    expertise_pg:
      "Plus de 50 langues de travail et plus de 400 traducteurs et interprètes.",
    experience_pg: "Plus de 80 langues traduites et interprétées.",
    quality_pg: "Une réponse rapide et efficace à vos demandes.",
    agility_pg: "Intervention 24h/24 et 7j/7 toute l'année partout en France",
    efficiency_pg: "Une réponse rapide et efficace à vos besoins",
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
