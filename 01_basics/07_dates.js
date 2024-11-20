// Dates 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0, 23)         // yy-mm-dd
// let myCreatedDate = new Date(2023,0, 2, 5, 3)    // yy-mm-dd-Time
// let myCreatedDate = new Date("2023-01-23")       // yy-mm-dd
let myCreatedDate = new Date("01-14-2010")

console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp); //miliseconds
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  //seconds




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
 
 
newDate.toLocaleString('default', {
    weekday: "long"
})
