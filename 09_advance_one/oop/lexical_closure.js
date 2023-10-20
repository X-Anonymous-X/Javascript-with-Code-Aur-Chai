// lexical scope is the scope which have access to his parent properties
function outer (name){
    this.name = name
    console.log(`Outerfunction : ${this.name}`)
    function inner(){
        console.log(`Inner Function : ${this.name}`)
    }
    inner()
}
outer('Lexical Scope')

// closure is the process where the whole lexical scope /child scope get return into parent function ,this means it not only take its properties ,it return the whole scope to parent scope

function outer (name){
    this.name = name
    console.log(`Outerfunction : ${this.name}`)
    function inner(){
        console.log(`Inner Function : ${this.name}`)
    }
    return inner()
}
outer('Lexical Scope')