const userEmail = "sanket@ai"

if(userEmail) {
    console.log("got email");
}
else{
    console.log("Dont have email");
}



const userEmail2 = ""

if(userEmail2) {
    console.log("got email");
}
else{
    console.log("Dont have email");
}




const userEmail3 = []

if(userEmail3) {
    console.log("got email");
}
else{
    console.log("Dont have email");
}




// _________________Falsy Values_________________

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// _________________Truthy Values_________________

// "0", 'false', " ", [], {}, function(){} 




// Check Array 
const email = []

if(email.length === 0) {
    console.log("array is empty");
}


// Check Object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}




// ++++++++++++++++++++++++++++++++++++++++++++



// Nullish Coalescing Operator (??): null undefined
// It is basically a safety that it is null or not

let val1;
// val1 = 5 ?? 10         //5

// val1 = null ?? 10     //10

// val1 = undefined ?? 15      //15

val1 = null ?? 10 ?? 50        //10

console.log(val1);

// ------------------------------



// Terniary Operator

//  condition ? true : false
 
 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");