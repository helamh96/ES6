var candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    },
    printName: function(){
        let fullName = `${this.name.firstname} ${this.name.lastname}`;
        return fullName;
    }
 }
 console.log(candidate.printName())