import { not_emp } from "../../../Functions/validators";
import { toast } from "react-hot-toast";

export const FormValidator = (t, form) => {
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
    toast.error(t.full_name);
    return false;
  }

  if (!not_emp(email)) {
    toast.error(t.email);
    return false;
  }

  if (!not_emp(phone)) {
    toast.error(t.phoneError);
    return false;
  }

  if (!not_emp(city)) {
    toast.error(t.cityError);
    return false;
  }

  if (!not_emp(adress)) {
    toast.error(t.adressError);
    return false;
  }

  if (!not_emp(postal_code)) {
    toast.error(t.postal_code);
    return false;
  }

  if (!not_emp(spoken_lang)) {
    toast.error(t.spoken_lang);
    return false;
  }

  if (!not_emp(diploma1)) {
    toast.error(t.diploma1);
    return false;
  }

  if (!not_emp(exp1)) {
    toast.error(t.exp1Error);
    return false;
  }
  if (!not_emp(diploma2)) {
    toast.error(t.diploma2);
    return false;
  }

  if (!not_emp(exp2)) {
    toast.error(t.exp2Error);
    return false;
  }
  if (!inseeKbis) {
    toast.error(t.inseeKbis);
    return false;
  }
  if (!identityDoc) {
    toast.error(t.identityDoc);
    return false;
  }
  if (!criminalRecord) {
    toast.error(t.criminalRecord);
    return false;
  }
  if (!proPhoto) {
    toast.error(t.proPhoto);
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
