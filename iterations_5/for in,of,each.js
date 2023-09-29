// There are three common loops of "for loop"
// for...in
// for...of
// for each

// ==========================================================================================================
// for...of loop usually used in array
// ==========================================================================================================

const arr = [1,2,3,4,5]
for (const key of arr) {
    console.log(key)
}

const arr1 = ['player1','player2','player3','player4','player5']
for (const key of arr1) {
    console.log(key)
}
// object is not iterable for "for...of loop"
const obj = {
    name : 'hassan',
    age : 19
}
for (const key of obj){
    console.log(obj[key])
}

// ==========================================================================================================
/// for...in loop usually used in object
// ==========================================================================================================

const str = 'Hassan'
for (const key in str) {
    console.log(key)
}

const array = ['Hassan','fahad','mohsin']
for (const key in array) {
    console.log('This is only index ',key)
    console.log('This is key of array ',array[key])
    console.log(`The index value of ${key} is ${array[key]}`)
    console.log(' ')
}

const object = {
    name : 'hassan',
    age : 19 
}
for (key in object){
    console.log(key)
    console.log(`${key} of object is ${object[key]}`)
}

// for in loop on map
const map = new Map(); // this will not run bcz it is object and objects are non-iterable ...
map.set('PK',"Pakistan")
map.set('IN',"India")
map.set('USA',"United State of America")

for (const key in map){
    console.log(key)
}

// ==========================================================================================================
// for...each loop commonly used for getting array 
// ==========================================================================================================

const myArray = ['code1','code2','code3','code4'];
console.log(' ');
console.log('Output of "for...each loop with function"')
console.log(' ');

myArray.forEach(function (value,index,array) { // callback function that's why dont use function name directly in it
    console.log(`This is the value of array ${value},index ${index},array ${array}`)
})
console.log(' ');
console.log('Output of "for...each loop with arrow function"')
console.log(' ');
myArray.forEach((value,index,array) => { // callback function that's why dont use function name directly in it or store in variable
    console.log(`This is the value of array ${value},index ${index},array ${array}`)
})
console.log(' ');
console.log('Output of "for...each loop with outside used function"')
console.log(' ');

myArray.forEach(getArray) // in callback function we call function name outside the forEach parenthesis

function getArray(value,index,array) {
    console.log(`This is the value of array ${value},index ${index},array ${array}`)
}


// "for...each loop" for iterating objects in array usually used for getting database values

const newArray = [
    {
        programmingName : 'Javascript',
        extension : '.js'
    },
    {
        programmingName : 'C++',
        extension : '.cpp'
    },
    {
        programmingName : 'Python',
        extension : '.py'
    }
]
// newArray.forEach((item) => {    
//     console.log(item.programmingName)
// })
newArray.forEach(function (index,item,value) {
    console.log(index,item,value)
})