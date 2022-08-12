const login = document.querySelector(".login");
const userNameInput = document.querySelector("input");
const welcomeMessage = document.querySelector(".welcome_message");

const HIDDEN_CLASSNAME = "hidden";
let greetingTime;

function timeGreeting() {
  const date = new Date();
  const Hours = date.getHours();
  if (Hours >= 6 && Hours < 12) {
    greetingTime = "moring";
  } else if (Hours >= 12 && Hours < 18) {
    greetingTime = "after noon";
  } else if (Hours >= 18 && Hours < 24) {
    greetingTime = "evening";
  } else if (Hours >= 0 && Hours < 6) {
    greetingTime = "night";
  }
}

function submitName(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const userName = userNameInput.value;
  localStorage.setItem("username", userName);
  paintName(userName);
}

function paintName(name) {
  welcomeMessage.classList.remove(HIDDEN_CLASSNAME);
  timeGreeting();
  welcomeMessage.innerText = `Good ${greetingTime}, ${name}`;
}

const savedUserName = localStorage.getItem("username");

if (savedUserName === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  login.addEventListener("submit", submitName);
} else {
  paintName(savedUserName);
}
