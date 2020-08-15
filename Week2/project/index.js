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
const sessionLength = document.getElementById('session-length');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const notification = document.getElementById('notification');

const sZero = document.getElementById('s-zero');
const mZero = document.getElementById('m-zero');
const colon = document.getElementById('colon');

let startCountdown;
// let pauseCountdown = false;
let timeUp = false;
pauseBtn.disabled = true;
pauseBtn.style.color = 'grey';
playBtn.addEventListener('click', function () {
  arrowUp.disabled = true;
  arrowDown.disabled = true;
  pauseBtn.disabled = false;
  pauseBtn.style.color = 'white';

  arrowUp.style.color = 'grey';
  arrowDown.style.color = 'grey';
  minutes.style.color = '#2ed573';
  seconds.style.color = '#2ed573';
  colon.style.color = '#2ed573';
  mZero.style.color = '#2ed573';
  sZero.style.color = '#2ed573';
  notification.innerText = 'Counting Down!';
  if (startCountdown === undefined) {
    startCountdown = setInterval(play, 1000);
  } else {
    notification.innerText = 'Timer is already running!';
  }
  if (stopBtn.style.display == 'inline') {
    stopBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
  }
});
function reset() {
  minutes.innerText = 25;
  seconds.innerText = '00';
  stopCountdown();

  TimeUpMessage.classList.replace('show', 'hide');
  minutes.classList.replace('hide', 'show');
  seconds.classList.replace('hide', 'show');
  // if (TimeUpMessage.classList.contains('show')) {
  //   mZero.classList.replace('show', 'hide');
  //   sZero.classList.replace('show', 'hide');
  // }
  startCountdown = undefined;
  location.reload();
}
stopBtn.addEventListener('click', reset);

pauseBtn.addEventListener('click', function () {
  notification.innerText = 'Paused!';
  stopBtn.style.display = 'inline';
  pauseBtn.style.display = 'none';
  stopCountdown();
  startCountdown = undefined;
  // pauseCountdown = true;
});
arrowUp.addEventListener('click', function () {
  if (startCountdown === undefined) {
    minutes.innerText++;
    sessionLength.innerText++;
  }
  // } else {
  //   alert('running');
  // }
  // if (pauseCountdown === true) {
  //   alert('running');
  // }
});
arrowDown.addEventListener('click', function () {
  if (startCountdown === undefined && minutes.innerText > 0) {
    minutes.innerText--;
    sessionLength.innerText--;
  }
  // } else {
  //   alert('running');
  // }
  // if (pauseCountdown === true) {
  //   alert('running');
  // }
});

function play() {
  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (seconds.innerText == 0 && minutes.innerText != 0) {
    seconds.innerText = 59;
    minutes.innerText--;
  }
  if (seconds.innerText == 0 && minutes.innerText == 0) {
    timeUp = true;
    if (timeUp == true) {
      sZero.style.display = 'none';
      mZero.style.display = 'none';
    }
    minutes.classList.add('hide');
    seconds.classList.add('hide');
    colon.classList.replace('show', 'hide');

    TimeUpMessage.classList.replace('hide', 'show');
    notification.innerText = 'Click anywhere to start a new session!';

    document.querySelector('html').addEventListener('click', reset);
  }
  // if (TimeUpMessage.classList.contains('show')) {

  // }
  if (seconds.innerText >= 0 && seconds.innerText < 10 && timeUp == false) {
    sZero.style.display = 'inline';
  } else {
    sZero.style.display = 'none';
  }
  if (minutes.innerText >= 0 && minutes.innerText < 10 && timeUp == false) {
    mZero.style.display = 'inline';
  } else {
    mZero.style.display = 'none';
  }
}

function stopCountdown() {
  clearInterval(startCountdown);
}
