const accountId = 145533
let accountEmail = "sanket@gmail.com"
var accountPass = "1234"
accountCity = "Indore"
let accountState;

// accountId = 456666

accountEmail = "sm@gmail.com"
accountPass = "9746"
accountCity = "Betul"

console.log(typeof accountState);


console.table([accountId, accountEmail, accountPass, accountCity, accountState])
// Use Console.table when you have to print multiple variables



/*
Prefer not to use var, instead of use let
beacuse of issue in block scope and functional scope
*/