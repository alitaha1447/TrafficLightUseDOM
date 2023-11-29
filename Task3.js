
let stop_btn = document.querySelector('.stop_btn');
let ready_btn = document.querySelector('.ready_btn');
let go_btn = document.querySelector('.go_btn')

let stop_circle = document.querySelector('.stop_circle')
let ready_circle = document.querySelector('.ready_circle')
let go_circle = document.querySelector('.go_circle')

function stop() {
  stop_btn.classList.add('red')
  ready_btn.classList.remove('yellow')
  go_btn.classList.remove('green')

  stop_circle.classList.add('red')
  ready_circle.classList.remove('yellow')
  go_circle.classList.remove('green')

}

function ready() {

  ready_btn.classList.add('yellow')
  stop_btn.classList.remove('red')
  go_btn.classList.remove('green')

  ready_circle.classList.add('yellow')
  stop_circle.classList.remove('red')
  go_circle.classList.remove('green')

}

function go() {
  go_btn.classList.add('green')
  ready_btn.classList.remove('yellow')
  stop_btn.classList.remove('red')

  go_circle.classList.add('green')
  ready_circle.classList.remove('yellow')
  stop_circle.classList.remove('red')

}