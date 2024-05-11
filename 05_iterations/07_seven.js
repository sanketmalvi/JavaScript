const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums);




// Using ForEach

const Result = []

myNumbers.forEach( (num1) => {
    Result.push(num1 + 10)
})

// console.log(Result);



// __________________________________

// Chaining

const anotherNum = myNumbers
        .map((num) => num * 10 )
        .map((num) => num + 1 )
        .filter( (num) => num >= 40)

console.log(anotherNum);