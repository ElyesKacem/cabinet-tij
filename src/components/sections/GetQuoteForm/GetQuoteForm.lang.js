import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    title: "Request A Quote",
    required: "Required fields are marked with asterisk",
    translation: "Translation",
    interpreting: "Interpreting",
    transcription: "Transcription",
    vipServ: "VIP Services",
    name: "Full Name",
    mail: "E-mail",
    company: "Company Name",
    phone: "Phone Number",
    language: "Language",
    sl: "Source Language",
    tl: "Target Language",
    notes: "Notes",
    SaF: "Select a file",
    nofile: "No file chosen",
    AMF: "Add More Files",
    Location: "Location",
    submit: "Submit",
    error: "Error while sending data.",
    sending: "Sending in progress",
    success: "Your message has been successfully sent",
    nameError: "Full Name is empty",
    mailError: "E-mail is empty",
    slError: "Source Language is empty",
    tlError: "Target Language is empty",
    notesError: "Notes is empty",
    fileError: "No file chosen",
    locationError: "Location is empty",
    languageError: "",
  },

  fr: {
    title: "Obtenir un devis",
    required: "Les champs obligatoires sont marqués d'un astérisque",
    translation: "Traduction",
    interpreting: "Interprétariat",
    transcription: "Transcription",
    vipServ: "Services VIP",
    name: "Nom complet",
    mail: "E-mail",
    company: "Structure ",
    phone: "Portable",
    language: "Langue",
    sl: "Langue source",
    tl: "Langue cible",
    notes: "Votre message  ",
    SaF: "Ajouter un fichier",
    nofile: "Aucun fichier sélectionné",
    AMF: "Ajouter un autre fichier",
    Location: "Lieu de la prestation",
    submit: "Envoyer",
    error: "Erreur lors de l'envoi des données.",
    sending: "Envoi en cours",
    success: "Votre message a été envoyé avec succès.",
    nameError: "Le champ 'Nom Complet' est vide.",
    mailError: "Le champ 'E-mail' est vide.",
    slError: "Le champ 'Langue Source' est vide.",
    tlError: "Le champ 'Langue Cible' est vide.",
    notesError: "Le champ 'Votre Message' est vide.",
    fileError: "Il n'y a aucun fichier",
    locationError: "Le champ 'Lieu de Location' est vide",
    languageError: "Le champ 'Langue' est vide",
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
