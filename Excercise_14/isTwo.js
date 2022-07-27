let btn = document.getElementById("btn")

btn.addEventListener("click", checkText)

function checkText(){
    let strValues = document.getElementById("parameter").value
    let strArray = strValues.split(",")
    let numValues = strArray.map(n=> parseInt(n,10))
    let check = numValues.includes(2)
    if (check){
        console.log(true)
    }else{
        console.log(false)
    }
}
