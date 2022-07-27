let btn = document.getElementById("btn")
btn.addEventListener("click",searchPattern)

function searchPattern(){
    let p = document.getElementById("pattern").value
    let text = document.querySelector(".text").textContent
    search(text,p)
}

function search(text,p){
    const arr = text.split(" ")
    for(let a of arr){
        let cont = 0
        for(let j=0; j<p.length; j++){
            if(p.charAt(j)!="*"){
                if(a.charAt(j)==p.charAt(j)){
                    cont++
                }
            }else{cont++}
        }
        if(cont==a.length && cont==p.length ){
            console.log(`The string "${a}" matches with the pattern`)
        }    
    }
    
}