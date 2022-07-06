let btn = document.getElementById("btn")

btn.addEventListener("click", orderArray)

function orderArray(){
    let strElements = document.getElementById("elements").value
    let elemArray = strElements.split(",")
    let count = 0
    let n = elemArray.length   
    
    for(let i = 0; i<n ; i++){
        if(elemArray[i] != 0)
            elemArray[count++] = elemArray[i]
    }
    while(count < n){
        elemArray[count++] = 0
    }
    alert(`The new array is: [${elemArray}]`)
}
