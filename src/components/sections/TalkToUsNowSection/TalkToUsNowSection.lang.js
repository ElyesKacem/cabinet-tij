import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    h1: "Talk To Us Now",
    parag:
      "For further information, please contact us at contact@cabinet-tij.com or use the provided form. If you are a professional in translation or interpreting and wish to become part of our distinguished group of talents, kindly complete our Online",
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
  },

  fr: {
    h1: `Parlez-nous maintenant`,
    parag:
      "Pour plus d’informations merci de prendre contact avec nous via l’adresse mail: contact@cabinet-tij.com ou via le formulaire ci-dessous.Si vous êtes un professionnel traducteur ou interprète et vous souhaitez rejoindre notre équipe, merci de bien vouloir soumettre votre candidature en ligne via le",
    app: ` Formulaire de candidature`,
    name: "Nom et prénom",
    mail: "E-mail ",
    subject: "Objet ",
    notes: "Notes",
    selectFile: "Ajouter un fichier",
    nofile: "Aucun fichier",
    submit: "Envoyer",
    bt1: "Nous contacter",
    bt2: "Trouvez-nous",
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
