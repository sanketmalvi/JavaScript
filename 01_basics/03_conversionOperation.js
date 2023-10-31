// let score = "33"
// let score = "33abc"
// let score = true
let score = null
// let score = undefined


// console.log(score);
// console.log((score));  //as a method

let valueInNumber = Number(score)  //CONVERT VARIABLE IN NUMBER
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan (Not a Number)
// true => 1; false => 0



// ---------------------------------------------------------------------------------------------



let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)  //  CONVERT IN BOOLEAN
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" = false
// "sanket" = true



// ---------------------------------------------------------------------------------------------



let aNumber = 35
// let aNumber = true

let stringNumber = String(aNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);






//*********************************** OPERATIONS ********************************************



let value = 3
let negValue = -value
// console.log(negValue);

// -----------------------------------------


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " sanket"

let str3 = str1 + str2
// console.log(str3)

// -------------------------

// when string defined first then it treated as string 
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);

// console.log(1 + 2 + "2"); //when string defined last then it do operation 

// --------------------------------------


// PREFIX/POSTFIX

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// Link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
