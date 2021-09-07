//window.onload = function () {
let minutes = 00;
let seconds = 00;
let tens = 00;
let appendTens = document.querySelector("#tens");
let appendSeconds = document.querySelector("#seconds");
let appendMinutes = document.querySelector("#minutes");
let btnStart = document.querySelector("#btn-start");
let btnStop = document.querySelector("#btn-stop");
let btnReset = document.querySelector("#btn-reset");
let Interval;

const startTimer = () => {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }

  if (minutes > 59) {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    alert("Время вышло");
  }
}

const startStopwatch = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 9);
}

const stopStopwatch = () => {
  clearInterval(Interval);
}

const resetStopwatch = () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";

  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
}

btnStart.addEventListener('click', startStopwatch);
btnStop.addEventListener('click', stopStopwatch);
btnReset.addEventListener('click', resetStopwatch);

//}