//  Immediately Invoked Function Expression (IIFE)

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


