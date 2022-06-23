function modifyDateObject(name,fun){
    Date.prototype[name] = fun;
}

function customDate(){
    return "April 1st";
}

modifyDateObject("constantDate", customDate);

let date = new Date();

console.log(date.constantDate());