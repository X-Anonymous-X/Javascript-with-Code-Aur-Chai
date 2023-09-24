// Control Flow Statement are 
// if 
// if else
// if else-if
// switch

// where we use conditional operator like;
// <,>,<=,>=,==,===,!=,!==
// =========================== if statement ============================
// if the condition in parenthesis is true then it will execute,if false it will not execute
var num = 10;
if (num >= 10) {
    console.log("num is greater than 10");
}

if (true){
    console.log("true");
}

if (false){ 
    console.log("false");
}
// if we had two condition then we will do this
var num = 21;

if (num >= 10 && num <= 20) {
    console.log("num is between 10 and 20");
}
else
{
    console.log("num is not between 10 and 20");
}
// =========================== if else if statement ============================

const username = 'hassan'
if(false){
    console.log('true');
}
else if (2 == "2"){
    console.log('Datatype matched');
}
else {
    console.log('false');
}

// we can use logical operator in condition like && , || ,!
// '&&' this operator checks the both condition to be true
// '||' this operator checks the one of the condition to be true
// '!' this operator checks condition not to be false
let username1 = 'hassan';
if (2 == '2' && username1){
    console.log('both condition true');
}
let hassan = false;
let Hassan = true;
if (hassan || Hassan){
    console.log('second condition true');
}
