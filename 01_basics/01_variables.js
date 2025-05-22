const accountId = 145533   
let accountEmail = "sanket@gmail.com" 
var accountPass = "1234" 
accountCity = "Indore"
let accountState;

// accountId = 456666
console.log(typeof accountId);

accountEmail = "sm@gmail.com"
accountPass = "9746"
accountCity = "Betul"

console.log(typeof accountState);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
// Use Console.table when you have to print multiple variables

// ------------------------------------


/*
Variable Naming Rules
1. Cannot start with number
2. Can start with letter, underscore, dollar sign
3. Cannot use reserved keywords
4. Cannot use special characters except underscore and dollar sign
5. Case sensitive
*/




/*
Prefer not to use var, instead of use let
beacuse of issue in block scope and functional scope
*/

// var is function scoped
// var is hoisted
var a = 10;
var a = 20; // redeclaring var variable is allowed
console.log(a); // 20


// var age = 25;

// if(true){
//     var age = 30;
//     console.log(age); // 30
// }


// function test() {
//     var age = 30;
//     console.log(age); // 30
// }
// console.log(age); // Uncaught ReferenceError: age is not defined


// ---------------------



// let is block scoped
// Redeclaring let variable will give error
// let age = 25;
// let age = 30;

// ReAssigning let variable is allowed
let a = 25;
a = "hello";  //dynamic typed language
console.log(a); // hello


// --------------------------

// const is also block scoped
// Redeclaring const variable will give error
// const age = 25;
// const age = 30;

// ReAssigning const variable will give error
// const age = 25;
// age = 30;
// console.log(age); // Uncaught TypeError: Assignment to constant variable.