//call ------------------------------------------------------------------------------
// this method is used to call any function from another variable or obj
//example:

const obj = {
    firstName: 'Hassan',
    lastName: 'Saghir',
    callfullName: function(){
        console.log(`Full name is ${this.firstName} ${this.lastName}`)
    }
}
obj.callfullName()

const newObj = {
    firstName: "Unknown",
    lastName: 'BawaG'
}
// Syntax
// functionName.call(whereToCall)
obj.callfullName.call(newObj)

//Another example with parameters: ---------------------------------------------

const callfullName = function(nickname,age){
    console.log(`Full name is ${this.firstName} ${this.lastName} and nickname is ${nickname} and age is ${age}`)
}
// Syntax
const obj1 = {
    firstName: 'Hassan',
    lastName: 'Saghir',
}
// functionName.call(whereToCall,arguments...)
callfullName.call(obj1,'user',19)

const newObj1 = {
    firstName: "Unknown",
    lastName: 'BawaG', 
}
callfullName.call(newObj1,'user302',30) 

// apply --------------------------------------------------------------------------------

// this method is same as call but the difference is it wrap it in an arrayList
// forExample:
const applyfullName = function(){
    console.log(`Full name is ${this.firstName} ${this.lastName}`)
}
const obj2 = {
    firstName: 'Hassan',
    lastName: 'Saghir',
}
applyfullName.apply(obj2)

const newObj2 = {
    firstName: "Unknown",
    lastName: 'BawaG',
}
applyfullName.apply(newObj2)

// with parameters ---------------------------------------------------------------------------

const withParameters = function(nickname,age){
    console.log(`Full name is ${this.firstName} ${this.lastName} and nickname is ${nickname} and age ${age}`)
}
const obj3 = {
    firstName: 'Hassan',
    lastName: 'Saghir',
}
// we can pass arguments in apply method using [] ,known as arrayList
withParameters.apply(obj3,['user',19])

const newObj3 = {
    firstName: "Unknown",
    lastName: 'BawaG',
}
withParameters.apply(obj3,['user302',30])

// by using call,apply method we avoid the repeating to create function for single individual object

// bind -------------------------------------------------------------------------------
// this method is used to bind the function copy with obj to which you want to bind and make it as function which can be invoked/call later
// forExample:

const bindMethod = function(){
    console.log(`Full name is ${this.firstName} ${this.lastName}`)
}
const obj4 = {
    firstName: 'Hassan',
    lastName: 'Saghir',
}
// Syntax:
// variable_name = function_name.bind(wheretocall)
const binding = bindMethod.bind(obj4)
binding()

// as we know it creates a function which can be invoked later so we store it in variable like
// console.log(binding) // this will print the function which call but will not be invoked properly

// with Parameters
const bindMethodwithArgs = function(a,b){
    console.log(`Full name is ${this.firstName} ${this.lastName} ${a},${b}`)
}
const newObj4 = {
    firstName: "Unknown",
    lastName: 'BawaG',
}
const newBind = bindMethodwithArgs.bind(newObj4,'a-Value','b-Value')
newBind()
