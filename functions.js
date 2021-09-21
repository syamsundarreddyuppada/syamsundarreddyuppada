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
