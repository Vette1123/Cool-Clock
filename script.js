const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const btn = document.querySelector(".toggle");
const html = document.querySelector("html");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
btn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) btn.innerHTML = "Light Mode";
  else btn.innerHTML = "Dark Mode";
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  console.log(month);
  const hourForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  let appm = hours >= 12 ? "AM" : "PM";
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;
  timeEL.innerHTML = `${hourForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${appm}`;
  dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();
setInterval(setTime, 1000);
