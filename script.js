stopwatch();

function stopwatch() {
  let miliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let ms = document.getElementById("ms");
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");
  let hr = document.getElementById("hr");
  let start = true;
  let interval;

  document.getElementById("start").addEventListener("click", () => {
    if (start === true) {
      interval = setInterval(() => {
        if (miliseconds < 10) {
          ms.innerText = `0${miliseconds}`;
        } else {
          ms.innerText = miliseconds;
        }
        console.log(miliseconds);

        if (seconds < 10) {
          sec.innerText = `0${seconds}`;
        } else {
          sec.innerText = seconds;
        }

        if (minutes < 10) {
          min.innerText = `0${minutes}`;
        } else {
          min.innerText = minutes;
        }

        if (hours < 10) {
          hr.innerText = `0${hours}`;
        } else {
          hr.innerText = hours;
        }

        if (minutes > 59) {
          minutes = 0;
          hours += 1;
        }
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        if (miliseconds > 98) {
          seconds += 1;
          miliseconds = 0;
        } else {
          miliseconds += 1;
        }
      }, 10);
      start = false;
      document.getElementById("start").innerText = "Stop";
    } else {
      clearInterval(interval);
      start = true;
      document.getElementById("start").innerText = "Start";
    }
  });

  document.getElementById("reset").addEventListener("click", () => {
    miliseconds = 00;
    seconds = 00;
    minutes = 00;
    hours = 00;
    clearInterval(interval);
    start = true;
    document.getElementById("start").innerText = "Start";
    ms.innerText = `0${miliseconds}`;
    sec.innerText = `0${seconds}`;
    min.innerText = `0${minutes}`;
    hr.innerText = `0${hours}`;
  });
}
