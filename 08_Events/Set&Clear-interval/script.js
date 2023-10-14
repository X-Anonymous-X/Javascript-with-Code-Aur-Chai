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