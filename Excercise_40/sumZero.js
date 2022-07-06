// let arr = [0,1,-4,-2,-9,4,6,2,7]

let arr = [3,2,1,0,-3,2,2,-2]

function findNumbers(array){
    let sums0 = [];
    array = [...new Set(array)]
    for (let i = 0; i < array.length-2; i++){
        for (let j= i+1; j < array.length-1; j++){
            for (let k = j+1; k<array.length; k++){
                if(array[i] + array[j] + array[k] === 0){
                    sums0.push([array[i], array[j], array[k]]);
                }
            }
        }
    }
    return sums0;
}

console.log(findNumbers(arr))