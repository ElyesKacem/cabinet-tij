import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    our_serv: "Our Services",
    we_offer:
      "We Offer Services For All Our Clients From Corporate, Government And Private Sectors",
    inter: "Interpretation",
    transl: "Translation",
    sworn: "Sworn Translation",
    business: "Professional Services",
    personal: "Personal Services",
  },

  fr: {
    our_serv: "Nos services",
    we_offer:
      "Nous fournissons des solutions à nos clients parmi les entreprises, les particuliers, établissements publics comme privés.",
    inter: "Interprétariat",
    transl: "Traduction",
    sworn: "Traduction assermentée",
    business: "Services aux entreprises",
    personal: "Particuliers",
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
