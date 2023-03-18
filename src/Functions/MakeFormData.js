export const make_form_data = (files) => {
  const body = new FormData();
  for (let i = 0; i < files.length; i++) {
    body.append("files", files[i]);
  }
  return body;
};
