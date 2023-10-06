## Project 1 - Js Code

```Javascript
const body = document.querySelector('body');
const box = document.querySelectorAll('.box');

box.forEach((color) => {
    color.addEventListener('click', (clr) => {
        
        if (clr.target.id === 'grey') {
            body.style.backgroundColor = clr.target.id
            console.log(clr.target.id)
        }
        else if (clr.target.id === 'yellow') {
            body.style.backgroundColor = clr.target.id
            console.log(clr.target.id)
        }

        else if (clr.target.id === 'blue') {
            body.style.backgroundColor = clr.target.id
            console.log(clr.target.id)
        }

        else if (clr.target.id === 'red') {
            body.style.backgroundColor = clr.target.id
            console.log(clr.target.id)
        }
    })
})

```

## Project 2 - Js Code

```Javascript

const form = document.querySelector('form')

form.addEventListener('submit', function (s){
    s.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (weight < 18.6) {
            results.innerHTML = `<span>Your BMI is: ${bmi}</span></br><span>You are Under Weight</span>`
        }
        else if (weight >= 18.6 || weight <= 24.9) {
            results.innerHTML = `<span>Your BMI is: ${bmi}</span></br><span>You are Normal Range</span>`
        }
        else if (weight > 24.9) {
            results.innerHTML = `<span>Your BMI is: ${bmi}</span></br><span>You are Overweight</span>`
        }
    }
});

```

## Project 3 - Js Code

```Javascript

const clock = document.querySelector('#clock')
//but to refresh every second we use setInterval()
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)

```