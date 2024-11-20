// if
const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("Logged");
}

//  < , > , <= , >= , == , != , === , !==

if(2 === "2"){
    console.log("Executed");
}

const temperature= 41

if (temperature < 50) {
    // console.log("less than 50");
}
else{
    // console.log("greater than 50");
}

const score = 200
 if(score > 100) {
    let power = "fly"
    // console.log(`User Power: ${power}`);
 }
//  console.log(`User Power: ${power}`);



// ++++++++++++++++++++++++++++++++++++++++++++++++



const balance = 1000

if(balance > 500) console.log("test");       //Implicit Scope



// if (balance > 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }




const userLoggedIn = true
const debitcard = true
const id = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && id){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("user loged in");
}
