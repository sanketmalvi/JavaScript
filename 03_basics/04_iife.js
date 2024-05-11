//  Immediately Invoked Function Expression (IIFE)

// Sometimes we want on the start application instantly Database should be connect OR Sometime declared variables in global and we dont want that, it creates problem in our function.

// So 1st is Dont want pollution of global scope and 2nd is execute function immediately.

// Interview : When we want to execute the function immediately and To avoid the global scope pollution


(function chai() {                    //named IIFE
    console.log("DB connected");
})();                         // (;) is imp to end BCZ IIFE don't know where to end function 

// OR

( () => {                             //unnamed arrow function IIFE
    console.log(`DB Connected Two`);
})();

// OR

((name) => (console.log(`DB CONNECTED THREE ${name}`))    //parameter pass in IIFE
)('sanket');


