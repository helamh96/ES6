let btn = document.getElementById("btn")
btn.addEventListener("click",searchPattern)

function searchPattern(){
    let p = document.getElementById("pattern").value
    let text = document.querySelector(".text").textContent
    console.log(findMatchingText(text,p))
}

function findMatchingText(text, p){
    const firstString = p.replace(/\*/g,"")[0]
    if(p[0] != firstString){
        var newVal = p.indexOf(firstString)
    }else{
        var newVal = 0
    }
    if(text.indexOf(firstString)< newVal  || text.indexOf(firstString)== -1){
        return "there are no matches"
    }else{
        let indices = [];
        for(let i=0; i<text.length;i++) {
            if (text[i] === p[newVal]) indices.push(i);
        }
        console.log(indices)
        let count =-1;
        indices.forEach(e => {
            let index = Number(e)
            for(let i=0; i<newVal+1; i++){
                if(text[index-i]==p[newVal-i] || p[newVal-i]=="*"){
                    count++
                }
            }
            for(let i=0; i<p.length-newVal; i++){
                if(text[index+i]==p[newVal+i] || p[newVal+i]=="*"){
                    count++
                }
            }
            if(count === p.length){
                return true
            }else{
                count = -1;
                return true
            }
        });
        
        if(count == p.length){
            return true
        }else{
            return false
        }
    }
}
