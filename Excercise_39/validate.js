let btn = document.getElementById("btn")

let consecutives = { first:"1234567890",
                    second:"qwertyuiop",
                    third: "asdfghjkl",
                    fourd: "zxcvbnm"}

btn.addEventListener("click", check)

function check(){
    let text = document.getElementById("text").value
    if (text.length < 4  || !validate(text)){
        alert("valid")
    }else{
        alert("invalid")
    }
}

function validate(text){
    for (let i = 0; i <= text.length -4; i++){
        let substr = text.substring(i,i+4)
        for (let key in consecutives){
            if (consecutives[key].includes(substr)) return true 
        }
    }
    return false
}