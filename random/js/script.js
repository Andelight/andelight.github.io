let color = document.querySelector('#color');
let clock = document.querySelector('#clock');

//console.log(document.body.children[1].children[0].children[0]);

function dynamicClock() {
  let time = new Date();

  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  let clockString = hours + ':' + minutes + ':' + seconds;
  let colorString = '#' + hours + minutes + seconds;

  clock.textContent = clockString;
  color.textContent = colorString;

  document.body.children[1].children[0].children[0].style.background = colorString;
}

dynamicClock()
setInterval(dynamicClock, 100);


let show_btn = document.querySelector('#show_btn');
let buttonWrapper = document.querySelector('.show');
let clockBox = document.querySelector('.clock_box');

show_btn.addEventListener('click', () => {
  buttonWrapper.style.display = "none";
  clockBox.style.display = "block";
})

let close_btn = document.querySelector('#close_clock_button');
close_btn.addEventListener('click', () => {
  clockBox.style.display = "none";
  buttonWrapper.style.display = "block"
})

let audio = new Audio();
audio.src = '../audio/kavinsky.mp3';
audio.autoplay = false;

let sound_btn = document.querySelector('#sound__btn');
let flag = audio.paused; //1
//alert(flag);

sound_btn.addEventListener('click', () => {
  if (flag) {
    sound_btn.innerHTML = '∥';
    audio.play();
    flag = false;
  } else if (!flag) {
    sound_btn.innerHTML = '&#x266B;';
    audio.pause();
    flag = true;
  }
})




