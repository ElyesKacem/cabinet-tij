import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    full_name: "Name is empty",
    email: "Email is empty",
    phone: "Phone Number is empty",
    city: "City is empty",
    adress: "Adress is empty",
    postal_code: "Postal code is empty",
    spoken_lang: "Spoken languages is empty",
    diploma1: "Diploma 1  is empty",
    exp1: "Experience 1  is empty",
    diploma2: "diploma 2  is empty",
    exp2: "Experience 2  is empty",
    inseeKbis: "Missing Attestation insee or Kbis file",
    identityDoc: "Missing Identity document file",
    criminalRecord: "Missing Criminal record extract file",
    proPhoto: "Missing Professional Photo file",
  },

  fr: {
    full_name: "le champ Nom est vide",
    email: "le champ E-mail est vide",
    phone: "le champ Mobile est vide",
    city: "le champ Ville est vide",
    adress: "le champ Adresse est vide",
    postal_code: "le champ Code postal est vide",
    spoken_lang: "le champ Langues parlées est vide",
    diploma1: "le champ Niveau 1 est vide",
    exp1: "le champ Expérience 1 est vide",
    diploma2: "le champ Niveau 2 est vide",
    exp2: "le champ Expérience 2 est vide",
    inseeKbis: "Ajouter un fichier pour Attestation Insee ou Kbis",
    identityDoc: "Ajouter un fichier pour Justificatif d'itentité",
    criminalRecord: "Ajouter un fichier pour Casier judiciaire",
    proPhoto: "Ajouter un fichier pour Photographe professionnelle",
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
