/*  Nullish Coalescing Operator (??) 
============================================================
 Syntax of nullish coalescing operator (??)
 varialbe_name = variabletocheck ?? default value */

/* ============================================================
Explaination
If variableToCheck is null or undefined, the defaultValue is returned.
If variableToCheck is any other falsy value (such as 0, false, or an empty string), variableToCheck is returned.*/

/*
here are some examples:
const x = null;
const y = undefined;
const z = 0;
const name = "John";

console.log(x ?? "Default");   // Output: "Default" (x is null)
console.log(y ?? "Default");   // Output: "Default" (y is undefined)
console.log(z ?? "Default");   // Output: 0 (z is 0, which is falsy but not null or undefined)
console.log(name ?? "Default");   // Output: "John" (name is a non-null, non-undefined string)
*/


const myName1 = null ?? 'Player1'
const myName2 = undefined ?? 'Player2'
const myName3 = 'Player3' ?? null
const myName4 = 'Player4' ?? undefined

console.log(myName1)
console.log(myName2)
console.log(myName3)
console.log(myName4)

/* Ternary Operator is shorthand property of if else statement
Synatax : condition ? true : false;

1. condition is a boolean expression
2. true and false are expressions
3. condition is always evaluated before true and false are evaluated
4. if condition is true, then true is returned
5. if condition is false, then false is returned
6. if condition is null or undefined, then null or undefined is returned

*/

const myAge = 20;
if (myAge >= 18){
    console.log("You are old enough to vote!")
}
else{
    console.log("You are not old enough to vote!")
}

// But with ternary operator we do this
const myAge1 = 20;
myAge1 >=18 ? console.log('you can vote') : console.log('you cannnot vote');

const condition = 'truthy';
condition == 'truthy' ? console.log(true) : console.log(false)