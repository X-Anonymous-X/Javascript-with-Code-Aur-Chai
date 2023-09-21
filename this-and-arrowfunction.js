const obj = {
    name: 'hassan',
    age:18,
    message: function(){
        return `${this.name} is ${this.age} old`
    }
}
console.log(obj)
obj.name = 'randomGuy'
console.log(obj)

// this method only works in objects
console.log(this)
function thisMethod () {
    console.log(this)
}
thisMethod()

// Arrow Functions in js
// this is normal functions

// const newVar = function (operand1 , operand2) {
    // return operand1 + operand2
// }
// console.log(newVar(20 ,40))

// this is arrow function where we remove "function" keyword and add arrow after the parenthesis as shown
const newVar = (operand1 , operand2) => {
    return operand1 + operand2
}
console.log(newVar(20 ,40))
// the output of arrow function and normal function is same 

// This is Another method of arrow function known as "Implicit Return Arrow Function" or "single line funtion"
// we add parenthesis instead of return keyword

const Implicit1 = (val1, val2) => val1 + val2
console.log(Implicit1(3,9))


const Implicit = (val1, val2) => (val1 + val2)
console.log(Implicit(20 , 40))

// now if want to add object in arrow function

// without parenthesis the return function will not work for object
const object1 = () => {name : "hassan"}

console.log(object1())
// using parenthesis
const object2= () => ({name : "hassan"})

console.log(object2())

const newObj = {
    name: 'hassan',
    age:18,
    message: function(){
        return this.name + ' is ' + this.age + ' years old '
    }
}
console.log(newObj.message())