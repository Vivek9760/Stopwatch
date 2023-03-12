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
  let flag = false;
  let count = 1;
  let z = `00 : 00 : 00 : 00`
  let interval;
  let round = document.getElementById('round');
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
      flag = true;
      document.getElementById('reset').innerText=`Round ${count}`;
    } else {
      clearInterval(interval);
      flag = false;
      start = true;
      document.getElementById("start").innerText = "Start";
      document.getElementById('reset').innerText='Reset';
    }
  });

  document.getElementById("reset").addEventListener("click", () => {

    if(flag === false){
      miliseconds = 00;
      seconds = 00;
      minutes = 00;
      hours = 00;
      clearInterval(interval);
      ms.innerText = `0${miliseconds}`;
      sec.innerText = `0${seconds}`;
      min.innerText = `0${minutes}`;
      hr.innerText = `0${hours}`;
      round.innerHTML = ''
      count = 1;
    }else{
      if(minutes<10 && seconds<10  && miliseconds<10){
        z = `0${hours} : 0${minutes} : 0${seconds} : 0${miliseconds}`
      }
      else if(seconds<10 && miliseconds<10){
      z = `0${hours} : ${minutes} : 0${seconds} : 0${miliseconds}`
      }
      else if(minutes<10 && seconds<10 ){
      z = `0${hours} : 0${minutes} : 0${seconds} : ${miliseconds}`
      }
      else if(minutes<10 && miliseconds<10){
      z = `0${hours} : 0${minutes} : ${seconds} : 0${miliseconds}`
      }else{
        if(miliseconds<10){
          z = `0${hours} : ${minutes} : ${seconds} : 0${miliseconds}`
        }else if(seconds<10){
          z = `0${hours} : ${minutes} : 0${seconds} : ${miliseconds}`
        }else if(minutes<10){
          z = `0${hours} : 0${minutes} : ${seconds} : ${miliseconds}`
        }else{
          z = `0${hours} : ${minutes} : ${seconds} : ${miliseconds}`
        }
      }
      count+=1;
      document.getElementById('reset').innerText=`Round ${count}`;
        round.insertAdjacentHTML('afterbegin',`<li>${z}</li>`)
    }
  });
}
