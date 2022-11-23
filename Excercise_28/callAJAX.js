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

            Promise.allSettled(calls)
            .then(response => {
                finalRes = {}
                for (let res in response){
                    finalRes[parseInt(res)+1] = response[res]
                }
            })
            .finally(() => {
                let newCallback = callback.bind(finalRes)
                newCallback()
            })}
        } 

async.getAll([axCall1, axCall2], callback)

function callback(){
    return this
}
