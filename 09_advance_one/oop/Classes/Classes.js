/* */
// Constructor function for creating cars
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Adding a 'start' method to the Car prototype
  Car.prototype.start = function() {
    console.log(`The ${this.make} ${this.model} is starting.`);
  }
  
  // Creating car objects using the constructor function
  const myCar = new Car("Toyota", "Camry");
  console.log(myCar)
  const anotherCar = new Car("Honda", "Civic");
  
  // Using the 'start' method
  myCar.start(); // Outputs: "The Toyota Camry is starting."
  anotherCar.start(); // Outputs: "The Honda Civic is starting."
  
// another way to use it with classes

class Car1 { // creating object
    constructor(name, model) { // passing parameters
        this.name = name;
        this.model = model;
    }
    // methods
    start() {
        console.log(`My ${this.name} ${this.model} is starting...`)
    }
    stop() {
        console.log(`My ${this.name} ${this.model} just stopped.`)
    }
}

const myCar1 = new Car1('Honda','City')
console.log(myCar1)
myCar1.start()
myCar1.stop()