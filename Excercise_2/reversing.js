let btn = document.getElementById("btn")
btn.addEventListener("click",reverseAll)

function reverseAll(){
    let text = document.getElementById("text").value
    alert(`reversed: ${text.reverse()}\nreversed by words: ${text.reverseWords()}`)
}


function reverse(){
    let word = this
    let rStr = ""
    for (let i=word.length-1; i>=0; i--){
        rStr += word[i]
    }
    return rStr
}

function reverseWords(){
    let phrase = this
    let words = phrase.split(" ")
    let rStr = ""
    words = words.map((s)=>{return s.reverse()})
    rStr = words.join(" ")
    return rStr
}

String.prototype.reverse = reverse

String.prototype.reverseWords = reverseWords
