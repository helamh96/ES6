let paragraphs = document.getElementsByTagName("p")

for (let i=0; i< paragraphs.length; i = i+2){
    paragraphs[i].addEventListener("click", ()=>{showHide(i)})
}

function showHide(i){
    if (paragraphs[i+1].style.visibility === "hidden"){
        paragraphs[i+1].style.visibility = "visible"
    }
    else{
        paragraphs[i+1].style.visibility = "hidden"
    }
}