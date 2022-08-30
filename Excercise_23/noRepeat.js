const textArea = document.getElementById("text-area")
const genButton = document.getElementById("genera")
genButton.addEventListener("click",setValue,{once:true})
genButton.addEventListener("click", startShowing)

let max, min, i, count, a, c, s

function setValue(){
    max = Number(document.getElementById("max").value)
    min = Number(document.getElementById("min").value)
    i = max - min + 1 
    count = 0
    m = Math.ceil(Math.log2(i))
    if(m<4){
        a = 1
    }else{
        a = 1 + Math.floor(4*m)
    }
    c = 3**(Math.floor(m/2))
    s = Math.floor(Math.random()*(i-2)+1)
}


function applyRand(seed){
    let xi = (a*seed + c)%(2**m)
    if(xi<i){
        s = xi
        count++
    }
    else{
        applyRand(xi)
    }
}


function startShowing(){
    if(count!=i){
        applyRand(s)
        textArea.innerText = s + min
    }else{
        textArea.innerText = "All Elements have been displayed"
        genButton.disabled = true
    }
}
