document.querySelector() // return first child of element and can be access using css selector
document.querySelectorAll() // return all childs of element and can be access using css selector
document.getElementById() // return a specific element
document.getElementsByClassName() // return a HTML collection

const store = document.getElementsByClassName('text')
console.log(store) // return a HTML collection of element

// this selector is used to select first child of an element with css selector
const c = document.querySelector('.text')
console.log(c) // returns a specific element

// this selector is used to select all childs of an element with css selector

const y = document.querySelectorAll('.text')
console.log(y) // returns a nodelist
// we can also access specifice element with its index like
y[1].style.color = 'red'

y.forEach(function (a) {
    a.style.color ='white';
    a.style.backgroundColor = '#212121'
})


// for changing HTML collections and nodelist into array , we do this;
Array.from(variable_name)
Array.from(y)

// we can also manipulate the dom text or element like
const j = document.querySelector('.text')
j.innerHTML = 'Bawag change ho gaya'
j.innerHTML = 'Bawag change ho gaya'



// difference b/w textContent and innerHTML and innerText
j[0].innerHTML
'Lorem ipsum dolor sit amet. <span style="display: none;">DUMMY TEXT</span>'
j[0].textContent
'Lorem ipsum dolor sit amet. DUMMY TEXT'
j[0].innerText 
'Lorem ipsum dolor sit amet.'


// we can also set or get attribute with elements
document.querySelector('.test').setAttribute('class', 'newClass anotherClass')
const get = document.querySelector('.test').getAttribute('class')
console.log(get);