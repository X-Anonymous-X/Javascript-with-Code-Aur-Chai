let random_number = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const userInput = document.querySelector('.guessField')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame =true

if(playGame){
      submit.addEventListener('click',function (e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        checkingValidation(guess)
      })  
}
function checkingValidation (guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    }
    else if (guess < 1 ){
        alert('Please Enter the Number greater than 1')
    }
    else if (guess > 100 ){
        alert('Please Enter the Number less than 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuess >= 11){
            displayGuess(guess)
            displayMessage(`GameOver. RandomNumber was ${random_number}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    if(guess === random_number){
        displayMessage('You guess it right')
        endGame()
    }
    else if (guess > random_number){
        displayMessage('Number is Low')
    }
    else if (guess < random_number){
        displayMessage('Number is High')
    }
}

function displayGuess(guess) { // cleanup function
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, ` 
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newgame'>Start Again</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
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