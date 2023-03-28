import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    h1: "Talk To Us Now",
    parag:
      "For further information, please contact us at contact@cabinet-tij.com or use the provided form. If you are a translator or interpreter and wish to become part of our distinguished group of of skilled professionals, kindly complete our Online",
    app: " Application Form",
    name: "Full name",
    mail: "E-mail",
    subject: "Subject",
    notes: "Notes",
    selectFile: "Select a file",
    nofile: "No Chosen File",
    submit: "Submit",
    bt1: "Contact Us",
    bt2: "Find Us",
    error: "Error while sending message.",
    sending: "Sending in progress...",
    success: "Your message has been successfully sent",
    nameError: "Full Name is empty",
    mailError: "E-mail is empty",
    mailFormatError: "Invalid email format",
    subjectError: "Subject is empty",
    notesError: "Notes is empty",
  },

  fr: {
    h1: `Contactez-nous dès maintenant`,
    parag:
      "Pour plus d’informations merci de prendre contact avec nous via l’adresse mail: contact@cabinet-tij.com ou via le formulaire ci-dessous. Si vous êtes un professionnel traducteur ou interprète et vous souhaitez rejoindre notre équipe, merci de bien vouloir soumettre votre candidature en ligne via le",
    app: ` Formulaire de candidature`,
    name: "Nom et prénom",
    mail: "E-mail ",
    subject: "Objet ",
    notes: "Notes",
    selectFile: "Ajouter un fichier",
    nofile: "Aucun fichier",
    submit: "Envoyer",
    bt1: "Nous contacter",
    bt2: "Nous trouver",
    error: "Erreur lors de l'envoi du message.",
    sending: "Envoi en cours...",
    success: "Votre message a été envoyé avec succès.",
    nameError: "Le champ 'Nom Complet' est vide.",
    mailError: "Le champ 'E-mail' est vide.",
    mailFormatError: "Format d'email invalide",
    subjectError: "Le champ 'Objet' est vide.",
    notesError: "Le champ 'Votre Message' est vide.",
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
