const marvel_heros = ["thor","Ironman", "spiderman" ]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)                         //It will print array in array

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)       //It will merge in existing array
// console.log(allHeros);


// Works same as concat but here we can add multiple arrays using(...xyz)
// const all_new_heros = [...marvel_heros, ...dc_heros]            // Spread Operator
// console.log(all_new_heros);

//+++++++++++++++++++++++++++++++++++++++++++++


// In Case will get this type of array then use (.flat) to simplify
const another_array = [1,2,3, [4,5,6], 7, [6, 7, [4,5,3]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

//+++++++++++++++++++++++++++++++++++++++++++++


console.log(Array.isArray("Sanket"))

console.log(Array.from("Sanket"))

console.log(Array.from({name: "Sanket"}))  //interesting



let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));