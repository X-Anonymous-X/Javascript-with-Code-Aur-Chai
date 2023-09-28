// iterations are also known as Loops
// for loop
// creating simple table of 2
console.log("The Table of two is");
for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = ${2*i}`)
}

// we can also use forloop inside thesame loop

console.log("The Table");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ['hassan','fahad','mohsin','ahsan']
console.log(myArray.length);
console.log('0 Index of Array is ',myArray[0]);
console.log('1 Index of Array is ',myArray[1]);
console.log('2 Index of Array is ',myArray[2]);
console.log('3 Index of Array is ',myArray[3]);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])   
}

// creating multiple tables
for (let i = 1; i <= 10; i++) {
    console.log(`Next Table is ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

// continue or break statement
// break

for (let i = 1; i < 10; i++) {
    // console.log(i)
    if (i == 5) {
        console.log(`5 is the best number`)
        break; // as soon as it hits at 5 it will break the loop
    }  
    console.log(i)
}
// continue
for (let i = 1; i < 10; i++) {
    // console.log(i)
    if (i == 5) {
        console.log(`5 is the best number`)
        continue; // as soon as it hits at 5 it will ignore that value and continue the loop
    }  
    console.log(i)
}
// getting array with for loop
const array = ['player1','player2','player3','player4']
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}