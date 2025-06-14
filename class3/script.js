console.log("Hello");
// statements
x = 9;
console.log(x);
console.log(typeof x);

x = "Hello";
console.log(x);
console.log(typeof x);

let a; // declaration
a = 5; // initialization
console.log(a);
console.log(typeof a);

// Operators: +, -, *, /

let m, n;
m = 7;
n = 3;

console.log(m + n);
console.log(m / n);
console.log(m % n);

// Rules of variable names: 
let name$_ = "Yash";
console.log(name$_);

let count;
console.log(count); // undefined
count = 12;
console.log(count);

// let, var, const

var s = 34;
console.log(s);

// using var you can redeclare the variable
var s = 78;
console.log(s);

// let count = 9; ERROR

const NUM = 99;
console.log(NUM);
// NUM = 25; ERROR

// q = 9 + "R"
// q = true + "R"
let q = null + "R";
console.log(q);

q = 4 + 8 + "S"; // 48S or 12S
console.log(q); // 12S

q = "S" + 4 + 8;
console.log(q); // S48

q = 'smsd';
console.log(q);

// Functions

function square(x) {
  return x * x;
}

console.log(square);


let ans = square(4);
console.log(ans);

function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}

greet("Suraj", "Singh");

(function call() {
  console.log("Self invoking function");
})();

// call(); ReferenceError: call is not defined

const bye = function () {
  return "Bye Bye";
}

console.log(bye());

// Objects
// key: value
const car = {
  model: "Omni",
  brand: "Maruti",
  start: function () {
    return this.model + " is starting";
  }
}

console.log(car.model);
console.log(car['brand']);
console.log(car.start());

const person = {};
person.firstName = "Ayush";
person.lastName = "Raj";
person.age = 20;
console.log(person);

person.age = 19;
console.log(person);

// new Object()

const student = new Object();
student.firstName = "Harsh";
student.lastName = "Chaudhary";
console.log(student);

// adding a new function
student.getFullName = function () {
  return this.firstName + " " + this.lastName;
}
console.log(student.getFullName());


// deleting 
delete student["firstName"];
console.log(student);

delete student.getFullName;
console.log(student);


// nested objects
const response = {
  status: "NOT_FOUND",
  code: 404,
  message: {
    title: 'Requested data is not present'
  }
}

console.log(response)
console.log(response.message.title);

// loop to access object properties: key

for (let x in response) {
  console.log(x + " : " + response[x]);
}

// Object.values(): array of property values
const personDetails = Object.values(person);

console.log(personDetails);

// Object.entries() : fetches [key, value]

console.log(Object.entries(person));

for (let [property, value] of Object.entries(person)) {
  console.log(property + " " + value);
}

// JSON.stringify()

console.log(JSON.stringify(person));

// random number
console.log(Math.random());

