//Recursion
When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself.
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8

//example
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);

//Lexical Environment
let x = "hello"
function hi(name){
  alert(`{x} {name}`)

 hi(syam);//hello syam
  
  /GlobalObject
  The global object provides variables and functions that are available anywhere
  alert("Hello");
// is the same as
window.alert("Hello");
  //Named Function Expression
  let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};
sayHi("John"); // Hello, syam
  
  //example
 let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error,
  
  //functional Call
  With call(), an object can use a method belonging to another object.
  const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"syam",
  lastName: "sunder"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "syam sunder":
person.fullName.call(person1);
  
  //Binding
  var hello = {
name : "ABC",
printFunc: function(){
   document.write(this.name);}
   }
     //hello
  hello.printFunc(); //works
  
  //error
  var hello = {
name : "ABC",
printFunc: function(){
   document.write(this.name);}
   }
     
  var printFunc2= hello.printFunc;
  printFunc2();/error bind lost
  
  //manual bind
   var hello = {
name : "ABC",
printFunc: function(){
   document.write(this.name);}
   }
     
  var printFunc2= hello.printFunc.bind(hello);
  printFunc2();/no error
  
  /Closures
  a closure gives you access to an outer function’s scope from an inner function.
  function makeFunc() {
  var name = 'hello';
  function displayName() {
    alert(name);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc();
