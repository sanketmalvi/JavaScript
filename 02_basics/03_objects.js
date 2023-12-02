// singleton
// Object.create


// Object literals

const mySym = Symbol("key1")

const JSUser = {
    name: "sanket", "Full name": "sanket malvi",
    age: "20",

    [mySym] : "mykey1",

    location: "indore",
    email: "sanket@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "Wednesday"]
}  

console.log(JSUser.email);
console.log(JSUser["email"]);

console.log(JSUser[mySym]);
console.log(typeof mySym);