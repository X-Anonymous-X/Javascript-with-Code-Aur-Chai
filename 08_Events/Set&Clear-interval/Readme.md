# Difference b/w setTimeout & setInterval method.

## SetTimeout is used to perform action after the given time but only 1 iteration
### Forexample:
# HTML code:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async/Sync Method</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html , body{
        height: 100%;
        width: 100%;
        background-color: #212121;
        text-decoration: underline;
        color: aliceblue;
    }
    button{
        margin: 20px 30px;
        padding: 10px 20px;
        background-color: crimson;
        color: aliceblue;
        font-weight: bold;
        border-radius: 8px;
    }
</style>
<body>
    <h1>Async/Sync Method</h1>
    <p></p>
    <button id="start">Start</button>
    <button id="stop">Stop</button>


    <script src="script.js"></script>
</body>
</html>
```

# Script code
```Javascript
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
```
## whereas SetInterval is used to perform action after given the time repeatedly

### Forexample:
```Javascript
document.querySelector('#start').addEventListener('click',start)
let bawa;
function start(){
    bawa = setInterval(function(){
        let i = 0
        // created infinite loop for understanding concept
        while(i<1){
            let random_number = Math.floor(Math.random() * 10)
            console.log(random_number)
            i++
        }
    },1000)
}

document.querySelector('#stop').addEventListener('click',stop)
function stop(){
    clearInterval(bawa)
    console.log('Stopped')
}
```
