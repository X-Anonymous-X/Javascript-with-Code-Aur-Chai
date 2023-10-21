// in javscript 'new' keyword is used to create a new instance or copy of that object
// we use it bcz sometime some variable have same properties and write each of them again and again so we do this
// forExample;
const user1 = {
    name: 'hassan',
    age: 19,
    email: 'user1@hotmail.com'
}
const user2 = {
    name: 'malik',
    age: 24,
    email: 'user2@hotmail.com'
}
const user3 = {
    name: 'raju',
    age: 10,
    email: 'user3@hotmail.com'
}

// instead of doing above method we do this
function newObj(name,age,email){
    this.name = name;
    this.age = age;
    this.email =email;
}
const userOne = new newObj('hassan',19,'user1@example.com')
const userTwo = new newObj('malik',24,'user2@example.com')
const userThree = new newObj('bawag',15,'user3@example.com')
userThree.lastName = 'developer'

console.log(userOne)
console.log(userTwo)
console.log(userThree)