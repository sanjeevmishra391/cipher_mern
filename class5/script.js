
// hoisting


// greet();
function greet() {
  "use strict"
  x = 4; // error in strict mode
  console.log("hello there");
}


// this keyword

const student = {
  firstName: "Utkarsh",
  lastName: "Singh",
  fullName: function () {
    console.log(this); // refer to student object
    return this.firstName + " " + this.lastName;
  }
}

student.fullName();

console.log(this); // this refers to global object - Window object

function printThis() {
  console.log(this);
}

printThis();

const student2 = {
  firstName: "Akanksha",
  lastName: "unknown",
}

let name = student.fullName.call(student2);
console.log(name);

// arrow function

function add(a, b) {
  return a + b;
}

let sum = (a, b) => {
  return a + b;
}

console.log(sum(4, 5));

let sum1 = (a, b) => a + b;

console.log(sum1(6, 9));

const student3 = {
  firstName: "Utkarsh",
  lastName: "Singh",
  fullName: () => {
    console.log(this); // refer to student object
    return this.firstName + " " + this.lastName;
  }
}

student3.fullName();

// example

const hello = function() {
  document.querySelector(".hello").innerHTML += this
}

window.addEventListener("load", hello);

document.getElementById("btn").addEventListener("click", hello);

const hello2 = () => {
  document.querySelector(".hello").innerHTML += this
}

window.addEventListener("load", hello2);

document.getElementById("btn").addEventListener("click", hello2);


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  printCar() {
    console.log(`${this.name} ${this.year}`);
  }
}

const car1 = new Car("Maruti", 2020);
const car2 = new Car("Audi", 2019);

car1.printCar();
car2.printCar();
console.log(car1.name);

// setInterval - keeps executing as an interval
let count = 1;
let id = setInterval(() => {
  console.log(count++);
}, 2000);


setTimeout(() => {
  clearInterval(id); // stopping the interval
}, 6000);

// setTimeout - runs only once after provided time gap
const timeoutId = setTimeout(() => {
  console.log("Hey");
}, 10000)

clearTimeout(timeoutId);

// callback

function asyncFunction(callback) {
  console.log("Operation started");

  setTimeout(function () {
    console.log("Operation completed");
    callback();
  }, 2000);
}

function callBackFunction() {
  console.log("Callback function called");
}

asyncFunction(callBackFunction);

console.log("Program continues");

// callback hell

function functionA(functionB) {
  console.log("Inside function A");
  functionB();
}

function functionB(functionC) {
  console.log("Inside function B");
  functionC();
}

function functionC() {
  console.log("Inside function C");
}

functionA(function () {
  functionB(function () {
    functionC();
  })
});

// promises
// resolve - successfully, reject - errors

function asyncFunctionWithPromise() {
  console.log("Promise Operation started");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Promise Operation completed");
      resolve();
    }, 2000);
  })
}

function callBackFunctionForPromise() {
  console.log("Promise resolved successfully");
}

asyncFunctionWithPromise()
  .then(callBackFunctionForPromise)
  .catch(function (error) {
    console.log("Promise rejected with errors", error);
  });



function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(`Number ${num} is positive`);
    } else {
      reject(`Number ${num} is negative`);
    }
  })
}

function successfullResult(str) {
  console.log(str);
}

function errorResult(err) {
  console.log(err);
}

checkNumber(5)
  .then(successfullResult)
  .catch(errorResult);

checkNumber(-8)
  .then(successfullResult)
  .catch(errorResult);


const doubleIt = (result) => {
  // alert(result);
  return result * 2;
}

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(doubleIt).then(doubleIt).then(doubleIt);


async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching");
    throw error;
  }
}

async function displayData() {
  const data = await fetchData();
  console.log(data);
}

displayData();