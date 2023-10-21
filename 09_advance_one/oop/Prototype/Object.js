function string(name){

    return name
}

string.power = 'Hassan'

console.log(string('bawag'));
console.log(string.power);
console.log(string.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}
// creating or adding own new methods in object prototype

let create = createUser.prototype.hassan = function () {
    this.username = "hassan"
}
console.log(typeof create)

createUser.prototype.printMe = function(){
    console.log(`username is ${this.username}`);
}

const chai = new createUser()
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/