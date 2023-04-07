var min = 0;
var sec = 0;
var miliSec = 0;
var timer;


// Timer function 
function callTimer() {
  miliSec++;
  if (miliSec < 100) {
    if (miliSec === 99) {
      miliSec = 0;
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
      }
    }
  } else {
    miliSec = 0;
  }
  document.getElementById("timer").innerHTML = min + " : " + sec + " : " + miliSec;
}


// function for start button
function start() {
  document.getElementById("start").disabled = true;
  timer = setInterval(callTimer, 10);
}


// function for stop button
function stop() {
  document.getElementById("start").disabled = false;
  clearInterval(timer);
}


// function for reset button
function reset() {
  stop();
  min = 0;
  sec = 0;
  miliSec = 0;
  document.getElementById("timer").innerHTML = min + " : " + sec + " : " + miliSec;
}
