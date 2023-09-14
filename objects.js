// there are two type to access object
// 1) object using literals            2) object using constructor (singleton)

// 1) object literals
let sym = Symbol('Hassan')
const myObj = {
    name: 'Hasssan',
    age: 30,
    'full name' : 'Hassan Saghir',
    email : "bawag@gmail.com",
    isLoggedin : [true,false],
    // accessing Symbol in objects
    sym : "hassan", // this sym will print as string
    [sym] : "hassan" // this will print as symbol bcz of using []
}
myObj['email'] = 'bawag@chatgpt.com'
console.log(myObj)
console.log(myObj.isLoggedin[1]) // we can also access array in objects

// console.log(typeof myObj) //object
// console.log(myObj.name) // 'Hassan'
// console.log(typeof myObj.name)
// console.log(myObj['name']) // we can also use this bcz this is used to access few datatypes 'Hassan' 
// console.log(typeof myObj.'full name') // we cant do this bcz this is also definded as string in objects
// instead do this
// console.log(typeof myObj['full name']);

// console.log(myObj.email);
// console.log(typeof myObj.'email'); // this will not work
// console.log(typeof myObj.email);

// console.log(myObj['email']);
// console.log(typeof myObj['email']);

// console.log(myObj.sym);
// console.log(typeof myObj.sym);

// console.log(myObj[sym]);
// console.log(typeof myObj[sym]);


// =============================================
let x = sym.name = 'Bawag'
console.log(x)
// the freeze method is used to freeze the value of object

// Object.freeze(myObj) // it freezes the whole

let y = myObj.email;
myObj.email = 'bawag@microsoft.com'
console.log(y)
console.log(myObj)

// adding functions in myObj
// simple function is created like this
function greeting() {
    console.log('Hello')
}
console.log(greeting());

// Object function is created like this
/*
object-name.functionName = function(){
    statement...
}
*/
myObj.greetingtwo = function() {
    console.log(`Hello user, ${this["full name"]}`)
}
console.log(myObj.greetingtwo());

/*===============================================================================================================
fix this problem why my function is not running:

let sym = Symbol('Hassan')
const myObj = {
    name: 'Hasssan',
    age: 30,
    'full name' : 'Hassan Saghir',
    email : "bawag@gmail.com",
    isLoggedin : [true,false],
    // accessing Symbol in objects
    sym : "hassan", // this sym will print as string
    [sym] : "hassan" // this will print as symbol bcz of using []
}
myObj['email'] = 'bawag@chatgpt.com'
console.log(myObj)

Object.freeze(myObj) // it freezes the whole obj
myObj.greetingtwo = function() {
    console.log(`Hello user, ${this["full name"]}`)
}
console.log(myObj.greetingtwo());

ChatGPT response : 
The issue with your code is that you are trying to add a new property greetingtwo to an object (myObj) that has been frozen using Object.freeze. When you freeze an object, it becomes immutable, and you cannot add or modify properties on it.

If you want to add the greetingtwo function to the myObj object, you should do it before freezing the object. 

*/