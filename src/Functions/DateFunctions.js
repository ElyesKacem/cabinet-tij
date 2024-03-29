const monthsEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysEn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const daysFr = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const monthsFr = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const getDayEn = (dateStr) => {
  let date = new Date(dateStr);
  return daysEn[date.getDay()];
};

export const getMonth = (dateStr) => {
  let date = new Date(dateStr);
  return date.getMonth() + 1;
};

export const getYear = (dateStr) => {
  let date = new Date(dateStr);
  return date.getFullYear();
};

export const getMonthEn = (dateStr) => {
  return dateStr.split(" ")[1];
};

export const TimeParser = (dateStr) => {
  let date = new Date(dateStr);
  let minutes = date.getMinutes().toString();
  let houers = date.getHours().toString();
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  houers = houers.length === 1 ? "0" + houers : houers;
  return `${houers}:${minutes}`;
};

export const DateParser = (dateStr) => {
  let date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const FullDateEn = (dateStr, timeStr) => {
  //Tuesday, February 27, 2023
  let day = getDay(dateStr);
  let daypos = getDay(dateStr);
  let monthEn = getMonthEnFullName(dateStr);
  let year = getYear(dateStr);
  return `${getDayEn(dateStr)}, ${monthEn} ${day}, ${year}`;
};

export const getMonthEnFullName = (dateStr) => {
  let date = new Date(dateStr);
  const monthNum = date.getMonth();
  return monthsEn[monthNum];
};

export const getDateEn = (date) => {
  let day = getDay(date);
  let monthEn = getMonthEnFullName(date);
  let year = getYear(date);
  return `${monthEn} ${day}, ${year}`;
};

// french
const getDay = (dateStr) => {
  let date = new Date(dateStr);
  return date.getDate();
};

export const getDayFr = (dateStr) => {
  let date = new Date(dateStr);
  return daysFr[date.getDay()];
};

export const getMonthFr = (dateStr) => {
  return dateStr.split(" ")[1];
};

export const FullDateFr = (dateStr, timeStr) => {
  //Tuesday, February 27, 2023
  let day = getDay(dateStr);
  let daypos = getDay(dateStr);
  let monthFr = getMonthFrFullName(dateStr);
  let year = getYear(dateStr);
  return `${getDayFr(dateStr)}, ${monthFr} ${day}, ${year}`;
};

export const getMonthFrFullName = (dateStr) => {
  let date = new Date(dateStr);
  const monthNum = date.getMonth();
  return monthsFr[monthNum];
};

export const getDateFr = (date) => {
  let day = getDay(date);
  let monthFr = getMonthFrFullName(date);
  let year = getYear(date);
  return `${monthFr} ${day}, ${year}`;
};
