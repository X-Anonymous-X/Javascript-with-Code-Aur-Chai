// ------------------ Promises in Javascript -------------------
// Promises are used to handle asynchronous operations.

// A promise is an object that represents the eventual completion or failure of an asynchronous operation.

// A promise has three states:

// Pending: The promise is not yet completed.

// Fulfilled: The promise has been completed successfully. 

// Rejected: The promise has been completed with an error.

// we use '.then' to handle the (resolved value) and '.catch' to handle the (rejected value)

new Promise(function (resolve, reject) {
    console.log('Processing...')
    setTimeout(function () {
        let error = false;
        if (!error) {
            return resolve('I am fullfilled')
        } else {
            return reject('I am failed')
        }
    }, 3000)
})
    .then(function (pass) {
        console.log(pass);
    })
    .catch(function (fail) {
        console.log(fail);
    }).finally(() => console.log('Process Complete'))

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

// Promises with async await

const prom = new Promise((resolve, reject) => {
    let error = true;
    if (!error) {
        resolve('Promise Resolved')
    }
    else {
        reject('Promise Rejected')
    }
})
async function promResponse() {
    try {
        const response = await prom // waiting to consume prom response
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
promResponse()