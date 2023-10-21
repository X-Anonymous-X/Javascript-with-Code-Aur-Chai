class Parent {
    constructor(username) {
        this.username = username
    }
    method() {
        console.log(`Username is ${this.username}`)
    }
}
class Child extends Parent {
    constructor(username, age) {
        super(username) // it automatically add this. with username
        this.age = age
    }
    childAge() {
        console.log(`Child Age is ${this.age}`)
    }
}
const parent = new Parent('Saghir',19)
parent.method() // Username is Saghir
// parent.childAge() // this will not take something from child

const child = new Child('Hassan',19)
child.method() // Username is Hassan
child.childAge() // Child Age is 19


// instanceof mean kya yeh child is instance sy bana ha Child 
console.log(child instanceof Child)
console.log(child instanceof Parent)

console.log(parent instanceof Parent)
console.log(parent instanceof Child)