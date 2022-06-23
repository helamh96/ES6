let btn = document.getElementById("btn")

btn.addEventListener("click", result)

function result(){
    let base = document.getElementById("base").value
    let exponent = document.getElementById("exponent").value

    let n = myPowerFn(base)
    let result = n(exponent)
    let msg = `${base}^${exponent} = ${result}`
    alert(msg)
}

function myPowerFn(base){
    function pow(exponent){
        return base**exponent
    }
    return pow
}