import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    who_we_are: "WHO WE ARE",
    cabinet_Tij_For: "Cabinet Tij For Translation And Interpreting",
    we_are_specialized:
      "We are specialized in the field of technical, administrative and judicial translation and interpreting.",
    thanks_to_our:
      "Thanks to our wide network of qualified professionals and strategic partners, we respond quickly and efficiently to the requests of our clients.",
    our_services: "Our services",
  },

  fr: {
    who_we_are: "Qui sommes-nous?",
    cabinet_Tij_For: "Cabinet Tij pour la traduction et l'Interprétariat",
    we_are_specialized:
      "Nous sommes spécialisés dans le domaine de la traduction et de l'interprétation technique, administrative et judiciaire.",
    thanks_to_our:
      "Grâce à son réseau de traducteurs et d'interprètes qualifiés, notre cabinet intervient pour répondre efficacement à vos besoins de traduction ou d'interprétariat",
    our_services: "Nos services",
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
