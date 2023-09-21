// *===============(Primitive Datatypes) stored in stack===================*

// Stack value cannot override change it duplicates it 
//forexample;
let user = 'hassan';
let user2 = user; // as we tell him that user2 is equalto user 
user2 = 'bawag'
console.log(user);
console.log(user2);
//both the result be different bcz primitive datatype (stack) create a duplicate of the original value

// *==============(Non-Primitive Datatypes) stored in heap=================*

// Heap value will override or change the original value 
// forexample;

let myObj = { //creating object and storing values in it
    name: 'hassan',
    age: 25
}
let newObj = myObj // assigning newObj equals to myObj
newObj.name = 'bawag' // changing the newObj value it will also in original myObj value
console.log(myObj.name);
console.log(newObj.name);
//both the result be same bcz non-primitive datatype (heap) changes the original value