let genButton = document.getElementById("genera")
let textArea = document.querySelector(".text-area")

genButton.addEventListener("click", startShowing)

function* random() {
    let min = document.getElementById("min").value
    let max = document.getElementById("max").value
    let i = max - min +1
    let arr = Array.from(Array(i).keys()).map((idx) => Number(min) + Number(idx))
    while (i--){
        yield arr.splice(Math.floor(Math.random()*(i+1)),1)[0]
    }
}

let output = random()

function startShowing(){
    genButton.value = "next"
    let nextV = output.next().value
    if(nextV!=undefined){
        textArea.textContent = nextV
    }else{
        textArea.textContent = "All numbers have been displayed, click generate for start again"
        genButton.value = "Generate"
        output = random()
    }
}
