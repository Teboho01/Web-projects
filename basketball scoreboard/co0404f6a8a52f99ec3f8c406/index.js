let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

function home1() {
    let result1 = num1 += 1
    num1El.textContent = result1 
}
function home2() {
     let result1 = num1 += 2
    num1El.textContent = result1 
}
function home3() {
    let result1 = num1 += 3
    num1El.textContent = result1
}
function guest1() {
    let result2 = num2 += 1
    num2El.textContent = result2
}
function guest2() {
    let result2 = num2 += 2
    num2El.textContent = result2
}
function guest3() {
    let result2 = num2 += 3
    num2El.textContent = result2
}


function resetButton() {
    document.getElementById("num1-el").textContent = num1 = 0;
    document.getElementById("num2-el").textContent = num2 = 0;
}