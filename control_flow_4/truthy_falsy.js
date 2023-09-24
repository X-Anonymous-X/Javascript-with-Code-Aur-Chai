// truthy values are 
// non-zero ,[],{},'string',1,2,true ,'0' ,'false' , BigInt(2n) , empty function like
// function(){} are also truthy values

// falsy values are 
// zero ,BigInt(0n) , '' (empty string), -0 , null , undefined , false, Nan(not a number)


if (' ') {
    console.log('space');
}
if (2n) {
    console.log('space');
}
if (0n) {
    console.log('zero');  // will not execute bcz these are falsy values
}

if (null) {
    console.log('null'); // will not execute bcz these are falsy values
}

if (undefined) {
    console.log('undefined'); // will not execute bcz these are falsy values
}

// for checking array and object is empty or not

if (Array.isArray([])) {
    console.log('empty array');
}

if (Array.isArray({})) {
    console.log('empty object');
}