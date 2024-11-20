"use strict";

// #this Keyword

// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.


// FOur different ways to use this

// 1. Method: when function attached to an object so this will point to the method of object

const data ={
    name:"harry",
    age: 24,
    add: function() {
        return this.name
    }
}



// 2. Simple functions: In this case this keyword will simply be undefined.And it is only valid for strict mode.
// If not in a strict mode it will point out the global object, which in case of browser is window object.

const calcAge = function (birthyear) {
    console.log(birthyear);
    console.log(this);  //undefined
}
calcAge(2001);




// 3. Arrow Functions: This functions do not have their own this keyword. If use in it so it will point out the parent function.

const calcAgeArrow = (birthyear) => {
    console.log(birthyear);
    console.log(this);      //refer to parent scope i.e. window object  
}
calcAgeArrow(2002);



// 4. Event Listener: If called as a Event listener it will point out to the DOM element that the handler function is attached to. 