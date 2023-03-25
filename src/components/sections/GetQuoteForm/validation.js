import { not_emp } from "../../../Functions/validators";
import { toast } from "react-hot-toast";

const translationValid = (t, form) => {
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
    toast.error(t.nameError);
    return false;
  }

  if (!not_emp(email)) {
    toast.error(t.mailError);
    return false;
  }

  if (!not_emp(source_lang)) {
    toast.error(t.slError);
    return false;
  }

  if (!not_emp(target_lang)) {
    toast.error(t.tlError);
    return false;
  }

  if (!not_emp(notes)) {
    toast.error(t.notesError);
    return false;
  }

  if (files.length == 0) {
    toast.error(t.fileError);
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

const InterpretingValid = (t, form) => {
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
    toast.error(t.nameError);
    return false;
  }

  if (!not_emp(email)) {
    toast.error(t.mailError);
    return false;
  }

  if (!not_emp(location)) {
    toast.error(t.locationError);
    return false;
  }

  if (!not_emp(target_lang)) {
    toast.error(t.tlError);
    return false;
  }

  if (!not_emp(notes)) {
    toast.error(t.notesError);
    return false;
  }

  if (files.length == 0) {
    toast.error(t.fileError);
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

const TranscriptValid = (t, form) => {
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
    toast.error(t.nameError);
    return false;
  }

  if (!not_emp(email)) {
    toast.error(t.mailError);
    return false;
  }

  if (!not_emp(source_lang)) {
    toast.error(t.slError);
    return false;
  }

  if (!not_emp(target_lang)) {
    toast.error(t.tlError);
    return false;
  }

  if (!not_emp(languages)) {
    toast.error(t.languageError);
    return false;
  }

  if (!not_emp(notes)) {
    toast.error(t.notesError);
    return false;
  }

  if (files.length == 0) {
    toast.error(t.fileError);
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

export const FormValidator = (t, form) => {
  switch (form.FORM_TYPE) {
    case "Translation":
      return translationValid(t, form);
    case "Interpreting":
      return InterpretingValid(t, form);
    case "Transcription":
      return TranscriptValid(t, form);
    case "VIP Services":
      return InterpretingValid(t, form);
    default:
      return translationValid(t, form);
  }
};

export const FormValidatorTalkToUs = (t, form) => {
  const { full_name, email, subject, notes, files, from } = form;

  if (!not_emp(full_name)) {
    toast.error(t.nameError);
    return false;
  }

  if (!not_emp(email)) {
    toast.error(t.mailError);
    return false;
  }

  if (!not_emp(subject)) {
    toast.error(t.subjectError);
    return false;
  }

  if (!not_emp(notes)) {
    toast.error(t.notesError);
    return false;
  }

  return {
    full_name,
    email,
    subject,
    notes,
    files,
    from,
  };
};
