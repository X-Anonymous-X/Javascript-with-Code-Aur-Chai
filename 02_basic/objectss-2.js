// object using constructor (singleton)
/*

const obj = new Object()
console.log('This is example of singleton object :', obj);
// both do different but it is advance so we will learn this concept later
const obj2 = {}
console.log('This is example of literals object :',obj2)

*/
// we can also do this
const obj = {}
obj.name = 'hassan',
obj.age = 50,
obj.id = 'bawag123'

// console.log(obj)

// we can also access nesting object
const newObj = {
    email : 'example@hotmail.com',
    password : '<PASSWORD>',
    fullname : {
        firstName : 'hassan',
        lastName : 'bawag',
        newName : {
            firstName : 'mr',
            lastName : 'Nobody'
        }
    }
}
console.log(newObj)

console.log(newObj.hasOwnProperty('fullname')) // true
console.log(newObj.hasOwnProperty('full')) // false

console.log(newObj.fullname.newName.lastName)

/* for changing value of last nested object
 help from CHAT-GPT

// Access the value of the lastName property within newName
const changeLastName = newObj.fullname.newName.lastName;

// Modify the value of the lastName property within newName
newObj.fullname.newName.lastName = 'Pindi-Boy';

console.log(newObj);
*/

// ================================= Merging Objects ======================================

const obj1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}

const obj2 = {
    4 : 'd',
    5 : 'e',
    6 : 'f'
}

var obj3 = [obj1,obj2];
console.log('Output of using like [obj1,obj2] is : \n \n',obj3)

console.log('2nd method \n ')

var obj3 = Object.assign({}, obj1,obj2); // this method is also valid and right but 90% we use 3rd method
console.log('Output of using like "Object.assign({}, obj1,obj2)" is : ',obj3)

console.log('3rd method \n ')
var obj3 = {...obj1, ...obj2}; // this method is easy for merging also known as spread
console.log('Output of using like {...obj1, ...obj2} is \n \n:',obj3)

/* =============================== Note: NameSpace Sepration is basic but tricky topic ==================================================

In JavaScript, namespace separation is a very important concept. Namespaces are a way of organizing your code into logical groups.
Let's say you have two JavaScript libraries that you want to use in your program, and both libraries have a function called getData().

// CODE;
// Library 1
function getData() {
  return "Data from Library 1";
}

// Library 2
function getData() {
  return "Data from Library 2";
}

Now, if you want to use both libraries in your program, you might run into a problem because they both have a function with the same name. Here's where namespace separation comes in:

// Using Library 1's getData() function
const dataFromLibrary1 = getData();

// Using Library 2's getData() function
const dataFromLibrary2 = getData();

// Solution:

In this example, you might expect that dataFromLibrary1 holds "Data from Library 1" and dataFromLibrary2 holds "Data from Library 2." However, without proper namespace separation, you'll likely encounter conflicts, and the second function definition will overwrite the first one, causing unexpected behavior.

To solve this problem, you can use namespace separation by creating separate objects or namespaces for each library:

// Library 1
const Library1 = {
  getData() {
    return "Data from Library 1";
  }
};

// Library 2
const Library2 = {
  getData() {
    return "Data from Library 2";
  }
};

Now, with namespace separation, you can access the functions like this:

// Using Library 1's getData() function
const dataFromLibrary1 = Library1.getData();

// Using Library 2's getData() function
const dataFromLibrary2 = Library2.getData();

By creating separate objects (Library1 and Library2) for each library, you ensure that their functions are in separate namespaces, preventing conflicts and allowing you to use both libraries in your program without issues.
*/

// ======================================== Array of objects ============================================

const arr = [
    {
        name : 'hassan',
        age : 50,
        id : 'bawag123'
    },
    {
        name :'mohammad',
        age : 50,
        id : 'bawag123'
    }
]

console.log(arr)
console.log(arr[0])
console.log(arr[1].id)  

const obj =  {
    name : 'hassan',
    age : 50,
    id : 'bawag123'
}
console.log('These are keys of obj :',Object.keys(obj))
console.log('These are values of obj :',Object.values(obj))
console.log('These are entries of obj :',Object.entries(obj))