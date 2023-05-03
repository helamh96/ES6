class Random{
    constructor(min, max){
        this.max = max
        this.min = min
        this.i = max - min + 1 
        this.s = Math.floor(Math.random() * (max - min + 1 - 2) + 1 )
        this.m = Math.ceil(Math.log2(max - min + 1))
        this.a = 5
        this.c = 3**(Math.floor(this.m/2))
    }

    *myRandom() {
        let count = 0
        while(count != this.i){
            let xi = (this.a*this.s + this.c)%(2**this.m)
            this.s = xi
            if(xi<this.i){
                yield (xi + this.min)
                count++
            }
        }
    }
}


const customRand = new Random(6, 10);
const generator = customRand.myRandom();
let output = generator.next();

while (!output.done) {
    console.log(output.value);
    output = generator.next();
}
