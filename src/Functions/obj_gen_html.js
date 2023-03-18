export const parser = (object) => {
  let html = "<div>";
  Object.keys(object).forEach((elem) => {
    html += `<p> <b>${elem}</b> : ${object[elem]}</p>`;
  });
  return html + "</div>";
};
