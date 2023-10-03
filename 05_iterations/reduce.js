// reduce method in js

const method = [1,2,3,4,5]
const reduce = method.reduce(function (accumulator , currentvalue) {
    console.log(`The value of accumlator is ${accumulator} and currentvalue is ${currentvalue}`)
    return accumulator + currentvalue
}, 0)
console.log(reduce)

// output of this function is
/*
The value of accumlator is 0 and currentvalue is 1
The value of accumlator is 1 and currentvalue is 2
The value of accumlator is 3 and currentvalue is 3
The value of accumlator is 6 and currentvalue is 4
The value of accumlator is 10 and currentvalue is 5
Ans: 15 
*/

// Syntax for reduce method is

/*
variable_name = [array]
newVariable = method.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
},startingNumber)
*/

//using implicit arrow function
const method1 = [1,2,3,4,5]
const reduce1 = method1.reduce((acc,curval) => (acc + curval),0)
console.log(reduce1)

// using normal arrow function
const method2 = [1,2,3,4,5]
const reduce2 = method2.reduce((acc,curval) => {
    return acc + curval
},0)
console.log(reduce2)


// Other Example of reduce method in js

const cart = [
    {
        course : 'Javascipt',
        price : 2999
    },
    {
        course : 'Python',
        price : 999
    },
    {
        course : 'C++',
        price : 3999
    },
    {
        course : 'Java',
        price : 1999
    },
]

const shoppingCart = cart.reduce((acc,cart) => {
    return acc + cart.price
},0)
console.log(shoppingCart);