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