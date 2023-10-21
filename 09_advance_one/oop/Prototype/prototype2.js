// this is proto-typal inheritance
const child = {
    fName: 'hassan',
    lName: 'saghir',
}
const parent ={
    name: 'user',
    age: 25,
    // __proto__: child
}
console.log(parent['__proto__'])
// this was old syntax of using prototypal inheritance

// Modern Syntax:
// Object.setPrototypeOf(accessValue,fromwhere)
const n1 = Object.setPrototypeOf(parent,child)
console.log(parent.lName)
console.log(child.lName)
