let button = document.getElementById("btn")
button.addEventListener("click",intersect)

function intersect(){
    let values1 = document.getElementById("firstArr").value
    let values2 = document.getElementById("secondArr").value
    let array1 = values1.split(",")
    let array2 = values2.split(",")
    let filter = array1.filter(value => array2.includes(value))
    alert(`The intersection is: [${filter}]`)
}
