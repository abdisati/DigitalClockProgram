//Digital clock program

function updateClock() {
  const now = new Date(); //creating a date object
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const toString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = toString;
}

updateClock();

setInterval(updateClock, 1000);
