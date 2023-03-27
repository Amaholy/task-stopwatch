//to use several btns
/* const start_btns = document.getElementsByClassName('start')
start_btns[0].addEventListener('click', function onClick() {
  start()
})
for (const start_btn of start_btns) {
  start_btn.addEventListener('click', function onClick() {
    start()
  })
}
const pause_btns = document.getElementsByClassName('pause')
pause_btns[0].addEventListener('click', function onClick() {
  pause()
})
for (const pause_btn of pause_btns) {
  pause_btn.addEventListener('click', function onClick() {
    pause()
  })
}
const reset_btns = document.getElementsByClassName('reset')
reset_btns[0].addEventListener('click', function onClick() {
  reset()
})
for (const reset_btn of reset_btns) {
  reset_btn.addEventListener('click', function onClick() {
    reset()
  })
} */
const start_btn = document.querySelector('.start')
const pause_btn = document.querySelector('.pause')
const reset_btn = document.querySelector('.reset')
const timer_elem = document.querySelector('.time')
const button_add = document.querySelector('#idAdd')
const container = document.querySelector('.first-block')

let seconds = 0
let interval = null

//event Listeners
button_add.addEventListener('click', blockDuplicate)
start_btn.addEventListener('click', start)
pause_btn.addEventListener('click', pause)
reset_btn.addEventListener('click', reset)

//stopwatch update
function timer() {
  seconds++

  let hours = Math.floor(seconds / 3600)
  let mins = Math.floor((seconds - hours * 3600) / 60)
  let secs = seconds % 60

  if (secs < 10) secs = '0' + secs
  if (mins < 10) mins = '0' + mins
  if (hours < 10) hours = '0' + hours

  timer_elem.innerText = `${hours}:${mins}:${secs}`
}

// start func
function start() {
  if (interval) {
    return
  }
  interval = setInterval(timer, 1000)
}

// stop func
function pause() {
  clearInterval(interval)
  interval = null
}

// reset func
function reset() {
  pause()
  seconds = 0
  timer_elem.innerText = '00:00:00'
}

// create new STOPWATCH block
let startnum = 1
function blockDuplicate() {
  const newdiv = document.createElement('div')
  newdiv.innerHTML =
    `<div class="first-block block">\n<div class="elements">\n<div class="time + ">00:00:00</div>\n<div class="line"></div>\n<div class="buttons">\n<button class="start` +
    startnum++ +
    `"><i class="fa fa-play" aria-hidden="true"></i></button>\n<button class="pause"><i class="fa fa-stop" aria-hidden="true"></i></button>\n<button class="reset"><i class="fa fa-undo" aria-hidden="true"></i></button>\n</div>\n</div>\n</div>\n</div>`
  document.querySelector('.forcopy').appendChild(newdiv)
}
