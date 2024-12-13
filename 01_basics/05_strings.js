// basics
const name = "sanket "
const repoCount = 20

// console.log(name + repoCount + " repositories");    // Outdated way

//Modern Syntax: Template literal
// console.log(`Hi I am ${name} and my repocount is ${repoCount}`);


// ---------------------------

// Another way of declare string
const gameName = new String('sanketsc')  //if run it in console will get the different methods

console.log(gameName[0]);                 // S
console.log(gameName.__proto__);          // {}
console.log(gameName.length);             // 8
console.log(gameName.toUpperCase());      // SANKETSC
console.log(gameName.toLowerCase());      // sanketsc
console.log(gameName.charAt(2));          // n
console.log(gameName.indexOf('k'));       // 3

const slice = gameName.substring(0,4)     // Sank
//  console.log(slice);                   

const anotherSlice = gameName.slice(1, 3)  // Can give negative values
// console.log(anotherSlice);

const newString = "      sanket     "
console.log(newString);
console.log(newString.trim());       //REMOVE Spaces


const url = "https://sanket.com/sanket%20portfolio"
// console.log(url.replace('%20', '-' ))

// console.log(url.includes('sanket'));      //True
// console.log(url.includes('jack'));        //False
// console.log(url.startsWith('https'))      //True
// console.log(url.endsWith('port'))         //False

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// Split
const splitname = "sanket-portfolio-io"
console.log(splitname.split('-'));    //return in Array

const [firstName, lastName] = 'Coder Sanket'.split(' ');
 
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


//////////////////////////////////////////////////////////////
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// 
const superHero = 'iRonMan'
const lower = superHero.toLowerCase();
const capital = lower[0].toUpperCase() + lower.slice(1)
console.log(capital)  //Ironman


// Capptalize firstLetter of Each word

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
  
    for (const n of names) {
      // namesUpper.push(n[0].toUpperCase() + n.slice(1));
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));     //OR
    }
    console.log(namesUpper.join(' '));
  };
  
  capitalizeName('jessica ann smith davis');  //Jessica Ann Smith Davis



  // Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));     //++++++Go to gate 23!++++++++++
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));     //+++++++++++++++Jonas++++++++++

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));


// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);





//////////////////////////// String Methods Practice //////////////////////////////////


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}