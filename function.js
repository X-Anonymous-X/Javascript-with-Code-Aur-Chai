// simple function
function naam() {
    console.log('name')
    console.log('email')
    console.log('number')
    console.log('password')
}
naam()

// funtion with parameters
function call(user) {
    console.log(user.length)
}
let x = 'bwaasdasd'
call(x)

// function with parameter and return
function calculator(a,b){
    return a + b // return keyword is used to exit the function if it reaches there...
    console.log(a+b)// this will not execute bcz its after the return
}
calculator(2,3) // this will not print bcz it calls not print
console.log(calculator(2,3))

 
function getAge(age) {
    if (age >= 18) {
        return 'You can drive'
    } else {
        return 'You cannot drive'
    }
}

console.log(getAge(18))
console.log(getAge(19))
console.log(getAge(18.5))
console.log(getAge(17.5))
console.log(getAge(17))

// difference b/w parameters and arguments

// parameter are value which is defined in function like 
// function name(a,b){
    // console.log(a + b)
// } 
// name(10,20)
// here a,b are parameter
// and when we call this function and add value in it are known as argument like 10,20

// arguments are value which is not defined in function

function addTwoNumbers(value1 , value2){
    return value1 + value2
}
console.log(addTwoNumbers(50,50))
console.log(typeof addTwoNumbers())

function call(username){
    return `${username} just logged in`
}

console.log(call('hassan'))
console.log(call(''))
console.log(call()) // output will be : undefined just logged in  ;So to avoid that we use

function call(username){
    if (username === undefined || username === '') { 
        console.log('Plz Enter Your Name')
        return
    }
    return `${username} just logged in`
}
console.log(call())
console.log(call(''))
console.log(call('hassan'))
//  we can also use (!username) instead of (username === undefined || username === '') both are same as shown

function call(username){
    if (!username) { 
        console.log('Plz Enter Your Name')
        return
    }
    return `${username} just logged in`
}
console.log(call())
console.log(call(''))
console.log(call('hassan'))


// sometimes this happen when user didn't pass any value "console.log(call())" so we do this

function call(username = 'Nobody'){
    if (!username) { 
        console.log('Plz Enter Your Name')
        return
    }
    return `${username} just logged in`
}
console.log(call())
console.log(call(''))
console.log(call('hassan'))

// ===========================================================
 
function myFunction(x){
    return x % 2 == 0
}

console.log(myFunction(4))
// =========================================================
function myFunction(x){
    return x ** 53
}
console.log(myFunction(2))
// =========================================================

function cart(...itemPrice){
    return itemPrice
}

console.log(cart(123,123,4556,100,2000))

// calling objects in function ===========================================
const objects = {
    name: 'hassan',
    age: 18,
    city: 'dhaka'
}

function callingObjects(getObj){
    return `${getObj.name} is ${getObj.age} years old and currently staying in ${getObj.city}`
}
// console.log(callingObjects(objects))

// we can also get objects from function like this
console.log(callingObjects({
    name : 'hassan',
    age: 18,
    City: 'dhaka' // see here 'c' is greater in City so it will be undefined
}))

// calling arrays in function ===========================================
const arrays = [12,100,300,500,1000,2000]

function callingArrays(getArr){
    return getArr
    return getArr[0] // for specific value in array
}

console.log(callingArrays(arrays))

// we can also get arrays from function like this
console.log(callingArrays([12,2000,300]))


// getting all array values ===========================================
const array1 = [12,100,300,500,1000,2000]

function callingArrays(...getArr){
    return getArr[0]
}

console.log(callingArrays(array1))