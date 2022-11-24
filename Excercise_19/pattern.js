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
                if(text[i]!=undefined && text[i + size]!=undefined){
                    console.log(text.slice(i, i + size))
                    matches.push(text.slice(i, i + size))  
                }
                i++
            }while(i <= text.length-size)
            if(matches.length>0){
                return matches
            }
            return null
        }else{
            return null
        }
    }else{
        let count = 1;
        let word = p[newVal]
        let indices = [];
        for(let i=0; i<text.length;i++) {
            if (text[i] === p[newVal]) indices.push(i);
        }
        console.log(indices)
        indices.forEach(e => {
            let index = Number(e)
            for(let i=1; i<newVal+1; i++){
                if(text[index-i] != undefined){
                    if(text[index-i]==p[newVal-i] || p[newVal-i]==="*"){
                        console.log(text[index-i])
                        count++
                        word = text[index-i] + word
                    }
                }
            }
            for(let i=1; i<p.length-newVal; i++){
                if(text[index+i] != undefined){
                    if(text[index+i]==p[newVal+i] || p[newVal+i]==="*"){
                        console.log(text[index-i])
                        count++
                        word = word + text[index+i] 
                    }
                }
            }
            if(count === p.length){
                console.log(p)
                matches.push(word)
                word = p[newVal]
                count = 1
            }else{
                word = p[newVal]
                count = 1;
            }
        });
    }
    if(matches == []) return null
    else return matches
}
