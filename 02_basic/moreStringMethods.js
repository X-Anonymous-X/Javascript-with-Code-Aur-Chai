// *=================All StringMethods in Javascript==============*
// used var bcz of studying purpose but always use let ,const
// var newVar = new String('Hassan');
// console.log(newVar);
// length count with 1
// console.log(newVar.length);

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice() // wiil remove the length given in slice =============*
// var newVar = new String('Hassan');
// console.log(newVar.slice(3));
// console.log(newVar.slice(2,4));
// console.log(newVar.slice(-4));
// console.log(newVar.slice(-4,-1));

// substring() similar to slice() =============*
// var newVar = new String('Hassan');
// console.log(newVar.substring(3));
// console.log(newVar.substring(2,4));
// console.log(newVar.slice(-4));
// console.log(newVar.slice(-4,-1));

// substr() similar to slice() difference is first is parameter,second value is length ====*
// var newVar = new String('Hassan');
// console.log(newVar.substr(3));
// console.log(newVar.substr(2,4));
// console.log(newVar.substr(-4));
// console.log(newVar.substr(-3,2));

// replace() used to replace the string value =============*
// var newVar = new String('Bawag');
// console.log(newVar.replace('B','L'));
// console.log(newVar.replace('g','G'));
// console.log(newVar.replace('Bawa','lava'))
// console.log(newVar.replace('a','e'));

// replaceAll() used to replace the string value =============*
// var newVar = new String('Hello World');
// console.log(newVar.replaceAll('l','h'))

// toUpperCase() used to make string in uppercase.=============*
// var newVar = new String('Hello World');
// console.log(newVar.toUpperCase());

// toLowerCase() used to make string in uppercase.=============*
// var newVar = new String('Hello World');
// console.log(newVar.toLowerCase());

// concat() is used to add new string with existing ones.=============*

// var newVar = new String('Hello');
// console.log(newVar.concat(' World'));

// trim(),trimStart(),trimEnd() used to trim the whitespaces in strings=============*

// var newVar = new String('       Hello World      ');
// const trim = newVar.trim();
// const trimStart = newVar.trimStart();
// const trimEnd = newVar.trimEnd();

// console.log('The length of trim is', trim , trim.length);
// console.log('The length of trimStart is', trim , trimStart.length);
// console.log('The length of trimEnd is', trim , trimEnd.length);

// charAt() used to find character with key value/index.=============*
// var newVar = new String('Hello World');
// console.log(newVar.charAt(4));
// console.log(newVar.charAt(6));

// charCodeAt() used to find character with key value/index.=============*
// var newVar = new String('Hello World');
// console.log(newVar.charCodeAt(4))// output will be 'o' unicode

// split() used to split the string with some symbol or given string.=============*
// whenever the given string appears it will split
// var newVar = new String('HelloWorld');
// console.log(newVar.split('o'));
// console.log(newVar.split('l'));

// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray);

// indexOf() used to find the index of the given string in the string.=============*
// var newVar = new String('Hello World');
// console.log(newVar.indexOf('o'));
// console.log(newVar.indexOf('l'));

// lastIndexOf() used to find the index of the given string in the string.=============*
// var newVar = new String('Hello World');
// console.log(newVar.lastIndexOf('o'));
// console.log(newVar.lastIndexOf('l'));

// startsWith() used to checks if the given string startwith the actual string (output will be true or false)
// var newVar = new String('Hello World');
// console.log(newVar.startsWith('Hello')); // true
// console.log(newVar.startsWith('hello')); // false bcz it is case-sensitive

// console.log(newVar.startsWith('World')) // false
// console.log(newVar.startsWith('world')) // false

// endsWith() used to checks if the given string endswith the actual string (output will be true or false)
// var newVar = new String('Hello World');
// console.log(newVar.endsWith('Hello')); // false
// console.log(newVar.endsWith('hello')); // false 

// console.log(newVar.endsWith('World')) // true
// console.log(newVar.endsWith('world')) // false bcz it is case-sensitive

// includes() is used to check the value is available in string or not
// var newVar = 'Hello World';
// console.log(newVar.includes('Hello'));
// console.log(newVar.includes('hello'));
// console.log(newVar.includes('P'));

// fromCharCode() is used to give the ASCII code of character
// console.log(String.fromCharCode(65))

// search() is used to search the specific value position in string if the value is present in string it will give '-1' in the output
// var newVar = 'Hello world is Basic output';
// console.log(newVar.search('is'))
// console.log(newVar.search('my'))

// match() is used to search a group of value in string and create an array of that value 
// we use this to find in global string / whole string "/value/g"
// var newVar = 'Hello World is basic output and is easy for beginners tutorial'
// console.log(newVar.match(/is/g))

// repeat() is used to create a string which repeats itself for a given number
// var newVar = 'Hello world';
// console.log(newVar.repeat(3));