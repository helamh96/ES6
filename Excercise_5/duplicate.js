let button = document.querySelector("#btn")
button.addEventListener("click", duplicate)

function duplicate(){
    let values = document.querySelector("#array-values").value
    let array = values.split(",")
    alert(`The duplicated array is: [${array.concat(array)}]`)
}
