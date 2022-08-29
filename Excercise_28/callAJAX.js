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
                let finalRes = {}
                for (let res in response){
                    finalRes[parseInt(res)+1] = response[res]
                }           
                callback(finalRes)})
        } 
    }

async.getAll([axCall1, axCall2], callback)

function callback(responses){
    Object.keys(responses).forEach(i => {
        let p = document.createElement('p');
        p.innerText = `${i}:<${responses[i].status}>`;
        res.appendChild(p);
    })
}
