// ================ Immediatly Invoked Function Execution =================
// with this method we wrap the function into parenthesis and call it immediatly with parenthesis as shown in examples to avoid child to be get polluted from global function

function global() {
    console.log('global');
    function newFunction() {
        console.log('child function');
    }
}
global()

// to avoid that we use iife method that mean immediatly call that function 
// so that the child function could not get something from global function 

function global() {
    console.log('global');
    (function newFunction() {
        console.log('child function');
    })()
}
global()

    // or another example

    (function global() {
        console.log('global');
    })();
// here we use ';' to avoid error because it immediatly calls the function but it don't know where to exit
(function newFunction() {
    console.log('child');
})() // this is also known as named iife bcz we have function name


    // iife using arrow function

    (newFunction = () => {
        console.log('hello ')
    })(); // this is also known as named iife bcz we have function name 

(() => {
    console.log('world')
})() // this is known as unnamed iife bcz we have no function name

    // or another example for passing arguments

    (newFunction = (name) => {
        console.log(`hello ${name}`) // we use like this with string interpolation
    })('Hassan');

    ((greeting) => {
        console.log(`world is ${greeting} but not even close ${greeting} like heaven`)
    })("'beautiful'")