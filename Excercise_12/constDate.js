function modifyDateObject(name,fun){
    Date.prototype[name] = fun;
}

function customDate(){
    return "April 1st";
}

modifyDateObject("constantDate", customDate);

let date = new Date()
date.setUTCHours(15,31,01);

console.log(date);