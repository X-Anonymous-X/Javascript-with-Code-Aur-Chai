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