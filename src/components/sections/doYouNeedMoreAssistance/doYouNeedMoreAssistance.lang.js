import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    do_you_need: "Do You Need More Assistance?",
    paragraph:
      "As per customer request, we can provide a suitable quote based on the nature of the document that needs to be translated. We offer the translation of different types of documents including technical and official ones. Our main goal is to provide our clients with all the help and assistance that they need, so feel free to contact us in order to receive a suitable quote.",
    button_title: "Request a Quote",
  },

  fr: {
    do_you_need: "Besoin d’aide?",
    paragraph: `Nous proposons à nos clients un devis personnalisé en fonction de la nature et du volume du document à traduire.
    Nous réalisons des traductions correspondant à différents types de documents qu’ils soient techniques ou assermentés.
    N’hésitez pas à nous contacter pour obtenir un devis personnalisé.
    `,
    button_title: "Demander un devis",
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
