let btn = document.getElementById("btn")

btn.addEventListener("click", orderArray)

function orderArray(){
    let strElements = document.getElementById("elements").value
    let elemArray = strElements.split(",")
    let n = elemArray.length   
    
    elemArray = elemArray.filter(el =>  el != 0)

    while(elemArray.length < n){
        elemArray.push(0)
    }
    alert(`The new array is: [${elemArray}]`)
}
