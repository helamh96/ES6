let paragraphs = document.getElementsByTagName("p")

for (let i=0; i< paragraphs.length; i = i+2){
    paragraphs[i].addEventListener("click", ()=>{showHide(i); })
}

function showHide(clicked){
    for (let i =1; i < paragraphs.length; i = i+2){
        paragraphs[i].style.visibility = "hidden"
    }
        paragraphs[clicked+1].style.visibility = "visible"
}