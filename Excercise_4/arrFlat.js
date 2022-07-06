const arr = [1,2,7,[3,[4,5]],4,5,[3,4]]

function flat(arr) {
    let result = [] 
    let main = arr, first
    while(main.length > 0) { 
       first = main[0]
       if(Array.isArray(first)) { 
       Array.prototype.splice.apply(main, [0, 1].concat(first))
    } else {
       result.push(first)
       main.splice(0, 1)
    }
    }
    return result
}

console.log(flat(arr))