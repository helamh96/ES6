let id1 = document.getElementById("id1")
let div = document.querySelector("div")

console.log(div)

id1.addEventListener("click", showHide)

function showHide(){
    if (div.style.visibility === "visible"){
        div.style.visibility = "hidden"
        id1.textContent = "Show"
    }else{
        div.style.visibility = "visible"
        id1.textContent = "Hide"
    }
}