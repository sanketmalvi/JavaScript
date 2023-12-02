/*
# Primitive Data Types - (Call by value)

7 TYPES : String, number, boolean, null, undefined, symbol, BigInt
*/

const score = 100  //number
const scoreValue = 100.3  //number

const isLoggedIn = false // boolean
const outsideTemp = null //object
let userEmail;  //undefined


const id = Symbol('123')   
const anotherId = Symbol('123')  //symbol

// console.log(id === anotherId);  //false
// console.log(typeof id);

/*
# Non-Primitive Data Types - (Reference)

Arrays, Objects, Functions
*/

const heros = ["shaktiman", "Krish", "Flyingjatt"];   //array


let myObj = {
    name: "Jack",             //Objects : All values in the curly braces 
    age: "20",
    add: "mumbai"
}

// Function
const myFunction = function(){
    // console.log("Helloworld")
}
// console.log(myFunction);
// console.log(typeof myFunction);


// Study more
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description

// https://262.ecma-international.org/5.1/#sec-11.4.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive), Heap (Non-Primitive)  

// STACK
let myName = "jack"
let anothername = myName
anothername = "chaiorcode"

// console.log(myName);
// console.log(anothername);

// -------------------

// HEAP
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sanket@google.com"

console.log(userOne.email);
console.log(userTwo.email);




/* 
NOTE: 
1) When change anything in Stack will get the copy of it.

2) When change in Heap will get the reference of it (that means whatever we changes it will be the original value)
*/