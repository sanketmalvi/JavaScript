// Functions in JavaScript
// 1. Function Declaration  
// 2. Function Expression
// 3. Arrow Function
// 4. IIFE (Immediately Invoked Function Expression)
// 5. Callback Function

// Functions are first-class citizens in JavaScript, meaning they can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, returned from functions, and so on.



function sayMyName(){
        console.log("S");
        console.log("A");
        console.log("N");
        console.log("K");
        console.log("E");
        console.log("T");
    }

sayMyName()

// ---------------------------------------------------------

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);       //It will give 'undefined' bcoz its not return anything
}

// OR

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// }

// OR

// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

const Answer = addTwoNumbers(3, 5)
console.log("Result : ", Answer );`x`



// --------------------------------------------



function loginUserMessage(username){
    if(username === undefined){     
        // console.log("please Enter a username");
        return
    }
    return `${username} just logged in`
}

// OR
//Default parameter
function loginUserMessage(username = "sam"){       
    if (!username) {   //When parameter is undefined it willn't go in the loop, SO use ! sign
        // console.log("Enter Name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sanket"));
console.log(loginUserMessage());    //undefined : When not passing anything 


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT




// Passing Function as a parameter
function sayHello(greet, name){
    console.log("Hello"+ " " + name);
    greet();
}

function greet(){
    console.log("I am a Coder");
}
sayHello(greet, "John") 



// passing null as a parameter
function sayHello(name= "Sam"){
    console.log("Hello"+ " " + name);
}
sayHello(null) // Hello null


// passing undefined as a parameter
function sayHello(name= "Sam"){
    console.log("Hello"+ " " + name);
}
sayHello(undefined) // Hello Sam





// Returning a function from a function
function outerFunction(){
    return function innerFunction(){
        console.log("I am a inner function");
    }
}
const innerFunc = outerFunction()   //outerFunction will return innerFunction
console.log(innerFunc());   // I am a inner function





// ________________________________________________________________________________


function calculateCartPrice(...num1){        //Rest Operator
    return num1
}
console.log(calculateCartPrice(100,500,600,350));

// OR

function calculateCartPrice2(val1, val2, ...num2){        //Rest Operator
    return num2
}
console.log(calculateCartPrice2(100,500,600,350));      // val1:100, val2:500, num2: 600,350


// --------------------------------------------------
// Objects in function

const user = {
    username: "Ank",
    price: 199
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

handleObject(user)

// handleObject({                     //Object Can pass here also
//     username: "Ank",
//     price: 399
// })


// ______________________________________________________

// Arrays in Function

const myArray = [100, 200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([100, 200, 400, 600]));
