/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
// debugger;
const arrowUp = document.getElementById('up');
const arrowDown = document.getElementById('down');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const TimeUpMessage = document.getElementById('time-up-message');

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let startCountdown;
let pauseCountdown = false;

playBtn.addEventListener('click', function () {
  if (startCountdown === undefined) {
    startCountdown = setInterval(play, 100);
  } else {
    alert('running');
  }
});
function reset() {
  minutes.innerHTML = 25;
  seconds.innerHTML = '00';
  stopCountdown();
  if ((TimeUpMessage.className = 'show')) {
    TimeUpMessage.classList.replace('show', 'hide');
    minutes.classList.replace('hide', 'show');
    seconds.classList.replace('hide', 'show');
    startCountdown = undefined;
    location.reload();
  }
}
stopBtn.addEventListener('click', reset);
pauseBtn.addEventListener('click', function () {
  stopCountdown();
  startCountdown = undefined;
  pauseCountdown = true;
});
arrowUp.addEventListener('click', function () {
  if (startCountdown === undefined) {
    minutes.innerHTML++;
  } else {
    alert('running');
  }
  if (pauseCountdown === true) {
    alert('running');
  }
});
arrowDown.addEventListener('click', function () {
  if (startCountdown === undefined) {
    minutes.innerHTML--;
  } else {
    alert('running');
  }
  if (pauseCountdown === true) {
    alert('running');
  }
});

function play() {
  if (seconds.innerHTML != 0) {
    seconds.innerHTML--;
  } else if (seconds.innerHTML == 0 && minutes.innerHTML != 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
  }
  if (seconds.innerHTML == 0 && minutes.innerHTML == 0) {
    minutes.classList.add('hide');
    seconds.classList.add('hide');
    TimeUpMessage.classList.replace('hide', 'show');
    document.querySelector('body').addEventListener('click', reset);
  }
}
function stopCountdown() {
  clearInterval(startCountdown);
}
