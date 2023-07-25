function compare(string, pattern){
    let isSame = true
    if(string.length!=pattern.length){
        return false
    }else{
        for(let i=0; i<string.length; i++){
            if(string[i]!==pattern[i]&&pattern[i]!=="*"){
                isSame = false        
            }
        }
    }
    return isSame
}

function getAllIndex(string,char){
    let indices = [];
    for(let i=0; i<string.length;i++) {
        if (string[i] === char) indices.push(i);
    }
    return indices;
}

function match(string, pattern){
    let firstNonAstherisk = pattern.replaceAll("*","")
    if(firstNonAstherisk[0]==undefined){
        if(pattern.length<=string.length){
            return string.slice(0, pattern.length)
        }else{
            return null
        }
    }else{
        const indexOfFirstChar = string.indexOf(firstNonAstherisk[0])
        if(indexOfFirstChar == -1){
            return null
        }else{
            let matchingIndex = getAllIndex(string, firstNonAstherisk[0])
            const matchingSubstring = matchingIndex.map(e => string.slice(e-pattern.indexOf(firstNonAstherisk[0]), -pattern.indexOf(firstNonAstherisk[0])+pattern.length+e))
            let isFound = false
            let match = null
            matchingSubstring.forEach(el => {
                if(!isFound){
                    if(compare(el,pattern)){
                        match = el
                        isFound = true
                    }
                }
                
            })
            return match
        }
    }
}

//tests

console.log(match("abcdec","**"))
console.log(match("abcdec","**c"))
