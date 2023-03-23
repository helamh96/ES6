let btn = document.getElementById("btn")
btn.addEventListener("click",searchPattern)

function searchPattern(){
    let p = document.getElementById("pattern").value
    let text = document.querySelector(".text").textContent
    console.log(findMatchingText(text,p))
}

function findMatchingText(text, p){
    let matches = []
    let newVal
    const firstString = p.replace(/\*/g,"")[0]
    if(p[0] != firstString && firstString != undefined){
        newVal = p.indexOf(firstString)
    }else{
        newVal = 0
    }
    if(text.indexOf(firstString) == -1){
        if(!firstString){
            let size = p.length
            let i = 0
            let matches = []
            do{
                if(text[i]!==undefined && text[i+size-1]!==undefined){
                    matches.push(text.slice(i, i + size))
                }
                i = i+size
            }while(i < text.length-size+1)
            return matches
        }else{
            return null
        }
    }else{
        
        let word = p[newVal]
        let indices = [];
        for(let i=0; i<text.length;i++) {
            if (text[i] === p[newVal]) indices.push(i);
        }
        let count = 1;
        indices.every(e => {
            let index = Number(e)
            for(let i=1; i<newVal+1; i++){
                if(text[index-i]==p[newVal-i] || (p[newVal-i]=="*" && text[index-i] != undefined)){
                    count++
                    word = text[index-i] + word
                }
            }
            for(let i=1; i<p.length-newVal; i++){
                if(text[index+i]==p[newVal+i] || (p[newVal+i]=="*" && text[index+i] != undefined)){
                    count++
                    word = word + text[index+i] 
                }
            }
            if(count === p.length){
                matches.push(word)
                word = p[newVal]
                count = 1
                return false;
            }else{
                word = p[newVal]
                count = 1;
            }
        });
    }
    if(matches == []) return null
    else return matches
}
