// map method in js
// map method is used for all value of index
// we can use multiple method like filter,map,reduce as shown
const array = [1,2,3,4,5,6,7,8,9,10];

const newArray = array.map((value) => (value * 10))
console.log(`This is the output of single map method ${[newArray]}`)

const newArray1 = array.map((value) => (value * 10)).map((value) => (value + 1))
console.log(`This is the output of two map method ${[newArray1]}`)

const newArray2 = array.map((value) => (value * 10)).map((value) => (value + 2)).filter((key) => (key % 2 == 0))
console.log(`This is the output of two map and one filter method ${[newArray2]}`)

/*
map() transforms elements and returns a new array.
filter() selects elements based on a condition and returns a new array.
forEach() iterates/loop over elements and performs actions on them without creating a new array.
*/
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2); //map transform the element and return new array
// result is [4, 8] 