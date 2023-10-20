// challenge
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// adding function in object prototype
Object.prototype.Hassan = function () {
    console.log(`Hassan methods adds ${this.thor} and ${this.spiderman}`);
}

// adding methods in array prototype
let myHeros = ["thor", "spiderman"]
Array.prototype.heyHassan = function () {
    console.log(`hassan says hello ${this.username}`)
}
heroPower.Hassan()
myHeros.Hassan()
myHeros.heyHassan()
heroPower.heyHassan()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
// old syntax of accessing another variable values
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport);

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hassan".trueLength()
"iceTea".trueLength()


// old approach
let myName1 = "hitesh     "
let mychannel1 = "chai     "
console.log(myName1.trim().length)
console.log(mychannel1.trim().length)

// modern and better approach
let myName = "hitesh     "
let mychannel = "chai     "
// console.log(myName.trueLength);

// creating a new prototype method for string
String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`)
}
myName.trueLength()
mychannel.trueLength()


