const array = [1,2,3,4]

function duplicate(){
    let arr = this
    return arr.concat(arr)
}

Array.prototype.duplicate = duplicate;

console.log(array.duplicate())