export const parser = (object) => {
  let html = "<div>";
  Object.keys(object).forEach((elem) => {
    // console.log(elem, typeof elem);
    if (elem != "files") {
      html += `<p> <b>${elem}</b> : ${object[elem]}</p>`;
    }
  });
  return html + "</div>";
};
