let arr = [0,1,-4,-2,-9,4,6,2,7]

function findNumbers(array){
    let sums0 = [];
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