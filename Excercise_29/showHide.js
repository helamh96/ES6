let id1 = document.getElementById("id1")
let div = document.querySelector("div")


id1.addEventListener("click", showHide)

function showHide(){
    if (div.style.visibility === "hidden"){
        div.style.visibility = "visible"
        id1.textContent = "Hide"
    }else{
        div.style.visibility = "hidden"
        id1.textContent = "Show"
    }
}