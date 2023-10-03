// Concept: Hoisting is a method where we call something before its declaration

// fore.g;

call();

function call(){
    console.log('Hoisting Done')
}

// we can't do like this
// bcz it is arrow function and it won't work on it.
// and if it is stored in variable ,then it will also not work


call1()
const call1 = () => {
    console.log('Hoisting Done')
}
// call1()


// ===================================================================================

console.log(x);
var x = 10

console.log(y)
var y='String'


// myFun() 
const myFun = function call() {
    console.log('Hoisting Done')
}
// myFun()
