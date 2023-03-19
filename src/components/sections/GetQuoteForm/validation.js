import { not_emp } from "../../../Functions/validators";
import { toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

const translationValid = (form) => {
  const {
    full_name,
    email,
    phone,
    target_lang,
    source_lang,
    notes,
    files,
    from,
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

  if (!not_emp(source_lang)) {
    toast.error("Source Language can't be empty");
    return false;
  }

  if (!not_emp(target_lang)) {
    toast.error("Target Language can't be empty");
    return false;
  }

  if (!not_emp(notes)) {
    toast.error("Notes can't be empty");
    return false;
  }

  if (files.length == 0) {
    toast.error("files can't be empty");
    return false;
  }
  return {
    full_name,
    email,
    phone,
    target_lang,
    source_lang,
    notes,
    files,
    from,
  };
};

const InterpretingValid = (form) => {
  const {
    full_name,
    email,
    phone,
    target_lang,
    location,
    notes,
    files,
    date,
    from,
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

  if (!not_emp(location)) {
    toast.error("Location can't be empty");
    return false;
  }

  if (!not_emp(target_lang)) {
    toast.error("Target Language can't be empty");
    return false;
  }

  if (!not_emp(notes)) {
    toast.error("Notes can't be empty");
    return false;
  }

  if (files.length == 0) {
    toast.error("files can't be empty");
    return false;
  }

  return {
    full_name,
    email,
    phone,
    target_lang,
    location,
    notes,
    files,
    date,
    from,
  };
};

const TranscriptValid = (form) => {
  const {
    full_name,
    email,
    phone,
    target_lang,
    source_lang,
    languages,
    notes,
    files,
    from,
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

  if (!not_emp(source_lang)) {
    toast.error("Source Language can't be empty");
    return false;
  }

  if (!not_emp(target_lang)) {
    toast.error("Target Language can't be empty");
    return false;
  }

  if (!not_emp(languages)) {
    toast.error("Languages can't be empty");
    return false;
  }

  if (!not_emp(notes)) {
    toast.error("Notes can't be empty");
    return false;
  }

  if (files.length == 0) {
    toast.error("files can't be empty");
    return false;
  }

  return {
    full_name,
    email,
    phone,
    target_lang,
    source_lang,
    languages,
    notes,
    files,
    from,
  };
};

export const FormValidator = (form) => {
  switch (form.FORM_TYPE) {
    case "Translation":
      return translationValid(form);
    case "Interpreting":
      return InterpretingValid(form);
    case "Transcription":
      return TranscriptValid(form);
    case "VIP Services":
      return InterpretingValid(form);
    default:
      return translationValid(form);
  }
};

// export const SendingData = () => {
//   return toast.loading("Sending Data...", {
//     icon: <CircularProgress sx={{ color: "blue" }} />,
//   });
// };
