const marvel_heros = ["thor","Ironman", "spiderman" ]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)                         //It will print array in array

// console.log(marvel_heros);
console.log(marvel_heros[3][2]);                    //batman


// const allHeros = marvel_heros.concat(dc_heros)       //It will merge in existing array
// console.log(allHeros);


// Works same as concat but here we can add multiple arrays using(...xyz)
// const all_new_heros = [...marvel_heros, ...dc_heros]            // Spread Operator
// console.log("A",all_new_heros);

//+++++++++++++++++++++++++++++++++++++++++++++


// In Case will get this type of array then use (.flat) to simplify
const another_array = [1,2,3, [4,5,6], 7, [6, 7, [4,5,3]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

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