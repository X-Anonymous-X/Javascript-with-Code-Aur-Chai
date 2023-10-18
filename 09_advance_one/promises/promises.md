# Helping Code from friend (Hassan Ali)
## Promises in Javascript

```Javascript
const dessertStock = {
    cheeseCake: {
        inStockAmount: 10,
        price: 5
    },
    spongeCake: {
        inStockAmount: 0,
        price: 7
    }
};
const budget = 10;

function isAvailable() {
    return new Promise(function (resolve,
        reject) {
        if (dessertStock.spongeCake
            .inStockAmount > 0) {
            resolve(true);
        } else {
            reject(
                "The sponge cake is out of stock.. Canceling the order.."
            );
        }
    });
}

function checkPrice(
    productAvailable) {
    return new Promise(function (resolve,
        reject) {
        if (productAvailable &&
            dessertStock.spongeCake.price <=
            budget) {
            resolve(
                "Reasonable price. Purchasing.."
            );
        } else {
            reject(
                "Too expensive. Canceling the order.."
            );
        }
    });
}

function handleIsAvailable(
    isAvailable) {
    return checkPrice(isAvailable);
}

function handleCheckPrice(
    successValue) {
    console.log(successValue);
}

function handleFailure(failureValue) {
    console.log(failureValue);
}
const checkAvailability =
    isAvailable();
checkAvailability
    .then(handleIsAvailable)
    .then(handleCheckPrice)
    .catch(handleFailure);
```
# Project 
## HTML 
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="background-color: #212121; color: aliceblue;">
    <h1>Promises in Javascript</h1>
    <div id="container">
        <img width="255" src="/img/i-phone 15.png" alt="i-phone 15 pro max">
        <button id="btn">Check Now</button>
    </div>
    <div class="info">
        <p id="msg" class="m"></p>
        <p id="stock" class="m"></p>
    </div>

    <script src="promises.js"></script>
</body>

</html>
```
## CSS
```CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
}

#container {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    margin: 30px;
}

#btn {
    padding: 8px 20px;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    background-color: aliceblue;
}

.m {
    margin: 3px;
}
```

## Javascript
```Javascript
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
```