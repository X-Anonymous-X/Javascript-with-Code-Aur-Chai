// var myDate = new Date(7parameters) year,month,day,hours,minutes,seconds,millisecond
var myDate = new Date(2023,8,13,6,27,53,8)//Note: Month Starts from January as 0
console.log(myDate)
console.log(myDate.toString())

// we can also create Date as string ============================================*

const newDate = new Date('Sep 13, 2023 6:30:12:22')
// console.log(newDate)
// console.log(newDate.toString())

// and time always stored in milliseconds in memory 
// console.log(newDate.getTime()) // 1694568612022
// console.log(newDate.getDay()) // 3 
// console.log(newDate.getFullYear()) // 2023
// console.log(newDate.getMonth()) // 08
// console.log(newDate.getHours()) // 6
// console.log(newDate.getMinutes()) // 30
// console.log(newDate.getSeconds()) // 12

// We can also set/change date later 
const date = new Date("Sep 13, 2023 6:30:12:22")
date.setFullYear('2024');
date.setDate('14');
console.log(date)
console.log(date.toString())

// ================ Method of Date ================================================
var myDate = new Date();
// console.log(myDate);                       // Object of Date
// console.log(myDate.toString());           // String of Date
// console.log(myDate.toLocaleString());    // shows the date as local region   
// console.log(myDate.toDateString());
// console.log(myDate.toISOString()); 
console.log(myDate.toJSON());
console.log(myDate.getTimezoneOffset());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

// toLocaleString() =============================================================
// Note: That month starts with 0 as january and so on...
var myDate = new Date(2019,11,23);
console.log(myDate)
console.log(myDate.toLocaleString("en-IN")); // for indian time region
console.log(myDate.toLocaleString("en-US")); // for us time region
console.log(myDate.toLocaleString("en-PK")); // for Pakistani time region

// we can also give curreny style for integer (toLocaleString())
let newNum = 12131231223
let x = newNum.toLocaleString('en-US, {style : "currency" ,  currency : "en-US"}')
console.log(x)

// toDateString() =============================================================
var myDate = new Date(2019,11,23);
console.log(myDate.toDateString()); // tells date in form of string

// toDateString() =============================================================
var myDate = new Date(2019,11,23);
console.log(myDate.toISOString()); // where T represent the time and Z represent the UTC (Universal Time Coordinated)
