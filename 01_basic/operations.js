// *=================Operations=================*
// Order of precedence
// BODMAS
console.log(( 12 + 12 ) * 12); //Brackets
console.log(12 ** 3);//order or power
console.log(12 / 12);//division
console.log(12 * 12);//multiplication
console.log(12 + 12);//addition
console.log(12 - 12);//subtraction
console.log(12 % 12); //modulas

// *=================Increment/Decrement Operations=================*
// increment operation
let number1 = 10;
let newNumber1 = number1++ // this is an increment
let new1 = newNumber1++;
console.log('The value of secIncrement of number1 is :',new1)
// decrement operation
let number2 = 10;
let newNumber2 = number2-- // this is an decrement
console.log('The value of Decrement of number2 is :',newNumber2)

// *=================Postfix/Prefix-Increment/Decrement Operations=================*
let num1 = 10;
let prefix1 = ++num1;// 1 + 10
console.log('The value of prefix Increment is :',prefix1);
let prefix2 = --num1;// 1 - 11 bcz the value of num1 is 11
console.log('The value of prefix Decrement is :',prefix2);

let num2 = 10;
let postfix1 = num2++;// first it prints 10 then it add 1
console.log('The value of postfix Increment is :',postfix1)
console.log('for checking postfix num2 value :',num2)

let postfix2 = num2--;// 1 - 10
console.log('The value of postfix Decrement is :',postfix2)
console.log('for checking postfixDecrement num2 value :',num2)
