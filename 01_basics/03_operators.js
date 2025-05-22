/* 
1. Arithmetic operators :  +, -, *, /, %, **, ++, --

Binary operators: Operator that requires two operands to perform an operation

let a = 2+2 // 4
let b = 2-2 // 0
let c = 2*2 // 4
let d = 2/2 // 1
let e = 2**3 // 8
let f = 2%3 // 2 Remainder

Unary operators: Operator that requires only one operand to perform an operation

let i = 5
let j = i++  // 5  first assign the value to j and then increment it
console.log(i)  // 6

let g = 7   
let h = ++g  // 8  first increment the value and then assign it to h
console.log(g)  // 8

let j = 3 
let k = j-- // 3  first assign the value to k and then decrement it
console.log(j)  // 2


let l = 4
let m = --l // 3  first decrement the value and then assign it to m
console.log(l)  // 3

*/

// ________________________________
/*
2. Assignment operators : =, +=, -=, *=, /=, %=, **=

let a = 2
let b = 5

a += b // a = a + b
a -= b // a = a - b
a *= b // a = a * b
a /= b // a = a / b
a %= b // a = a % b
a **= b // a = a ** b

*/

// ________________________________


/*
3. Comparison operators : ==, ===, !=, !==, >, <, >=, <=

Returns boolean value True or False

// == : checks for value only
// === : checks for value and type 

console.log(2 == "2") // true
console.log(2 === "2") // false

console.log(2 != "2") // false
console.log(2 !== "2") // true

console.log(2 > 3) // false
console.log(2 < 3) // true
console.log(2 >= 3) // false
console.log(2 <= 3) // true
// ________________________________________________________
*/

/*
4. Ternary operator : ? :
// A shorthand for if-else statement

let age = 18
let isAdult = (age >= 18) ? "Adult" : "Not Adult"
console.log(isAdult) // Adult

*/
// ________________________________________________________

/*
5. Logical operators : &&, ||, !
// && : AND operator
// || : OR operator
// ! : NOT operator

let ans = (true && false && true)   // false
console.log(ans)

let ans1 = (true || false || true) // true

let ans3 = !true // false
let ans4 = !false // true

*/
// ________________________________________________________

/*
6. Bitwise operators : &, |, ^, ~, <<, >>, >>>

console.log(2 & 3) // 2
console.log(5 & 5) // 5

console.log(2 | 3) // 3
console.log(5 | 5) // 5

console.log(2 ^ 3) // 1
console.log(5 ^ 5) // 0

console.log(~2) // -3

*/