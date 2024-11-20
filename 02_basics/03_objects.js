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


console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["Full name"]);

console.log(JSUser[mySym]);
console.log(typeof mySym);

// ++++++++++++++++++++++++++++++++++++


JSUser.email = "sanket@chatgpt.com"
console.log(JSUser["email"]);

// Object.freeze(JSUser)
// JSUser.email = "sanket@gmail.com"
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
console.log(JSUser);


// ES6 enhanced object literals

const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    }
  };
  
  
  const restaurants = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours   //just mention the name 
  };


//   =============================


// new way of writing methods
  
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    order(starter) {
        console.log(starter);
    }
  };