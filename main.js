const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const appendMinutes = document.querySelector('.minutes');
const appendSeconds = document.querySelector('.seconds');
const appendTens = document.querySelector('.tens');

let minutes = 00;
let seconds = 00;
let tens = 00;
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
})

function startTimer() {
    tens++;

    if(tens <= 9) {
        appendTens.innerHTML = '0' + tens;
    }

    if(tens > 9) {
        appendTens.innerHTML = tens;
    }

    if(tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }

    if(seconds > 9) {
        appendSeconds.innerHTML = seconds
    }

    if(seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
    }

    if(minutes > 9) {
        appendMinutes.innerHTML = minutes;
    }
}


