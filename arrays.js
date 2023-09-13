//basically an array is an object which hold multiple values in a single variable it  may be of different datatype
var arr = [1,2,3,51,26,5,true,'hassan']
console.log(arr)
console.log(typeof arr)

// array methods in javascipt
// arr.push() // used to add new value in array
// arr.pop() // used to remove last value of an array
// arr.unshift() // used to add new value in array at the start with having parameters in it  { shift mean start}
// arr.shift() //used to remove the value from the start of an array without parameters
// arr.join() // used to convert array into string
// arr.slice() // used to remove the given parameter value from array without limit-range value
// arr.splice()  // used to remove the given parameter value from array with limit-range value
// arr.includes() // used to check if the given value in parameters is present or not
// arr.indexOf() //used to find the index of the value in the array
// arr.lastIndexOf() //used to find the last index of the value in the array    

// arr.sort() //used to sort the array
// arr.reverse() //used to reverse the order of the array
// arr.concat() // used to combine two arrays.

// later in another file
// arr.forEach() //used to iterate over the array
// arr.map() //used to iterate over the array and return a new array
// arr.filter() //used to iterate over the array and return a new array

// ====================== Basic methods of array ============================================

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.push(12); // return the length of array
console.log('This is push method in array : ', newArray) // use to push or add new value in array

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.pop();  
console.log('This is pop method in array : ', newArray) // used to remove the last value in array

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.unshift(12); // return the length of array
console.log('This is unshift method in array : ', newArray) // used to add the new value in array at the start

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.shift();
console.log('This is shift method in array : ', newArray) // used to remove the first value in array

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.length;
console.log('This is length method in array : ', newArray) // give the length of number of value in array

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.join();
console.log('This is join method in array : ', newArray) // convert array into string

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.slice(0 , 5);
console.log('This is slice method in array : ', newArray) // cut the given parameters value from array

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.splice(1,4);
console.log('This is splice method in array : ', newArray) // cut the given parameters range value from array

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.includes(3); //true
var newArray1 = arr.includes(6); //false
console.log('This is 1st includes method in array : ', newArray) // used to check if the parameter value is present or not
console.log('This is 2nd includes method in array : ', newArray1) 

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.indexOf(true); // 6
var newArray1 = arr.indexOf('hassan'); // 7
console.log('This is 1st indexOf method in array : ', newArray)
console.log('This is 2nd indexOf method in array : ', newArray1) // find the parameter value from the start of array

var arr = [1 , 2 , 3 , 51 , 'hassan' , 26 , 5 , true , 'hassan']
var newArray = arr.lastIndexOf('hassan');
console.log('This is lastIndexOf method in array : ', newArray) // find the parameter value from the last of array

var arr = [1,2,3,4,51,26,5,true,'hassan','ubl']
var newArray = arr.sort();
console.log('This is sort method in array : ', newArray) // it sorts/arrange the value of array in alphabatical order

var arr = [1,2,3,51,26,5,true,'hassan']
var newArray = arr.reverse();
console.log('This is reverse method in array : ', newArray) // reverse the array values.

// Both 1st and 2nd are same
// 1st method is concat()
var arr = [1,2,3,51,26,5,true,'hassan']
var arr1 = [12,5656,5656,5656,'Bawag']
var newArray = arr.concat(arr1);
console.log(newArray) // this method is used to combine two arrays only
// 2nd method is spread operator
var arr = [1,2,3,51,26,5,true,'hassan']
var arr1 = [12,5656,5656,5656,'Bawag']
var newArray = [...arr,...arr1]
console.log(newArray) // this method is used to combine two or more than two arrays by given syntax [...array1,...array2]

