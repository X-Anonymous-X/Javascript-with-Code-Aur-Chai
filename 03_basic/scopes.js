const obj = {
    name : 'hassan',
    msg : function(){
        console.log(this.name);
    }
}

obj.msg();

const myFunction = () => {
    console.log(this);
    function msg(){
        console.log('Hassan')
    }
}
msg()

// ======================= Hoisting ==========================
// now the normal function can call from any where in the program
// myFunction();
function myFunction () {
    console.log('string')
}
// myFunction();

// but the function declared inside the variable cannot call before the initialize 
// myFunction2();
const myFunction2 = function () {
    console.log('number')
}
// myFunction2();
