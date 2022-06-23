let button = document.getElementById("max-btn")
button.addEventListener("click", maximum)

function maximum(){
    let strNumbers = document.querySelector(".text").value
    let numbers = strNumbers.split(",")
    let maxNumber = Math.max(...numbers)
    alert(`the max number is ${maxNumber}`)
}