// Arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "Krrish"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array Methods

// myArr.push(6)          //Add value at last
// myArr.push(7)
// myArr.pop()            //Remove the last value

// myArr.unshift(8)       //Add value at front
// myArr.shift()          //Remove the first value


console.log(myArr.includes(8));     //false
console.log(myArr.indexOf(9));      // -1
console.log(myArr.indexOf(3));      // 3


const newArr = myArr.join()       //Adds all the elements of an array into a string


console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//-------------------------------------------------------

// SLICE 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


// Slice : We can insert, remove and replace the elements of an array

const myn2 = myArr.splice(1, 3) //In splice range portion will remove from original array   
console.log(myn2); // [1, 2, 3]
console.log("C ", myArr);     // [0, 4, 5]

const arr5= [100, 200, "hello", true, 5];
arr5.splice(1, 2, "hi", "bye"); // 1st parameter is index, 2nd is how many elements to remove, 3rd and 4th are the new elements to add
console.log(arr5); // [100, "hi", "bye", true, 5]

arr5.splice(1, 0, "john") //Insert "john" at index 1 without removing any elements
console.log(arr5); // [100, "john", "hi", "bye", true, 5]


// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);            //mutate the original array

///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


/* NOTE-
JavaScript array-copy-operation create shallow copies.

Shallow copy: of an object is a copy whose properties share the same reference point.

Deep copy: of an object is a copy whose properties  do not share the same reference point
*/


