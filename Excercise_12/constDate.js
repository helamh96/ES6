let date = new Date()

function changeDate(date,format){
    if(format=="milliseconds"){
        let ms = date.getMilliseconds()
        return `Since this date have passed ${ms} milliseconds`
    }else if(format=="am/pm"){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let ampm = hours >= 12 ? "pm" : "am"
        hours = hours % 12
        hours = hours ? hours : 12
        minutes = minutes < 10 ? "0"+minutes : minutes
        let strTime = hours + ":" + minutes + " " + ampm
        return strTime
    }else if(format == "dayOfWeek"){
        let day = date.getDay()
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        day = weekday[day]
        return `the day is ${day}`
    }
}

console.log(changeDate(date,"dayOfWeek"))
