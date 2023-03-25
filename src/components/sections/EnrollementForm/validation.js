import { not_emp } from "../../../Functions/validators";
import { toast } from "react-hot-toast";

export const FormValidator = (form) => {
  const {
    full_name,
    phone,
    city,
    email,
    adress,
    postal_code,

    spoken_lang,
    diploma1,
    exp1,
    diploma2,
    exp2,
    files,
    inseeKbis,
    identityDoc,
    criminalRecord,
    proPhoto,
  } = form;

  if (!not_emp(full_name)) {
    toast.error("Name is empty");
    return false;
  }

  if (!not_emp(email)) {
    toast.error("Email is empty");
    return false;
  }

  if (!not_emp(phone)) {
    toast.error("Phone Number is empty");
    return false;
  }

  if (!not_emp(city)) {
    toast.error("City is empty");
    return false;
  }

  if (!not_emp(adress)) {
    toast.error("Adress is empty");
    return false;
  }

  if (!not_emp(postal_code)) {
    toast.error("Postal code is empty");
    return false;
  }

  if (!not_emp(spoken_lang)) {
    toast.error("Spoken languages is empty");
    return false;
  }

  if (!not_emp(diploma1)) {
    toast.error("Diploma 1  is empty");
    return false;
  }

  if (!not_emp(exp1)) {
    toast.error("Experience 1  is empty");
    return false;
  }
  if (!not_emp(diploma2)) {
    toast.error("diploma 2  is empty");
    return false;
  }

  if (!not_emp(exp2)) {
    toast.error("Experience 2  is empty");
    return false;
  }
  if (!inseeKbis) {
    toast.error("Attestation insee or Kbis is empty");
    return false;
  }
  if (!identityDoc) {
    toast.error("Identity document is empty");
    return false;
  }
  if (!criminalRecord) {
    toast.error("Criminal record extract is empty");
    return false;
  }
  if (!proPhoto) {
    toast.error("Professional Photo is empty");
    return false;
  }
  let filesToAdd = files;
  filesToAdd.push(inseeKbis);
  filesToAdd.push(identityDoc);
  filesToAdd.push(criminalRecord);
  filesToAdd.push(proPhoto);

  return {
    full_name,
    phone,
    city,
    email,
    adress,
    postal_code,

    spoken_lang,
    diploma1,
    exp1,
    diploma2,
    exp2,
    files: filesToAdd,
  };
};
