let table = document.querySelector("table")
let nodeRaws = document.querySelectorAll("tr")
let head = nodeRaws[0]
let btn = document.getElementById("btn")

btn.addEventListener("click", sortByAge)

function sortByAge(){
    let nodes = [].slice.call(nodeRaws, 1)
    for (let i = 1;  i < nodeRaws.length; i++){
        nodeRaws[i].remove()
    }
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