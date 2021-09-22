//create objet
let emp = {}
emp.name = "syam";
emp.age = 20;
emp.address = "mine"

//Create objects with Functions
function employe(name,age,address){
  let emp = {}
  emp.name = name;
  emp.age = age;
  emp.address = address
  return emp;
}

//with constructor

function Employe(name,age,address){
   this.name = name;
  this.age = age;
  this.address = address;
}
let emp = new Employe("syam",20,"mine");

//prototype

let obj={}
obj.name = "syam"
onj.age;//error no such one

check for proto
obj.__proto__.age = 20;
obj.age//20

function Emp(name){
  this.name = name
}
let emp1 = new Emp("syam");
emp1.name//syam
prototype for constructor
Emp.prototype.hikes = function(){
  alert("hikes");}
now 
let emp2 = new Emp("sunder")
emp2.name//sunder
emp2.hikes//hikes coming from  prototype

//inheritence
function Manager(dept){
  this.dept = dept;
}
let manage1 = new Manager("reddy");
manager.name//reddy

manager.hike//error because hike in another function need to inherit

manager.__proto__.__proto__=Emp.prototype;
now => manager.hike//Hikes inherit from proto

  
  
