// basics
const name = "sanket "
const repoCount = 20

// console.log(name + repoCount + " repositories");    // Outdated way

//Modern Syntax
// console.log(`Hi I am ${name} and my repocount is ${repoCount}`);


// ---------------------------

// Another way of declare string
const gameName = new String('Sanketsc')  //if run it in console will get the different methods

console.log(gameName[0]);                 // S
console.log(gameName.__proto__);          // {}
console.log(gameName.length);             // 8
console.log(gameName.toUpperCase());      // SANKETSC
console.log(gameName.charAt(2));          // n
console.log(gameName.indexOf('k'));       // 3

const slice = gameName.substring(0,4)     // Sank
//  console.log(slice);                   

const anotherSlice = gameName.slice()  // Can give negative values
// console.log(anotherSlice);

const newString = "      sanket     "
console.log(newString);
console.log(newString.trim());


const url = "https://sanket.com/sanket%20portfolio"
// console.log(url.replace('%20', '-' ))

// console.log(url.includes('sanket'));   //true
// console.log(url.includes('jack'));     //false

const splitname = "sanket-portfolio-io"
console.log(splitname.split('-'));


