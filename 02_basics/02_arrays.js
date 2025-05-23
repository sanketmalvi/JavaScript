const marvel_heros = ["thor","Ironman", "spiderman" ]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)                         //It will print array in array

// console.log(marvel_heros);
console.log(marvel_heros[3][2]);                    //batman


const allHeros = marvel_heros.concat(dc_heros)       //It will merge in existing array
console.log(allHeros);


// Works same as concat but here we can add multiple arrays using(...xyz)
const all_new_heros = [...marvel_heros, ...dc_heros]            // Spread Operator
console.log("A",all_new_heros);





//+++++++++++++++++++++++++++++++++++++++++++++


// In Case will get this type of array then use (.flat) to simplify
const another_array = [1,2,3, [4,5,6], 7, [6, 7, [4,5,3]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

//+++++++++++++++++++++++++++++++++++++++++++++

// For Check that it is a Array or not
console.log(Array.isArray("Sanket"))     //false

// Convert in Array
console.log(Array.from("Sanket"))        // ['S', 'a', 'n', 'k', 'e', 't']

// Interesting 
console.log(Array.from({name: "Sanket"}))   // [] This method is not able to convert this Bcoz it confused whether it have to make array of keys or values.



let score1 = 100
let score2 = 200
let score3 = "Winning"

// Return a Array from set of elements
console.log(Array.of(score1, score2, score3));       // [100, 200, 'Winning']


///////////////////////////////////////
// Sorting Arrays

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());                 //Mutate original array
// console.log(owners.slice().sort());         //sorted in copy array
console.log(owners);

// Sorting in Descending Order
const numbers = [5, 1, 9, 3, 7];
const descending = numbers.sort((a, b) => b - a);

console.log(descending); // [9, 7, 5, 3, 1]


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);



// Find() : Find the first element that matches the condition

// const result = array.find((element, index, array) => {
//   // return true for the element you want
// });

// Example with Arrays
const num = [5, 10, 15, 20];
const found = num.find(num => num > 10);
console.log(found); // 15 (first number > 10)

// Example with objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);

console.log(user); // { id: 2, name: "Bob" }


// NOTE: Not suitable if you want all matches — use .filter() for that





// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);



// Array Grouping 

const group = Object.groupBy(movements, mov => mov > 0 ? 'deposits' : 'withdrawals')
console.log(group);



// NON_Destructive Alternatives : These method would not changes the original Array

// toReversed()
// toSorted()
// toSpliced()