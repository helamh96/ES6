let btn = document.getElementById("btn")
let changingEl = document.getElementById("change")

btn.addEventListener("click", changeDivColor)

function changeDivColor(){
    let rColor = Math.floor(Math.random() * 255)
    let gColor = Math.floor(Math.random() * 255)
    let bColor = Math.floor(Math.random() * 255)
    changingEl.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`
}