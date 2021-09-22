//Try & Catch
try {

  alert('Start of try runs');  // (1) 

  lalala; // error, variable is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`,err); // (3) lalala undefined
}

/errors object have 3 properties
try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
  //with json parse
  let json = '{"name":"syam", "age": 20}'; 

let user = JSON.parse(json); 

// now user is an object with properties from the string
alert( user.name ); // syam
alert( user.age );  // 20
  
  //throw
  try {
    if(x == "") throw "empty";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
   alert(err);
  }
  
  //finally
  try {
    let a = 1+1;
    if(x == "") throw "is empty";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    alert(err);
  }
  finally {
    alert(a);
  }
