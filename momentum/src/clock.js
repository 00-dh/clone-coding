const clock = document.querySelector("#clock");

function nowTime() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${Hours}:${Minutes}`;
}

nowTime();
setInterval(nowTime, 1000);
