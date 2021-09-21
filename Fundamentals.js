// hello wolrld

console.log("hello world);

alert("hello World");

//Comments

//iam comment cannot display

//strict mode like preventing you from using undeclared variables.
The directive looks like a string: "use strict" and be at top of script or function

"use strict";
x = 3.14; //// This will be error because x is not declared

// Variable

//var instead of let

let name = "syam"
alert(name);

//error in let variable
let message = "That"

let message = "error"// Causes error cannot redeclare.

//Data types

let str = "sss" // string
let num = 1  // number
let isCorrect = true //boolean

let age = null  // Null is just a special value which represents “nothing”, “empty” or “value unknown”.

let ages;
alert(ages) //if a variable is declared, but not assigned, then its value is undefined:

//Alert,Promp,conform
alert("Hello");

let age = prompt('How old are you?', 100);//100 is default

alert(age);

let isintrest = confirm("Are you the intrested?");// conform with ok or cancel return true or false

//Type Conversions

//String Conversion
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

output = {"true"}

//Numeric Conversion
alert( "6" / "2" ); // 3, strings are converted to numbers when in mathematical functions 
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
output{"123"}

//Boolean
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

//Basic operators, maths
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

//Numeric conversion, unary +
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings

alert( +apples + +oranges ); // 5//correct way to add

//The “if” statement
let year = prompt('In which year was the ECMAScript-2015 specification published?');
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

//OR
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

//AND
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//In AND special condition
(x > 0) && alert( 'Greater than zero!' );

//While loop
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

//for loop
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}

//SWITCH CASE

let a = 1;

switch (a) {
  case 1:
    alert( 'Too small' );
    break;
  case 2:
    alert( 'Exactly!' );
    break;
  case 3:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}

//Functions
let name = 'syam';

function showMessage() {
  let message = 'Hello, ' + name;
  alert(message);
}
showMessage(); // Hello, syam // A function can access an outer variable as well but inner variable cannot acces outside.

//Function Expressions
the function is created and assigned to the variable explicitly
let sayHi = function() {
  alert( "Hello" );
};

//Callback functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//Arrow functions
let sum = (a, b) => a + b;

let sayHi = () => alert("Hello!");
sayHi();
