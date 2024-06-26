// Reduce

const nums = [1, 2, 3]

const Total = nums.reduce(function (acc, currval) {
    console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
    return acc + currval
}, 0)              // passing 0 to Accumulator as initial value

console.log(`Total is : ${Total}`);


// same 
const myTotal = nums.reduce((acc,curval) => acc + curval, 2)
console.log(`myTotal is : ${myTotal}`);


// ______________________________

const shoppingCart = [
    {
        courseName: 'frontend',
        price: 999
    },
    {
        courseName: 'backend',
        price: 1999
    },
    {
        courseName: 'Data-Science',
        price: 2999
    }
]


const totalCart = shoppingCart.reduce((acc, item) => acc + item.price  , 0)

console.log(`Total Cart amount is: ${totalCart}`);



// Flat an unorganised array

let arr = [11, true, "hmm", ['okay', 37, [false], 56], 89]


// One Way
const Flatted = arr.reduce((flat, toFlatten)=> flat.concat(toFlatten),[] )
console.log(Flatted);


// Another Way : This can flat multiple deep down array like [1, 2, [2, [7, 2], 4], true]
function tobeFlat(num) {
    return num.reduce((acc, val)=> Array.isArray(val) ? acc.concat(tobeFlat(val)) : acc.concat(val),[])
}
let result = tobeFlat(arr)
console.log(result);



// Simplest Way
const res = [].concat(...arr)
console.log(res);