let btn = document.getElementById("btn")
let heightT = document.getElementById("height")

let g = -0.00259

btn.addEventListener("click", startCount)

function startCount(){
    let   v0 = 0,
    s0 = 10,
    t = 0,
    final = 9
 
    let inter = setInterval(fall, 50)
    btn.style.display = "none"
    function fall(){
        let y = position(t,v0,s0)
        if (y<=0){
            t = 0
            v0 =  Math.sqrt(- 2*final*g)
            s0 = 0
            final--
            y=0
            if (final < 0){
                clearInterval(inter)
                btn.style.display = "block"
            }  
        }
        heightT.textContent = `${String(y).substring(0,4)} in.`
        t++
    }
    
    function position(t,v0,s0){
        return g*t*t/2 + v0*t + s0
    }
}


