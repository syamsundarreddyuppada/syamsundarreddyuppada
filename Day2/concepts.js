//Type Coercion
// The Number 10 is converted to
        // string '10' and then '+'
        // concatenates both strings   
        var x = 10 + '20';
        var y = '20' + 10;
  
        // The Boolean value true is converted
        // to string 'true' and then '+'
        // concatenates both the strings
        var z = true + '10';
output =1020
output = 2010
output = true10

//String to Number Conversion
        var w = 10 - '5'; //5
        var x = 10 * '5'; // 50
        var y = 10 / '5'; // 2
        var z = 10 % '5'; // 0
//Boolean to Number
        var x = true + 2; // 3

        var y = false + 2; //2

//Concept of hoisting
// Variable lifecycle
let a;        // Declaration
a = 100;      // Assignment
console.log(a);  // Usage

function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined


//Currying
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3

function sum(a, b) {
  return a + b;
}

let curriedSum = _.curry(sum); // using _.curry from lodash library

alert( curriedSum(1, 2) ); // 3, still callable normally
alert( curriedSum(1)(2) ); // 3, called partially


//RegEx
//let text = "Visit javascript!";
let n = text.search("javascript");

let text = "Visit javascript";
let n = text.search(/javascript/i);//Regex

//replace
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "javascript");

let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "javascript");

//Iterators
//function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

//Generator functions
//function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
}
