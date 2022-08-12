const login = document.querySelector(".login");
const userNameInput = document.querySelector("input");
const welcomeMessage = document.querySelector(".welcome_message");

const HIDDEN_CLASSNAME = "hidden";

function submitName(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const userName = userNameInput.value;
  localStorage.setItem("username", userName);
  paintName(userName);
}

function paintName(name) {
  welcomeMessage.classList.remove(HIDDEN_CLASSNAME);
  welcomeMessage.innerText = `Good after noon ${name}`;
}

const savedUserName = localStorage.getItem("username");

if (savedUserName === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  login.addEventListener("submit", submitName);
} else {
  paintName(savedUserName);
}
