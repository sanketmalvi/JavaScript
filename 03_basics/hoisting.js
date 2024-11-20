// Hoisting : Make some types of variables accessible in code before they declared. 
            //   "Variables lifted to top of their scope"

// Behind the Scene: Before execution, code is scanned for variable declaration, and for each variable, a new property is created in the variable environment object.

// when assign const and let so this get in TEMPORAL DEAD ZONE


// Variables
console.log(me);
// console.log(job);
// console.log(year);

 var me = "john";   //undefined
 let job = "coder";    //reference error
 const year = 2001;    //reference error



//  Functions
console.log(addDecl(2, 3));   //Hoisted  5
// console.log(addExp(2, 3));    //referenceError
// console.log(addArrow(2, 3));  //referenceError

 function addDecl(a, b) {
    return a + b ;
 }

 const addExp = function (a, b) {
    return a + b;
 };

 const addArrow = (a, b) => a + b;




//  Example
if(!numProducts) deleteShoppingLit();  //this will get undefined and undefined is a falsy value.

var numProducts = 10;      //Here var is defined means it will hoisted but gives undefined

function deleteShoppingLit() {
    console.log("All Products Deleted");
}