const singleChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0]
let btn = document.getElementById("btn")
btn.addEventListener("click",searchPattern)

function searchPattern(){
    let p = document.getElementById("pattern").value
    let text = document.querySelector(".text").textContent
    console.log(p)
    if(p.includes("*")){
        for(let i=0; i<singleChar.length; i++){
            let newp = p.replace("*",singleChar[i])
            search(text,newp)
        }
    }else{
        search(text,p)
    }
    
}

function search(text,p){
    const arr = text.split(" ")
    for(let a of arr){
        if(a.match(p) && a.length === p.length){
            console.log("string "+a+" matches")
        }
    }
}