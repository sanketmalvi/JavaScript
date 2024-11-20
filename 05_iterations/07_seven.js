/*
map():

-> Used to transform each element of an array.

-> Returns a new array where each element is the result of applying a provided function to the corresponding element in the original array.

-> The length of the returned array is always the same as the original array.

*/


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10 )
console.log(newNums);




// Using ForEach

const Result = []

myNumbers.forEach( (num1) => {
    Result.push(num1 + 10)
})

console.log(Result);



// __________________________________

// Chaining

const anotherNum = myNumbers
        .map((num) => num * 10 )
        .map((num) => num + 1 )
        .filter( (num) => num >= 40)

console.log(anotherNum);