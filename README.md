# Javascript

Javascript Tutorial with Code Aur chai

<!-- here are something to know which datatype is true or false -->

<!-- Question:
how to know which datatype is false and which is true -->

ChatGPT Answer:

In JavaScript, there are several data types, and each of them has a truthy and falsy value associated with it. Understanding which values are considered truthy and falsy is essential for conditional statements and logical operations.

Here's a general guideline for what's considered truthy and falsy in JavaScript:

Falsy Values:

false: The boolean value false itself is falsy.
0: The number 0 (zero) is falsy.
-0: Negative zero is also falsy.
'' (empty string): An empty string is falsy.
null: The special value null is falsy.
undefined: The special value undefined is falsy.
NaN: The special value NaN (Not-a-Number) is falsy.
Truthy Values:

true: The boolean value true is truthy.
Numbers: Any nonzero number (positive or negative) is truthy.
Non-empty Strings: Any non-empty string, even with spaces or other characters, is truthy.
Objects: Any object, including arrays and functions, is truthy.
Arrays: An array, even if empty, is truthy.
Functions: A function, even an empty one, is truthy.

Here are some examples:

if (false) {
console.log("This won't be printed."); // Falsy
}

if (0) {
console.log("This won't be printed."); // Falsy
}

if ('') {
console.log("This won't be printed."); // Falsy
}

if (null) {
console.log("This won't be printed."); // Falsy
}

if (undefined) {
console.log("This won't be printed."); // Falsy
}

if (NaN) {
console.log("This won't be printed."); // Falsy
}

if (true) {
console.log("This will be printed."); // Truthy
}

if (42) {
console.log("This will be printed."); // Truthy
}

if ('Hello') {
console.log("This will be printed."); // Truthy
}

if ({}) {
console.log("This will be printed."); // Truthy
}

if ([]) {
console.log("This will be printed."); // Truthy
}

if (function() {}) {
console.log("This will be printed."); // Truthy
}

<!-- =================================== -->
In conditional statements (e.g., if, while, for), JavaScript treats truthy values as true and falsy values as false. Understanding these truthy and falsy values is crucial for writing effective and reliable code in JavaScript.