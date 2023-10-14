## Project 1 - Js Code (ColorPicker)

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

## Project 2 - Js Code (BMI Calculator)

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

## Project 3 - Js Code (Digital Clock)

```Javascript

const clock = document.querySelector('#clock')
//but to refresh every second we use setInterval()
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)

```
## Project 4 - Js Code (Guessing The Correct Number)

```Javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  p.style.cursor = 'pointer'
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () => {
          randomNumber = parseInt(Math.random() * 100 + 1);
          prevGuess = [];
          numGuess = 1;
          guessSlot.innerHTML = '';
          remaining.innerHTML = `${11 - numGuess} `;
          userInput.removeAttribute('disabled');
          startOver.removeChild(p);
          playGame = true;
      });
}
```

## Project 5 - Js Code (Random_colorChanger)

```Javascript

let random_clr = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

document.querySelector('#start').addEventListener('click', newColor)
let intervalId;

function newColor() {
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = random_clr()
        document.body.style.color = random_clr()
        console.log(random_clr())
    }, 1500)
}

document.querySelector('#stop').addEventListener('click', stop)
function stop() {
    clearInterval(intervalId)
    console.log('Stopped')
}
```