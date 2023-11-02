const score = 400   //automatically finds its number datatype
// console.log(score);

const balance = new Number(100)  //Specifically mentioned datatype
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2).length);


const  otherNumber = 123.3903
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// -------------------------------------------------

// +++++++++++++++++++++++ MATHS ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));    //Absolute : Make values +ve
// console.log(Math.round(4.6));  //Round of values after decimal
// console.log(Math.ceil(4.3))  // 5
// console.log(Math.floor(4.6));

// console.log(Math.max(1, 5, 3, 8)); //maximum
// console.log(Math.min(1, 5, 3, 8)); //minimum


// console.log(Math.random()); //Get random values b/w 0 to 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);

