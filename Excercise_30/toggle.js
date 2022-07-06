const cont = document.querySelector("#container")

cont.addEventListener("click", showHide)

function showHide(event){
    let clicked = event.target
    if (clicked.nextElementSibling.style.visibility === "visible" && clicked.textContent.includes("Toggle")){
        clicked.nextElementSibling.style.visibility = "hidden"
    }
    else{
        clicked.nextElementSibling.style.visibility = "visible"
    }
}