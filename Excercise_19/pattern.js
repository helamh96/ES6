let btn = document.getElementById("btn")
btn.addEventListener("click",searchPattern)

function searchPattern(){
    let p = document.getElementById("pattern").value
    let text = document.querySelector(".text").textContent
    findMatchingText(text,p)
}

function findMatchingText(text, p){
    let matches = []
    const firstString = p.replace(/\*/g,"")[0]
    if(p[0] != firstString){
        var newVal = p.indexOf(firstString)
    }else{
        var newVal = 0
    }
    if(text.indexOf(firstString)< newVal  || text.indexOf(firstString)== -1){
        return "there are no matches"
    }else{
        let count =1;
        let word = p[newVal]
        let indices = [];
        for(let i=0; i<text.length;i++) {
            if (text[i] === p[newVal]) indices.push(i);
        }
        
        indices.forEach(e => {
            let index = Number(e)
            for(let i=1; i<newVal+1; i++){
                if(text[index-i]==p[newVal-i] || p[newVal-i]=="*"){
                    count++
                    word = text[index-i] + word
                }
            }
            for(let i=1; i<p.length-newVal; i++){
                if(text[index+i]==p[newVal+i] || p[newVal+i]=="*"){
                    count++
                    word = word + text[index+i] 
                }
            }
            if(count === p.length){
                matches.push(word)
                word = p[newVal]
                count = 1
            }else{
                word = p[newVal]
                count = 1;
            }
        });
    }
    return matches
}
