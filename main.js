
const rollButton = document.querySelector("#roll")
const userInput = document.querySelector("#userInput")
const sumTotal = document.querySelector("#sumTotal")
const showAllRolls = document.querySelector("#showAllRolls")
const listAllRolls = document.querySelector("#listAllRolls")
let resetButton = document.querySelector("#resetButton")


let diceIndex = 0
let dieRolls = []
rollButton.addEventListener("click", function () {
    console.log("roll, roll, roll!!!")
    let userNumber = userInput.value
    while (diceIndex < userNumber) {
    
        dieRolls.push(Math.floor(Math.random() * 6 + 1))
        console.log(dieRolls)
        diceIndex++;
    }
    var index = 0;
    var sum = 0;
    while (index < dieRolls.length) {
        sum = sum + dieRolls[index];
        index++;
    }
    console.log(sum)
    sumTotal.innerHTML = "Total: " + sum 
})

var totalIndex = 0
showAllRolls.addEventListener("click", function () {
    console.log("You rolled these numbers ")
    let index = 0
    while (index < dieRolls.length) {
        let listNumbers = document.createElement("li")
        listNumbers.innerHTML = dieRolls[index]
        listAllRolls.appendChild(listNumbers)
        index += 1
    }
})
resetButton.addEventListener("click", function () {
    console.log("numbers have been reset")
    dieRolls.length = 0
    sumTotal.innerHTML = "Total:"
    listAllRolls.innerHTML = " "
   
})
