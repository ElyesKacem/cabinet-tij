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
  } = form;

  if (!not_emp(full_name)) {
    toast.error("Name can't be empty");
    return false;
  }

  if (!not_emp(email)) {
    toast.error("Email can't be empty");
    return false;
  }

  if (!not_emp(phone)) {
    toast.error("Phone Number can't be empty");
    return false;
  }

  if (!not_emp(city)) {
    toast.error("city can't be empty");
    return false;
  }

  if (!not_emp(adress)) {
    toast.error("adress can't be empty");
    return false;
  }

  if (!not_emp(postal_code)) {
    toast.error("postal code can't be empty");
    return false;
  }

  if (!not_emp(spoken_lang)) {
    toast.error("spoken languages can't be empty");
    return false;
  }

  if (!not_emp(diploma1)) {
    toast.error("diploma 1  can't be empty");
    return false;
  }

  if (!not_emp(exp1)) {
    toast.error("Experience 1  can't be empty");
    return false;
  }

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
    files,
  };
};