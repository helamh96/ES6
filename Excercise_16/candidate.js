const candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    },
    printName: function(){
        return `${this.name.firstname} ${this.name.lastname}`
    }
 }

 console.log(candidate.printName())