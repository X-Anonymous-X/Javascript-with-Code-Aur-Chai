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
    return a+b // return keyword is used to exit the function if it reaches there...
    console.log(a+b)// this will not execute bcz its after the return
}
calculator(2,3) // this will not print bcz it calls
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