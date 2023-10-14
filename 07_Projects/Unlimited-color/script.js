let random_clr = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++) {       
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

document.querySelector('#start').addEventListener('click',newColor)
let intervalId;

function newColor (){
    intervalId = setInterval(function(){
        document.body.style.backgroundColor = random_clr()
        document.body.style.color = random_clr()
        console.log(random_clr())
    },1500)
}

document.querySelector('#stop').addEventListener('click',stop)
function stop(){
    clearInterval(intervalId)
    console.log('Stopped')
}