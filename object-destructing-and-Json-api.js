// This concept is known as destructuring of objects
const obj = {
    a: 1,
    b: 2,
    c: 3
}
/* sometime this happens and it doesn't look good 
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
*/
// for that we use this syntax

// syntax
// const {propertyName} = reference/name of obj
// const {propertyName : newNameofthatValue} = reference/name of obj

var {a} = obj
console.log(a)

var {a: one} = obj // now name changes from a into one
console.log(one)

var {a: one, b: two} = obj
console.log(one,two)
// ==========================================================

const newObj = {
    name : 'hassan',
    age: 18,
    City: 'dhaka'
}
let {City} = newObj

console.log(City)