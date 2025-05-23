// Reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// If accumulator is not provided, the first element in the array will be used as the initial accumulator value. The first element will be skipped, and the second element will be used as current value.

const nums = [1, 2, 3]

const Total = nums.reduce(function (acc, currval) {
    console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
    return acc + currval
}, 0)              // passing 0 to Accumulator as initial value

console.log(`Total is : ${Total}`);


// same 
const myTotal = nums.reduce((acc,curval) => acc + curval, 2)
console.log(`myTotal is : ${myTotal}`);

/* Explanation:
initial value passed in acccumulator is 2

step1: acc: 2 , curcal: 1   =>   acc + curval ie  2 + 1 = 3  =>  now accumulator is 3 
step2: acc: 3 , curcal: 2   =>   acc + curval ie  3 + 2 = 5  =>  now accumulator is 5
step3: acc: 5 , curcal: 3   =>   acc + curval ie  5 + 3 = 8  =>  now accumulator is 8

So, MyTotal is 8
*/

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

