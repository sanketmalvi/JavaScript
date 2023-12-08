// console.log("S");
// console.log("A");
// console.log("N");
// console.log("K");
// console.log("E");
// console.log("T");
// ---------------------------------------------------------

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// OR

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// }

// OR

function addTwoNumbers(num1, num2){
    return num1 + num2
}

const Answer = addTwoNumbers(3, 5)
// console.log("Result : ", Answer );

// --------------------------------------------



function loginUserMessage(username){
    if(username === undefined){     
        // console.log("please Enter a username");
        return
    }
    return `${username} just logged in`
}

// OR

function loginUserMessage(username = "sam"){       //Default parameter
    if (!username) {   //When parameter is undefined it willn't go in the loop, SO use ! sign
        // console.log("Enter Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sanket"));
// console.log(loginUserMessage());    //undefined


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT






// ________________________________________________________________________________


function calculateCartPrice(...num1){        //Rest Operator
    return num1
}
console.log(calculateCartPrice(100,500,600,350));

// OR

function calculateCartPrice2(val1, val2, ...num2){        //Rest Operator
    return num2
}
console.log(calculateCartPrice2(100,500,600,350));      // val1:100, val2:500, num1: 600,350


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
