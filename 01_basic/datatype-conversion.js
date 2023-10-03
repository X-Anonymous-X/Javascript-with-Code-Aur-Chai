// for converting data simply type like:
// conversionDatatype(value)
// BigInt(12)
// Number(text)
let num = '1212';
console.log(typeof num)

// now for converting string into Number
num = Number.parseInt(num)
console.log(typeof num)

// another way to convert 
let num1 = '1212';
num1 = Number(num1);
console.log(typeof num1)

// same method for converting number into string

let num2 = 1212;
console.log(typeof num2)

num2 = String(num2);
console.log(typeof num2)

// same method for converting number into BigInt

let num3 = 1212;
console.log(typeof num3)

num3 = BigInt(num3);
console.log(typeof num3)