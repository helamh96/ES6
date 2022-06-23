let strbtn = document.getElementById("change")
let arrayN = document.getElementById("array")
let sumbtn = document.getElementById("add")

String.prototype.exclamation = exclame

function exclame(){
    let excStr = `${this}!`
    return excStr
}

function add(...numbers){
    if (numbers.length === 0) return 0
    return numbers.reduce((a,b)=>a+b)
}

strbtn.addEventListener("click", changeString)
sumbtn.addEventListener("click", sumNumbers)

function changeString(){
    let originalText = document.getElementById("text").value
    alert(originalText.exclamation())
}

function sumNumbers(){
    let originalArr = document.getElementById("array").value
    let arr = originalArr.split(",")
    arr = arr.map( s => s.trim())
    let arrayNumbs = arr.map(n => parseInt(n, 10))
    alert(add(...arrayNumbs))
}