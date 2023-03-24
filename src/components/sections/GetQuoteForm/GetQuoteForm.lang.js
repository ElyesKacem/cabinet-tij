import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    title: "Request A Quote",
    required: "Required fields are marked with asterisk",
    translation: "About",
    interpreting: "Interpreting",
    transcription: "Transcription",
    vipServ: "VIP Services",
    name: "Full name",
    company: "Company Name",
    mail: "E-mail",
    phone: "Phone Number",
    sl: "Source Language",
    tl: "Target Language",
    notes: "Notes",
    SaF: "Select a file",
    nofile: "No file chosen",
    AMF: "Add More Files",
    Location: "Location",
    submit: "Submit",
  },

  fr: {
    title: "Obtenir un devis",
    required: "Les champs obligatoires sont marqués d'un astérisque",
    translation: "Traduction",
    interpreting: "Interprétariat",
    transcription: "Transcription",
    vipServ: "Services VIP",
    name: "Nom complet",
    company: "Structure ",
    mail: "E-mail",
    phone: "Portable",
    sl: "Langue source",
    tl: "Langue cible",
    notes: "Votre message  ",
    SaF: "Ajouter un fichier",
    nofile: "Aucun fichier sélectionné",
    AMF: "Ajouter un autre fichier",
    Location: "Location",
    submit: "Envoyer",
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
