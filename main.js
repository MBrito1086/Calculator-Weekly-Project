const numbers = document.getElementsByClassName('nums')
const ops = document.getElementsByClassName('op')
const clear = document.getElementsByClassName('buttons')
const equals = document.getElementsByClassName('equals')
const displayBox = document.querySelector('p')

// numbers.addEventListener("click", clicks())
// ops.addEventListener("click", clicks())
// clear.addEventListener("click", clicks())


// function () {
//     document.getElementsByTagName("p").innerHTML = "";
// }

// let displays = ""

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function click() {
     displayBox.innerHTML += numbers[i].textContent
  })
}

for (let i = 0; i < ops.length; i++) {
  ops[i].addEventListener("click", function click() {
     displayBox.innerHTML += ops[i].textContent
  })
}

for (let i = 0; i < clear.length; i++) {
  clear[i].addEventListener('click', function click() {
  displayBox.innerHTML = ''
})
}

for (var i = 0; i < equals.length; i++) {
  // let total = displayBox.parseInt
  equals[i].addEventListener('click', function equal(){
  displayBox.innerHTML += total
})
}
