let arrI = document.getElementById("input-array")
let elToDel = document.getElementById("elements")
let btn = document.getElementById("btn")

btn.addEventListener("click",applyDel)

function applyDel(){
    let origArr = arrI.value.split(",")
    let el = elToDel.value.split(",")
    origArr = origArr.map((e)=> e.trim())
    el =el.map((e)=> e.trim())
    origArr = removeElements(origArr, ...el)
    alert(`[${origArr}]`)
}

function removeElements(array, ...elements){
    for (let e of elements){
        array = array.filter(element => element!== e)
    }
    return array
}