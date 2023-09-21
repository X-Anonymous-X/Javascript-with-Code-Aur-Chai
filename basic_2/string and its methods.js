// *=================Strings===============*
const name = 'Hassan';
const num = 50;
// both are same 
console.log('My name is ' + name + ' and i am ' + num + ' years old');
// but we use strings with this way bcz we can also use methods inside it.
console.log(`I am ${name.toUpperCase()} and age of ${num}`)
console.log(`I am ${name.toLowerCase()} and age of ${num}`)


// *=================String Constructor===============*
// We can also use this to create a new string
const myName = new String('Hassan Saghir');
console.log(myName)

// creating object
const obj = new Object(
    {
        name: 'Hassan',
        age: 50
    }
)
console.log(obj);
console.table(obj);

//creating arrays
// An array is a collection of multiple values
const arrays = new Array(
    [112, 2, 3], 12, 1212  // the length of this statement is 3
[112, 2, 3], [12, 1212] // the length of this statement is 2
)
console.log(arrays.length)

// *=================Strings Methods===============*
const str = 'hassan';
console.log(str)
// methods of string

// .length
console.log(str.length); // shows the character length of value.
console.log('The index value of this str[0] is :', str[0])
console.log('The index value of this str[1] is :', str[1])
console.log('The index value of this str[2] is :', str[2])
console.log('The index value of this str[3] is :', str[3])
console.log('The index value of this str[4] is :', str[4])
console.log('The index value of this str[5] is :', str[5])

// // *==========toUpperCase(),toLowerCase()=============*

// const gameName = new String('Programming');
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// // *=====================charAt()=====================*

// console.log(gameName.charAt(5));// h=1,a=2,s=3,s=4,a=5,n=6
// console.log('The index-value of "n" in "Programming" is :',gameName.indexOf('n'));

// // *=====================substring()=====================*

// console.log(gameName.substring(0,5)) // Progr
// console.log(gameName.substring(5)) // amming
// console.log(gameName.substring(1)) // rogramming
// console.log(gameName.substring(0)) // Programming

// *=====================slice()=====================*

// console.log(gameName.slice(0,5));
// console.log(gameName.slice(-9,5));
// console.log(gameName.slice(0));
// console.log(gameName.slice(3));
// console.log('The value is',gameName.slice(-7,5));

// Now difference between slice() and subString() is we can use negative value in slice() but not in subString()...

// // *=====================indexOf()=====================*

// console.log(gameName.indexOf('a'));
// console.log(gameName.indexOf('r'));
// console.log(gameName.indexOf('g'));
// console.log(gameName.indexOf('m'));
// console.log(gameName.indexOf('i'));

// *=====================trim()=====================*

// const newVar = '   Programmer    ';
// console.log(newVar)
// console.log(newVar.trim()); // this function removes the extra space
// forexample;
// it could be use in inputfield where sometime user enter spaces in input like login-form


// *=====================replace()=====================*

// it replace the existing key with new key as shown below
// const newString = 'Hassan'
// console.log(newString.replace('a','b'));
// console.log(newString.replaceAll('a','b'));
// console.log(newString.replace('Hassan','Hassan Saghir'))

// const url1 = 'https://google.com/';
// console.log(url1.replace('google','facebook'));

// *=====================include()=====================*

//this method checks if the key is defined or available in strings
// const url = 'https://google.com/';
// console.log(url.includes('google'));
// console.log(url.includes('facebook'));

// *=====================split()=====================*
//use to split string with defined symbol or value
// const split = new String('Hassan/Saghir');
// console.log(split.split('/'));
// const split1 = new String('Hassan-Saghir');
// console.log(split1.split('-'));

// // *=====================concat()=====================*
// // use to add string into another string

// const concat = new String('Hassan');
// console.log(concat)
// console.log(concat.concat('Saghir'));

// // *=====================repeat()=====================*

// const repeat = new String(`Hassan`);
// console.log(repeat)
// console.log(repeat.repeat(3));

// // *=====================match()=====================*

// const match = `Hassan`;
// console.log(match)
// console.log(match.match('Hassan'));

// // *=====================matchAll()=====================*

// const matchAll = new String(`Hassan`);
// console.log(matchAll)
// console.log(matchAll.matchAll('Hassan'));

// // *=====================search()=====================*

// const search = new String(`Hassan`);
// console.log(search)
// console.log(search.search('zbd'));
