// Types of Errors
// 1. Compile Time Error: Syntax Error

// console.log("hello"


// 2. Reference Error or Runtime Error

// console.log(a) // ReferenceError: a is not defined



// Error Handling

// 1. Try and Catch

try {
    console.log(a);    //In this block we write code that may throw an error
} 
catch (error) {         //In this block we write code that will run if there is an error
    
    // Here we can log the error or handle it in some way
    // Can write retry logic here
    // fallback logic 

    console.log("Error: ", error); // ReferenceError: a is not defined

}

finally {
    console.log("I will always run");
}

// 2. Finally
// The finally block will always execute, regardless of whether an error occurred or not



// _________________________________

// 3. Throwing Errors
// We can throw our own errors using the throw statement
try {
    console.log(x);
}
catch (error) {
    throw new Error("This is a custom error message");
}

