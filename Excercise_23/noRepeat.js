const textArea = document.getElementById("text-area")
const genButton = document.getElementById("generate")
const restartButton = document.getElementById("restart")

restartButton.addEventListener("click",restart)
genButton.addEventListener("click", setVal,{once:true})
genButton.addEventListener("click", show)

class Random{
    constructor(max,min,s,a,c,m,i){
        this.max = max
        this.min = min
        this.s = s
        this.a = a
        this.c = c
        this.m = m
        this.i = i
    }

    *random(s,a,c,m,i,min){
        let count = 0
        while(count != i){
            let xi = (a*s + c)%(2**m)
            s = xi
            if(xi<i){
                yield (xi + min)
                count++
            }
        }
    }
}

function setVal(){
    let max = Number(document.getElementById("max").value)
    let min = Number(document.getElementById("min").value)
    let i = max - min + 1 
    let m = Math.ceil(Math.log2(i))
    if(m<=4){
        var a = 1
    }else{
        var a = 1 + Math.floor(4*m)
    }
    let c = 3**(Math.floor(m/2))
    let s = Math.floor(Math.random()*(i-2)+1)
    num = new Random(max,min,s,a,c,m,i)
    num = num.random(s,a,c,m,i,min)
}

function show(){
    let next = num.next().value
    if(next !== undefined){
        textArea.innerText = next
    }else{
        count = 0
        textArea.innerText = "All numbers have been displayed"
        genButton.style.display = "none"
        restartButton.style.display = "inline"
    }
}


function restart(){
    genButton.removeEventListener("click", setVal)
    genButton.removeEventListener("click", show)
    textArea.innerText = ""
    genButton.style.display = "inline"
    restartButton.style.display = "none"
    genButton.addEventListener("click", setVal,{once:true})
    genButton.addEventListener("click", show)
}
