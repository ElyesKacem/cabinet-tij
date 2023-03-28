import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    title: "Get In Touch With Us",
    name: "Your name",
    company: "Company",
    mail: "Your e-mail",
    subject: "Subject",
    content: "Your subject",
    sub: "Submit",
    error: "Error while sending message.",
    sending: "Sending in progress...",
    success: "Your message has been successfully sent",
    nameError: "Full Name is empty",
    mailError: "E-mail is empty",
    mailFormatError: "Invalid email format",
    companyError: "Company is empty",
    subjectError: "Subject is empty",
    contentError: "Content is empty",
  },

  fr: {
    title: "Nous Contacter",
    name: "Nom",
    company: "Structure",
    mail: "E-mail",
    subject: "Objet",
    content: "Votre demande",
    sub: "Envoyer",
    error: "Erreur lors de l'envoi du message.",
    sending: "Envoi en cours",
    success: "Votre message a été envoyé avec succès.",
    nameError: "Le champ 'Nom Complet' est vide.",
    mailError: "Le champ 'E-mail' est vide.",
    mailFormatError: "Format d'email invalide",
    companyError: "Le champ 'Structure' est vide.",
    subjectError: "Le champ 'Objet' est vide.",
    contentError: "Le champ 'Votre demande' est vide",
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
