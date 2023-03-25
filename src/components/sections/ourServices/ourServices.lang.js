import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    our_serv: "Our Services",
    we_offer:
      "We Offer Solutions For Clients Both Large And Small, From corporate, Government And Private Sectors",
    inter: "Interpreting",
    transl: "Translation",
    sworn: "Sworn Translation",
    business: "Business",
    personal: "Personal Services",
  },

  fr: {
    our_serv: "Nos services",
    we_offer:
      "Nous fournissons des solutions à nos clients parmi les entreprises, les particuliers, établissements publics comme privés.",
    inter: "Interprétariat",
    transl: "Traduction",
    sworn: "Traduction assermentée",
    business: "Entreprises",
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
