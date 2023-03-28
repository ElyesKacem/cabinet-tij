import { not_emp } from "../../../Functions/validators";
import { toast } from "react-hot-toast";
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
export const FormValidator = (t, form) => {
  const { full_name, company, email, subject, content, from, files } = form;

  if (!not_emp(full_name)) {
    toast.error(t.nameError);
    return false;
  }

  if (!not_emp(email)) {
    toast.error(t.mailError);
    return false;
  }

  if (!validateEmail(email)) {
    toast.error(t.mailFormatError);
    return false;
  }

  if (!not_emp(company)) {
    toast.error(t.companyError);
    return false;
  }

  if (!not_emp(subject)) {
    toast.error(t.subjectError);
    return false;
  }

  if (!not_emp(content)) {
    toast.error(t.contentError);
    return false;
  }

  return {
    full_name,
    company,
    email,
    subject,
    content,
    from,
  };
};
