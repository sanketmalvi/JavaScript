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


// console.log(myArr.includes(8));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()       //Adds all the elements of an array into a string


console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//-------------------------------------------------------

// SLICE , Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //In splice range portion will remove from original array   
console.log(myn2);
console.log("C ", myArr);      


/* NOTE-
JavaScript array-copy-operation create shallow copies.

Shallow copy: of an object is a copy whose properties share the same reference point.

Deep copy: of an object is a copy whose properties  do not share the same reference point
*/


