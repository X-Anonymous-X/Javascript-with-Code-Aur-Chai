/* +++++++++++++++++++ setTimeout() ++++++++++++++++++++
function start(){
    console.log("Hello World!");
}
setTimeout(start,3000) // it will popup single time a message after given time like 3s
=================================================
const start = function (){
    console.log("Hello World!");
}
setTimeout(start,3000) 
=================================================
const text = function () {
    document.querySelector('h1').innerText = 'Bawag setTimeout() method'
}
setTimeout(text, 3000)
=================================================
+++++++++++++++++++ clearTimeout() ++++++++++++++++++++
const text1 = function () {
    document.querySelector('h1').innerText = 'Bawag setTimeout() method'
}
let time1 = setTimeout(text1, 3000)
clearTimeout(time1)
===================================================
*/

document.querySelector('#start').addEventListener("click",print)
let bawa;
function print(){
    bawa = setTimeout(function(){
        document.querySelector('p').innerHTML = 'bawag great ho'  
    },2000)
    console.log("started")
}

document.querySelector('#stop').addEventListener('click',stop)
function stop(){
    clearTimeout(bawa)
    document.querySelector('p').innerHTML = null  
    console.log("stoped")
}