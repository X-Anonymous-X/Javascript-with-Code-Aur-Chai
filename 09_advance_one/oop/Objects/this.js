// this is used to get/access values from current context 
// In short , this mean jis ,that means jis ny bulaya ha us current context mein.

// whereas; in method 'this' keyword refers to object but in function 'this' keyword refers to global object for nodeEnvironment or window object for browser/console

// now, what is difference b/w method and function
// METHOD()
const method = {
    username: 'hassan',
    hassan() { // this is method
        console.log(this)
        function my(){ // this is function
            console.log(this)
        }
        my()
    }
}
method.hassan()
// and in method we can access the 'object' with this keyword...
// but in function we cannot access 'object' 
// forexample;

const object = {
    name: 'Hassan',
    array: [1],
    hassan() {
        console.log(this);
        // console.log(`this keyword outside function :${this}`) 
        //this is in method now so it can access to get object properties
        this.array.forEach(function (arrayValues) {
            console.log(arrayValues)
            console.log(this);
            // console.log(`this keyword inside function :${this}`) 
            //this is in function so it don't have access to get object properties
        });
        // },this); //for accessing this keyword in function we pass another this after function
    }
}
object.hassan()
// but this can only be happen if it's in function but not in arrowfunction

const object1 = {
    name: 'Hassan',
    array: [1],
    hassan() {
        console.log(this);
        (function (){
            console.log(this);
        })()
    }
}
object1.hassan()