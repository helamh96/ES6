let months = document.getElementById("months").textContent
months = shareCorrectO(months)

let result = document.getElementById("new")
result.textContent = months

function shareCorrectO(monthStr){
    let nextMonth = {January:"February", 
                    February:"March", 
                    March:"April", 
                    April:"May", 
                    May:"June", 
                    June:"July", 
                    July:"August", 
                    August:"September", 
                    September:"October",
                    October:"November",
                    November:"December", 
                    December: "January"}

    let monthArr = monthStr.split(" ")
    let bound = []
    for (var i = 0; i<monthArr.length-1; i++){
        if(monthArr[i+1] !== nextMonth[monthArr[i]] && !bound.includes(monthArr[i])){
            bound.push(monthArr[i])
        }
    }
    if (!bound.includes(monthArr[i])){
        bound.push(monthArr[i])
    }

    monthStr = bound.reduce(getNextMonth, monthStr)

    function getNextMonth(originalStr, currentValue){
        return originalStr.replaceAll(currentValue, `${currentValue} ${nextMonth[currentValue]}`)
    }
    
    return monthStr
}