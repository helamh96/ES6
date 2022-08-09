const textArea = document.getElementById("text-area")
const genButton = document.getElementById("genera")

genButton.addEventListener("click", startShowing)

min=-2
max=5

function primeFactors(n) {
    const factors = [1];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let count = 0
let i = max-min+1
let div = 1
let pf = primeFactors(i)
let dif = pf.filter(onlyUnique)
dif.forEach(e => div=div*e)
if(i%4==0){
    div*=4
}
if(dif.includes(2)){
    div=div/2
}
div+=1
let x = Math.floor(Math.random()*i) + min
let xj = x

function applyRand(xj){
    let xi = (div*xj+5)%i
    return xi
}


function startShowing(){
    count++
    if(count!=i){
        xj= applyRand(xj)
        textArea.innerText = xj+min
    }else{
        textArea.innerText = "All Elements have been displayed"
        genButton.disabled = true
    }
}
