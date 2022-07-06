let genButton = document.getElementById("genera")
let minBox = document.getElementById("min")
let maxBox = document.getElementById("max")
let nextButton = document.getElementById("next")
let textArea = document.querySelector(".text-area")

genButton.addEventListener("click", startShowing)

function startShowing(){
    let min = minBox.value
    let max = maxBox.value
    genButton.style.display = "none"
    nextButton.style.display = "inline-block"
    nextButton.value = "Next"
    maxBox.disabled = true
    minBox.disabled = true

    let rand = getRandom(min,max)
    applyNext()
    nextButton.addEventListener("click", applyNext)

    function applyNext(){
        if(textArea.textContent.includes("printed")){
            nextButton.removeEventListener("click", applyNext)
            genButton.style.display = "inline-block"
            nextButton.style.display = "none"
            maxBox.disabled = false
            minBox.disabled = false
            textArea.textContent = ""
        }else{
            textArea.textContent=rand()
        }
        if(textArea.textContent.includes("printed")){
            nextButton.value = "Done!"
        }
    }


    function getRandom(min,max){
        let allNumbers = []
        for (let n = min; n<=max; n++){
            allNumbers.push(n)
        }
        
        function getNumber(){
            let range = allNumbers.length
            if (range <= 0){
                return `All numbers in the interval [${min}, ${max}] have been printed`
            }
            let index = Math.floor(Math.random()*range)
            let randomResult = allNumbers[index]
            allNumbers.splice(index, 1)
            return randomResult
        }
        return getNumber
    }
}