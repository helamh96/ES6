let obj1 = {a:1,
    b:2,
    c:3,
    d:4,
    e:5

}

let obj2 = {a: 'a',
    b:2,
    c:3,
    d:null ,
    f:5
    }

let difValues = differentValues(obj1,obj2)

console.log("The original objects were: \n"+
JSON.stringify(obj1) +" and " +JSON.stringify(obj2)+ " The different values are "+ JSON.stringify(difValues))

function differentValues(obj1,obj2){
let objDiferent = []
for (let key in obj2){
if (key in obj1){
    if (obj1[key] !== obj2[key]){
        objDiferent.push(key)
    }
}else{
    objDiferent.push(key)
}
}
for (let key in obj1){
if (!(key in obj2)){
    objDiferent.push(key)
}
}
return objDiferent
}