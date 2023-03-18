import { not_emp } from "../../../Functions/validators";
import { toast } from "react-hot-toast";

export const FormValidator = (form) => {
  const { full_name, company, email, subect, content, files } = form;

  if (!not_emp(full_name)) {
    toast.error("Name can't be empty");
    return false;
  }

  if (!not_emp(email)) {
    toast.error("Email can't be empty");
    return false;
  }

  if (!not_emp(company)) {
    toast.error("Company can't be empty");
    return false;
  }

  if (!not_emp(subect)) {
    toast.error("Subect can't be empty");
    return false;
  }

  if (!not_emp(content)) {
    toast.error("content can't be empty");
    return false;
  }

  return {
    full_name,
    company,
    email,
    subect,
    content,
    files,
  };
};
