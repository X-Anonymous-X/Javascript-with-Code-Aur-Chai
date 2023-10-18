// ------------------ Promises in Javascript -------------------
// Promises are used to handle asynchronous operations.

// A promise is an object that represents the eventual completion or failure of an asynchronous operation.

// A promise has three states:

// Pending: The promise is not yet completed.

// Fulfilled: The promise has been completed successfully.

// Rejected: The promise has been completed with an error.

new Promise(function (resolve, reject) {
    console.log('Pending')
    setTimeout(function () {
        let error = true;
        if (!error) {
            return resolve('I am fullfilled')
        } else {
            return reject('I am failed')
        }
    }, 1000)
})
    .then(function (pass) {
        console.log(pass);
    })
    .catch(function (fail) {
        console.log(fail);
    })

// Project

const p = document.querySelectorAll('p')
const msg = document.querySelector('#msg');
const stock = document.querySelector('#stock')

function store() {
    const store = {
        mobile: {
            apple: 'I-Phone 15 pro max',
            price: 'Both Kidneys',
            inStock: 15
        },
        laptop: {
            asus: 'Ryzen 5500',
            price: 'Single Kidney',
            inStock: 0
        }
    }

    new Promise(function (resolve, reject) {
        msg.innerHTML = 'Processing...'
        setTimeout(() => {
            if (store.mobile.inStock > 0) {
                resolve('I-Phone 15 pro max is Available')
            }
            else {
                reject('Not Available')
            }
        }, 2000)
    })
        .then(function (avail) {
            stock.innerHTML = avail
        })
        .catch(function (err) {
            stock.innerHTML = err
        })
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', store)
btn.addEventListener('mouseover', function () {
    p[0].innerHTML = null
    p[1].innerHTML = null
})