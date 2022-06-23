let btn = document.getElementById("btn")

btn.addEventListener("click", checkText)

function checkText(){
    let strValues = document.getElementById("parameter").value
    let strArray = strValues.split(",")
    let numValues = strArray.map(n=> parseInt(n,10))
    let check = includesTwo(...numValues)
    if (check){
        alert("The function includes 2 as aparemeter.")
    }else{
        alert("The function does not include 2 as a paremeter.")
    }
}


function includesTwo(){
    let parameters = Object.values(arguments)
    if (parameters.includes(2)){
        return true
    }
    else{
        return false
    }
}
