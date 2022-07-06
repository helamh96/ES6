let table = document.querySelector("table")
let nodeRaws = document.querySelectorAll("tr:not(:first-child)")
let ageT = document.getElementById("btn")

ageT.addEventListener("click", sortByAge)

function sortByAge(){
    let nodes = [].slice.call(nodeRaws)
    nodes.sort(sortingByAge)
    for (let n of nodes){
        table.appendChild(n)
    }
}

function sortingByAge(a,b){
    let ageA = a.querySelectorAll("td")[1].textContent
    let ageB = b.querySelectorAll("td")[1].textContent
    let numA = parseInt(ageA)
    let numB = parseInt(ageB)
    return numA - numB
}