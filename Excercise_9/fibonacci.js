let btn = document.getElementById("btn")
btn.addEventListener("click", printElement)

let fib = fibonacciFunction()

function printElement(){
    let num = document.getElementById("elem").value
    let element = fib(num)
    alert(element)
}

function fibonacciFunction(){
    let cache = {0:0, 1:1, 2:1}
    function fibonacci(n){
        if(n<0){
            throw new Error("The number must be positive")
        }
        if (n in cache){
            return cache[n]
        }
        else{
            let newElement = fibonacci(n-1) +fibonacci(n-2)
            cache[n] = newElement
            return newElement
        }
    }
    return fibonacci
}

