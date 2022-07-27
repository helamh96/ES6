let ball = document.getElementById("ball")
let g = -0.05


ball.addEventListener("click", startCount)

function startCount(){
    ball.removeEventListener("click",startCount)
    let   v0 = 0,
    s0 = 10,
    t = 0,
    final = 9
 
    let inter = setInterval(fall, 50)

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
                ball.addEventListener("click", startCount)
            }  
        }
        ball.style.bottom = `${y}cm`
        t++
    }
    
    function position(t,v0,s0){
        return g*t*t/2 + v0*t + s0
    }
}


