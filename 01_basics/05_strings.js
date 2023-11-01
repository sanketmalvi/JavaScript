// basics
const name = "sanket "
const repoCount = 20

// console.log(name + repoCount + " repositories");    // Outdated way

// console.log(`Hi I am ${name} and my repocount is ${repoCount}`);  //Modern way

// ---------------------------

const gameName = new String('Sanketsc')  //if run it in console will get the different methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

 const slice = gameName.substring(0,4)
//  console.log(slice);

const anotherSlice = gameName.slice()  // Can give negative values
// console.log(anotherSlice);

const newString = "      sanket     "
// console.log(newString);
// console.log(newString.trim());


const url = "hhtps://sanket.com/sanket%20portfolio"
// console.log(url.replace('%20', '-' ))

// console.log(url.includes('sanket'));
// console.log(url.includes('jack'));

const splitname = "sanket-portfolio-io"
console.log(splitname.split('-'));


