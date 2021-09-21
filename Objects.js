**//Objects
let user = {     //  object
  name: "syam",  //  key "name" store value "John"
  age: 20        //  key "age" store value 30
};

//access
alert( user.name ); // syam
alert( user.age ); // 20

//delete user
delete user.age;

//Computed properties taken from user
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"

let user = { name: "syam", age: 20 };
alert( "age" in user ); // true
alert( "blabla" in user ); // false

//for Loop
let user = {
  name: "syam",
  age: 20,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // syam, 20, true
}

**special method
Object.entries(obj)//return keys and value in array

//copy object
When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user = { name: 'syam' };
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

//another way obj assign
Object.assign(dest, [src1, src2, src3...])

//This in Arrow ()
let user = {
  firstName: "syam",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // syam

//Constructor
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("syam");//They should be executed only with "new" operator.
alert(user.name); // syam
alert(user.isAdmin); // false

//Optional chaining
The “non-existing property” problem
let user = {};

alert(user.address ? user.address.street : undefined);
