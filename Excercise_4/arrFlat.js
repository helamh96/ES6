let btn = document.getElementById("btn")
btn.addEventListener("click",flat)

function flat(){
    let array = JSON.parse(document.getElementById("array").value)
    function hasObject(array){
        for (let arr of array){
            if (typeof arr === "object" && arr){
                return true
            }
        }
    }

    while (hasObject(array)){
        array = array.flat()
    }
  
    alert(`Flaten array: [${array}]`)
}
