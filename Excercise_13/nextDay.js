Date.prototype.nextDay = nextDay

function nextDay(){
    let current = this.getDate()
    let newDate = new Date
    newDate.setDate(current+1)
    return newDate
}

let date = new Date() 
console.log(`Today is ${date}, and tomorrow will be ${date.nextDay()}`)