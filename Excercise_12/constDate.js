function MyDate(year,month,day) {
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    return date;
}  

const myDate = new MyDate(1996,3,6);
  
console.log(myDate);
