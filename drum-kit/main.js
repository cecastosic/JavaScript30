const div = document.querySelector(".key");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
}

const keys = document.querySelectorAll(".key");
function stopTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("active");
}

keys.forEach(key => key.addEventListener("transitionend", stopTransition));

window.addEventListener("keydown", playSound);
