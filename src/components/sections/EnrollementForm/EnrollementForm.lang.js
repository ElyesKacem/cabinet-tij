import { useContext } from "react";
import { LangContext } from "../../../context/Lang.context";

const texts = {
  en: {
    h1: "On average, it takes our services",
    h2: "to",
    h3: "weeks to process your application.",
    l2: "Additional requests may be sent to you via email. Once your application is approve",
    l3: "a repsresentative will contact you to provide you with further information",
    applyFor: "Apply For Affiliation",
    identity: "Identity",
    name: "Full name",
    phone: "Phone",
    city: "City",
    mail: "E-mail",
    adress: "Adress",
    codePostal: "Postal Code",
    exandex1: "Expertise",
    exandex2: "And",
    exandex3: "Experience",
    sokenLang: "Spoken Languages ( with priority )",
    dip1: "Diploma 1",
    dip2: "Diploma 2",
    exp1: "Experience 1",
    exp2: "Experience 2",
    attach: "Attach Files",
    attestation: "Attestation insee or Kbis",
    identity: "Identity document",
    criminal: "Criminal record extract",
    prof: "Professional Photo",
    chooseFile: "Choose Files",
    noFile: "No Chosen File",
    addMoreFile: "Add More Files",
    submit: "Submit",
  },

  fr: {
    h1: "Veuillez compter en moyenne",
    h2: "à",
    h3: "semaines pour que votre candidature soit traitée par notre service.",
    l2: "Veuillez nous adresser par mail tous autres demandes ou renseignements complémentaires.",
    l3: "",
    applyFor: "Soumettre Votre Candidature",
    identity: "Identité",
    name: "Nom et prénom",
    phone: "Mobile",
    city: "Ville",
    mail: "E-mail",
    adress: "Adresse",
    codePostal: "Code postal",
    exandex1: "Formation",
    exandex2: "Et",
    exandex3: "Expérience",
    sokenLang: "Langues parlées",
    dip1: "Niveau 1",
    dip2: "Niveau 2",
    exp1: "Expérience 1",
    exp2: "Expérience 2",
    attach: "Pièces jointes",
    attestation: "Attestation Insee ou Kbis",
    identity: "Justificatif d'itentité",
    criminal: "Casier judiciaire",
    prof: "Photographe professionnelle",
    chooseFile: "Ajouter un fichier",
    noFile: "Aucun fichier",
    addMoreFile: "Ajouter un autre fichier",
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
