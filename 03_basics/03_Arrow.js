const user = {
    username : "sanket",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`); //this used for current context
        // console.log(this);      
    }
}

user.welcomeMessage()

user.username = "sam"                      //Now context is changed
user.welcomeMessage()

console.log(this);   // {}  
// We are in node environment, it gives empty bcz in this case there is no any current context in global scope.

// *** But  when u run it in browser u will see window object bcz in the browser, global object is window object ***




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function one(){
    let username = "sanket"
    // console.log(this.username);          //Cannot use in functions
}
one()

// OR

const Two = function (){
    let username = "sanket"
    console.log(this.username);  //undefined
}          
Two()



//Arrow Function
const another = ()=>{          
    let username = "john"
    console.log(this);     //{}
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));


// OR

// const addTwo = (num1, num2) => num1 + num2              //Implicit return

// OR

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(8,9));



const sum = (num1, num2) => ({username: "john"})           //Object Return



// =====================
