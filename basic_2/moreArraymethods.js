// flat() means barabar or all equal
const arr = [12,54,[72,1],5, [12,4,6,2, [3,[5],1]]]
var newArr1 = arr.flat(1)// how much depth or deep in array 1bracket depth
console.log(newArr1)
var newArr2 = arr.flat(2)// how much depth or deep in array 2 bracket depth
console.log(newArr2)
var newArr3 = arr.flat(Infinity) // all bracket depth
console.log(newArr3)

// isArray() checks the value is array or not
console.log(Array.isArray('Hassan')) // false
console.log(Array.isArray([12,412,45])) // true

// Array.from() use to convert string into array
console.log(Array.from('Hassan')); //  [ 'H', 'a', 's', 's', 'a', 'n' ]
console.log(Array.from(123131)); // empty brace bcz it is wrong
console.log(Array.from(null)); // empty brace bcz it is wrong
console.log(Array.from(true)); // empty brace bcz it is wrong
console.log(Array.from({name: "bawag", age:19})); // empty brace bcz it is wrong

// Array.of() use to convert datatype present in different container into array

console.log(Array.of(12,412,45)); // [ 12, 412, 45 ]
console.log(Array.of('Hassan')); // [ 'Hassan' ]
console.log(Array.of(null)); // [null]
console.log(Array.of(true)); // [true]
console.log(Array.of({name: "bawag", age:19})); // [ { name: 'bawag', age: 19 } ]