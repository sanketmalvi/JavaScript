// singleton:  If Declare as literal singleton wouldn't make, It would make when declare as constructor.

// Object.create


// Object literals

const mySym = Symbol("key1")

const JSUser = {
    name: "sanket",
    "Full name": "sanket malvi",
    age: "20",
    // mySym : "mykey1",        //Wrong syntax

    [mySym] : "mykey1",      //Correct Syntax to define symbol

    location: "indore",
    email: "sanket@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "Wednesday"]
}  

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);

// console.log(JSUser[mySym]);
// console.log(typeof mySym);

// ++++++++++++++++++++++++++++++++++++


JSUser.email = "sanket@chatgpt.com"
console.log(JSUser["email"]);

// Object.freeze(JSUser)
JSUser.email = "sanket@gmail.com"
// console.log(JSUser);

// ++++++++++++++++++++++++++++++++++++
// Functions

JSUser.greeting = function(){
    console.log("hello js user");
}

JSUser.greetingTwo = function(){
    console.log(`Hi I am ${this.name}`);
}

JSUser.greeting()
JSUser.greetingTwo()