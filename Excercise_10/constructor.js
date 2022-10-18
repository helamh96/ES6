class Person{
    constructor(name,lastName){
        this.name = name
        this.lastName = lastName
    }

    getName(){
        return `${this.name} ${this.lastName}`
    }

    getData(url,callback){
        url = new URL(url)
        url.searchParams.set("name",this.name)
        url.searchParams.set("lastName", this.lastName)
        let request = new Request(url, {method: "GET"})
        fetch(request).then(callback)
    }
}

class Medic extends Person{
    constructor (name, lastName, specialty){
        super(name, lastName)
        this.specialty = specialty
    }
}
 

let savingButton = document.getElementById("saving-btn")

savingButton.addEventListener("click", savePerson)

function exampleCallback(arg){
    console.log(arg.status)
}

function savePerson(){
    let name = document.getElementById("name").value
    let lastName = document.getElementById("last-name").value
    let specialty = document.getElementById("specialty").value
    let message = ""
    let p1 = new Medic(name, lastName, specialty)

    if (!p1.name && !p1.lastName){
        message = "The person is unknown"
    }
    else{
        if (p1.specialty){
           message = `The person is called: ${p1.name} ${p1.lastName}, and its specialty is ${p1.specialty}`
        }else{
            message = `The person is called ${p1.name} ${p1.lastName}`
        }
    }
    alert(message)
    p1.getData("http://127.0.0.1:5500",exampleCallback)
}
