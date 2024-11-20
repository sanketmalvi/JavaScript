const score = 400   //automatically finds its number datatype
// console.log(score);

const balance = new Number(100)  //Specifically mentioned datatype
console.log(balance);

console.log(balance.toString());         // "100"
console.log(typeof balance);
console.log(balance.toString().length);  // 3
console.log(balance.toFixed(2));         // 100.00 
console.log(balance.toFixed(2).length);  // 6


const  otherNumber = 123.3903
console.log(otherNumber.toPrecision(4));   // 123.3


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000


// +++++++++++++++++++++++ MATHS ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));     //Absolute : Make values +ve : 4
console.log(Math.round(4.6));  //Round of values after decimal : 5
console.log(Math.ceil(4.3))    // Take upper value : 5
console.log(Math.floor(4.6));  // Take lower value : 4

console.log(Math.max(1, 5, 3, 8)); //maximum : 8
console.log(Math.min(1, 5, 3, 8)); //minimum : 1


console.log(Math.random()); //Get random values b/w 0 to 1
console.log((Math.random()*10) + 1);  //Get random values b/w 1 to 10
console.log(Math.floor(Math.random()*10) + 1);


// Random values B/W  10 to 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min);
console.log(Math.floor(Math.random() * (10 +1)) + min);

