class Myclass(){
  constructor(name){
    this.name = name
  }
  run(){
    alert(this.name)
  }
}
let x = new Myclass("syam")
x.run();

 //class expression'
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class

//Getters/setters
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("syam");
alert(user.name); // syam

user = new User(""); // Name is too short.

//inheritance

class Animal{
  constructor(name,speed){
this.name = name
this.speed = speed   
  }
  run(speed){
    if(this.speed <60){
      return alert("running slow")
    }}
  faster(speed){
    if(this.speed > 100){
      alert("goSLOW")
    }
  }
}
let anmal = new Animal("syam",50)
anmal.run();//running slow
anmal.faster();

class Flash entends Animal{  ///inherit from animal class
  constructor(name){
    this.names = name
  }
  stop(){
    alert("stop")
  }
  let flash = new Flash("syam");
  flash.stop();
  flash.run();

  //static
  class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
  
//Protected 
  class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
  
  //private
  class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
  
  //mixins
  Mixin is a JavaScript object with useful methods, which can be easily merged with the prototype of any class
    / mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hell0
