const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let timerId;

function modifyTime() {
  if (seconds.value > 0) {
    seconds.value = seconds.value - 1;
  }

  if (seconds.value == 0 && minutes.value > 0) {
    minutes.value = minutes.value - 1;
    seconds.value = "59";
  }

  if (minutes.value == 0 && hour.value > 0) {
    hour.value = hour.value - 1;
    minutes.value = "59";
  }
}

function checkBounds() {
  if (seconds.value > 60) {
    minutes.value++;
    seconds.value = parseInt(seconds.value) - 59;
  }

  if (minutes.value > 60) {
    hour.value++;
    minutes.value = parseInt(minutes.value) - 60;
  }
}

function reset() {
  timerId && clearInterval(timerId);
  timerId = undefined;
  hour.value = null;
  minutes.value = null;
  seconds.value = null;
}

startBtn.addEventListener("click", (event) => {
  console.log("eee:", event);
  console.log("timer:", timerId);
  checkBounds();
  if (timerId) {
    return;
  }
  if (hour.value == 0 && minutes.value == 0 && seconds.value) {
    reset();
  }

  timerId = setInterval(modifyTime, 1000);
});

stopBtn.addEventListener("click", () => {
  timerId && clearInterval(timerId);
  timerId = undefined;
});

resetBtn.addEventListener("click", reset);
