
/*
const button = document.querySelector("button");

const para = document.getElementsByClassName("para");

// console.log(button);

console.log(para);

function clickEvent() {
  console.log("Here there!!");
  button.innerText = "Clicked"
}

function mouseAction() {
  // console.log("Mouse moved on button");
}

function changeHtml() {
  para[0].innerText = "<h1>Hey</h1>"
}

*/

// strings

let company = "CipherSchools";
console.log(company);

// \n, \t, \", \', \\

let len = company.length;
console.log(len);

let oneliner =
`CipherSchools is
great`;

console.log(oneliner);

let age = 23;
console.log(`My age is ${age}`);

// new String()

// charAt(), toUpperCase(), toLowerCase(), 

let s = company.concat(" is great");
console.log(s, company);
s = company.includes("Schools");
console.log(s);

s = company.repeat(2);
console.log(s);

s = company.slice(0, 5);
console.log(s);

// number

let x = 2e4;
console.log(x);

x = 5.8;
console.log(x);

console.log(typeof x.toString());

s = "23";
console.log(Number(s), typeof Number(s));
console.log(parseInt(s), typeof parseInt(s));

s = "45fghgf98";
console.log(Number(s), typeof Number(s));
console.log(parseInt(s), typeof parseInt(s));

console.log(Number.MAX_VALUE);

// arrays
let arr = ["str", 9, true];
console.log(arr);

let str = arr.toString();
console.log(str);

arr = [[24, -35], 34];

console.log(arr.flat());
arr = arr.flat();
console.log(arr.filter(x => x > 10));

console.log(arr[0]);

arr.push(87); // add at the end
console.log(arr);

arr.unshift(12); // add at the start
console.log(arr);


for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]); 
}

// reverse the array

let rev = [];
for (let i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}

console.log(rev);

// O(n)

let start = 0, end = arr.length - 1;

while (start < end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  start++;
  end--;
}

console.log(arr);

// [12, 24, -35, 34, 87]
// [0   1    2   3    4]
// [87, 34, -35, 24, 12]

// Given an array arr[] and an integer target. You have to return true/false if they sum upto target. You cannot use the same element twice.
// 2, 9, 10, 4, 15, target = 99
arr = [2, 9, 10, 4, 15];
let target = 99;

// Algo 1: Use nested for loop
let l = arr.length;

function twoSum() {
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i] + arr[j] == target) {
        return true;
      }
    }
  }

  return false;
}

twoSum() ? console.log("Found") : console.log("Not Found");


// Algo 2: Sort the elements, and use two pointers

console.log(arr.sort((a, b) => a - b));

// Date

console.log(Date());

const date = new Date("2025-06-10");
console.log(date.getDate());

if (null) {
  console.log("Not executed");
}

// set

let set = new Set();
set.add(34);
set.add(86);
set.add(34);

console.log(set);

set = new Set([12, 34, 35, 12]);
console.log(set);

console.log(set.has(12));

// Map
// key : value

let map = new Map();
map.set("FirstName", "Price");
map.set("LastName", "Kumar");
console.log(map);

console.log(map.keys());
console.log(map.entries());
console.log(map.values());
console.log(map.get("FirstName"));

// destructuring
const person = {
  firstName : "Ayush",
  lastName: "Raj",
  age: 20,
  college: "LPU"
};

let { firstName, lastName, ...rest } = person; // rest operator
console.log(firstName);

console.log(typeof rest);
console.log(rest.college);

const person1 = { ...rest }; // spread operator

console.log(person1);

try {
  console.log("Fetching users...");
  throw new Error("No users found")
} catch (error) {
  console.log(error);
}

// scope

function f() {
  if (true) {
    var x = 99;
    let q = 234;
  }

  console.log(x);
  // console.log(q); // Error
}

f();

// hoisting

r = 67; // initialization
console.log(r);
var r; // declaration

w = 38; // initialization do not happen before declaration
console.log(w); // TDZ - Temporal dead zone
let w;
w = 62;
console.log(w);
