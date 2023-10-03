// **====================== Numbers ===================**
var num = 50;
console.log(num)
console.log(typeof num);

// for creating and accessing methods of an object
var newNum = new Number(50);
console.log(newNum);
console.log(typeof newNum);

// toString() is used to convert number into String.
var newNum = new Number(50);
console.log(newNum.toString());

// tofixed()
var num = 123;
console.log(num.toFixed(2)); // 123.00
console.log(num.toFixed(1)); // 123.0
console.log(num.toFixed(5)); // 123.00000
console.log(num.toFixed(3)); // 123.000

// toPrecision() is used to precise the orignal value or you can say add 1 at the value of given key inshort round figure
// need practice
const newNumber = 250.6251
console.log(newNumber.toPrecision(3)); //251
console.log(newNumber.toPrecision(5)); //251.6241


// toLocaleString() is used to convert valid number syntax according to region
const newNum1 = 10000000;
console.log(newNum1.toLocaleString()); //By Default US region
console.log(newNum1.toLocaleString('en-PK')); // pakistan region
console.log(newNum1.toLocaleString('en-IN')); // indian region

//  **======================== Math ====================**
// Math.abs() is used to convert negative value into positive
console.log(Math.abs(-4))
console.log(Math.abs(-19))
console.log(Math.abs(19))

// Math.ceil() is used in decimal to round off into big value
// it says if the decimal value is greater than 0 then it will round off the value
console.log(Math.ceil(13.3))// 14
console.log(Math.ceil(13.1))// 14
console.log(Math.ceil(13.9))// 14
console.log(Math.ceil(13.9))// 14
console.log(Math.ceil(13.9))// 14
console.log(Math.ceil(13.0))// 13

// Math.round() is used to round off the decimal number.
console.log(Math.round(12.14)); // 12
console.log(Math.round(12.54)); // 13
console.log(Math.round(12.14)); // 12
console.log(Math.round(12.44)); // 12

// Math.floor() is simply same as "Math.ceil()" but it do with lowest number;
console.log(Math.floor(13.3))// 13
console.log(Math.floor(13.1))// 13
console.log(Math.floor(13.9))// 13
console.log(Math.floor(13.9))// 13
console.log(Math.floor(13.9))// 13
console.log(Math.floor(13.0))// 13

// Math.min() or Math.max()
console.log(Math.min(12, 12, 434, 6, 14, 5, 7, 3));// 3 find the min value
console.log(Math.min(-3, -1, -10, 0, 1, 3));// -10 find the min value
console.log(Math.max(12, 12, 434, 6, 14, 5, 7, 3));// 434 find the max value
console.log(Math.max(-3, -1, -10, 0, 1, 3));// 3 find the max value

// Math.random() with Math.min() or Math.max()
console.log(Math.random()); // generates random number between 0 and 1
console.log((Math.random()) * 10); // generates random number between 0 and 10
console.log(Math.floor(Math.random() * 20) + 1) // generates random number between 1 and 20

// ===========
const min1 = 10;
const max1 = 20;
console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1) // generate b/w 11 - 20

// ==============
const min = 10;
const max = 20;
function randomNumber(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
}
console.log(randomNumber(10, 20));