// let see why we can't change objectOwn method value by using some other methods

let math = Math.PI
console.log(math)
Math.PI = 5 // we can't change this value
console.log(math)

const method = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(method)
// Output: {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// to change value we use this
Object.defineProperty(Math, 'PI', {
    value: 5,
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(math)
// BUT WE CAN MAKE OUR METHOD IN OBJECT WHICH CAN EITHER BE NOT CHANGEABLE FOREXAMPLE IN LIBRARIES,FRAMEWORKS E.T.C

const myName = {
    name: 'hassan',
    age: 19,
    method: function () {
        console.log(this)
    }
}
console.log(myName)
const newName = Object.getOwnPropertyDescriptor(myName, 'name')
console.log(newName)
// OUTPUT:
// {
//   value: 'hassan',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//but if change its values let see
Object.defineProperty(myName, 'name', {
    value: 'bawag1',
    writable: false,
    enumerable: false,
    configurable: false
})
// now magic
const newName1 = Object.getOwnPropertyDescriptor(myName, 'name')
console.log(newName1)
console.log(myName) //=> Output below
// { age: 19, method: [Function: method] } 
// bcz we set overOwn property and make it unchangeable