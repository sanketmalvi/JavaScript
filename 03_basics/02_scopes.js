var c = 300

if (true) {
    let a = 10
    const b = 20                               //Block Scope
    var c = 30           //In case of (var) It would affect outside the block scope i.e outside 'c'
}
// console.log(a);
// console.log(b);
console.log(c);


let z = 200
if (true) {
    let z = 30
    console.log("Inner:",z);

    
}
console.log("Outer:",z);


// ------------------------------------------------


function one() {
    const username = "sanket"   

    function two() {
        const website = "Utube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// -------------------------------------------------

if (true) {
    const username = "sanket"
    if (username === "sanket") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);




// ****************************************************
// INTERESTING


console.log(addone(5));

function addone(num) {
    return num + 1
}

// OR

// addTwo(5)
// const addTwo = function (num) {                //Hoisting
//     return num + 2
// }
 