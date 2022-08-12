const login = document.querySelector(".login");
const greetingMessage = document.querySelector(".greeting_message");
const userNameInput = document.querySelector("input");

let welcomeMessage = document.querySelector(".welcome_message");

const HIDDEN_CLASSNAME = "hidden";

function submitName(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const userName = userNameInput.value;
  welcomeMessage.classList.remove(HIDDEN_CLASSNAME);
  welcomeMessage.innerText = `Good after noon ${userName}`;
}
login.addEventListener("submit", submitName);
