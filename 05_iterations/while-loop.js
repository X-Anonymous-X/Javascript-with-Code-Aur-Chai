// while loop

let i = 1 // first initialization 
while (i <= 10) { // then checking condition if true then the statement will execute
    console.log(`The value is i is ${i}`)
    i++; // incrementing to avoid infinite loop
}

// =============================================================================

let myArray = ['Player1','Player2','Player3','Player4'];
let iterate = 0;

while(iterate < myArray.length){
    console.log(`The index value of array is ${myArray[iterate]}`)
    iterate++;
    // iterate = iterate + 1;
    // iterate += 1
}

// do while loop
// rarely used in industries but for syntax
let score = 1
do{
    console.log(`Value is ${score}`)
    score++;
}while(score <= 10)
