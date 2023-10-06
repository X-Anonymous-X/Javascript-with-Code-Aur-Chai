const clock = document.querySelector('#clock')
//but to refresh every second we use setInterval()
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)