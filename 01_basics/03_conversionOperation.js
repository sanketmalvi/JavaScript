// let score = "33"
// let score = "33abc"
// let score = true
let score = null
// let score = undefined


console.log(score);
// console.log((score));  //as a method

let valueInNumber = Number(score)  //CONVERT Any Datatype IN NUMBER
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber);  // 0


// "33" => 33
// "33abc" => Nan (Not a Number)
// true => 1; false => 0


// -----------------------------------------------------------------------


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn)  //  CONVERT IN BOOLEAN
// console.log(booleanIsLoggedIn); //true

// 1 => true; 0 => false
// "" = false
// "sanket" = true

//------------------------------------------------------------------------


let aNumber = 35
// let aNumber = true

let stringNumber = String(aNumber)  //Convert in String
// console.log(stringNumber);
// console.log(typeof stringNumber);  //string



//*************** OPERATIONS ******************

let value = 3
let negValue = -value
// console.log(negValue);  // -3

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
console.log(str3)          //Hello sanket

// -------------------------

// when string defined first then it treated as string 
// console.log("1" + 2);  // 12
// console.log(1 + "2");  // 12
// console.log("1" + 2 + 2);   // 122

// console.log(1 + 2 + "2");  // 32
//when string defined last then it do operation on first two numbers and add string in last 

// --------------------------------------


// PREFIX/POSTFIX

let gameCounter = 100
++gameCounter;
console.log(gameCounter);  //101

// Link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
