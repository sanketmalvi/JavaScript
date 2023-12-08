var c = 300

if (true) {
    let a = 10
    const b = 20                               //Block Scope
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


let z = 200
if (true) {
    let z = 30
    // console.log("Inner:",z);
}
// console.log(z);


// ------------------------------------------------


function one() {
    const username = "sanket"   

    function two() {
        // const website = "Utube"
        console.log(username);
    }
    // console.log(website);
    // two()
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

addTwo(5)
const addTwo = function (num) {
    return num + 2
}
 