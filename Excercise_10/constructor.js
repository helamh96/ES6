class Person{
    constructor(name,lastName){
        this.name = name
        this.lastName = lastName
    }

    getName(){
        return `${this.name} ${this.lastName}`
    }

    getData(url){
        url = url + `/?name=${this.name}&lastName=${this.lastName}`
        let params = new URLSearchParams(url.slice(22))
        if(params.get("name")==this.name && params.get("lastName")==this.lastName){
            var request = new Request(url, {
                method: "GET"
            })
        }else{
            throw new Error("URL is nop properly escaped")
        }
        fetch(request).then((res) => res)
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
    p1.getData("http://127.0.0.1:5500")
}
