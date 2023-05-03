'use strict'

var async = {
    getAll: function ( urlArray, callback){ 
            let calls = []
            let finalRes = {}
            for (let url in urlArray){
                calls.push(function(){
                    return fetch(urlArray[url]).then(data => data.json())
                    }())
            }
            Promise.allSettled(calls)
            .then(response => {
                for (let res in response){
                    finalRes[parseInt(res)+1] = response[res]
                }
            })
            .finally(() => {
                let newCallback = callback.bind(finalRes)
                newCallback()
            })}
        } 

async.getAll(["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/todos"], callback)

function callback(){
    console.log(this)
    return this
}
