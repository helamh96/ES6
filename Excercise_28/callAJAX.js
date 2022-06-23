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

            Promise.all(calls)
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
    for (let r in responses){
            alert(`The response ${r} has ${responses[parseInt(r)].length} elements`)
        }
}