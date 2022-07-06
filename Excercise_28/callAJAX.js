const res = document.getElementById("result")
const axCall1 = "https://jsonplaceholder.typicode.com/users"
const axCall2 = "https://jsonplaceholder.typicode.com/todos"

var async = {
    getAll: function ( urlArray, callback){ 
            let calls = []
            
            for (let url in urlArray){
                calls.push(function(){
                    return fetch(urlArray[url]).then(data => data.json())
                    }())
            }

            Promise.any(calls)
            .then(response => {
                let finalRes = {}
                for (let res in response){
                    finalRes[parseInt(res)+1] = response[res]
                }           
                callback(finalRes)})
            } 
    }

async.getAll([axCall1, axCall2], callback)

function callback(responses){
    for (let i in responses){
        let p = document.createElement('p');
        p.innerHTML = `The type of the result of function ${i} is ${typeof responses[i]}.`;
        res.appendChild(p);
        }
}