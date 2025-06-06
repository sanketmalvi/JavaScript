// Promise: It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It is used to handle asynchronous operations in JavaScript.
// It has three states: pending, fulfilled, and rejected.
// We can use promises to handle asynchronous operations like API calls, database queries, file reading, etc.


const promiseOne = new Promise( (resolve, reject) => {
// Do an async task
// DB calls, cryptography, network
setTimeout( ()=> {
    // console.log('Async task is complete');
    resolve()
}, 1000)
}) 

promiseOne.then( ()=> {                   //Behind the scene: then is connected with resolve
    // console.log("promise consumed");
})



// Another Way
new Promise( (resolve, reject)=>{
    setTimeout(() => {
        // console.log("Async task Two");
        resolve()
    }, 1000);
}).then( ()=> {
    // console.log("Async Two resolved");
})





const promiseThree = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve( {username: "jack", email: "jack@example.com"})
    }, 1000);
})

promiseThree.then( (user)=> {
    // console.log(user);
})





const promiseFour = new Promise ( (resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: 'Spider', password: "s1234"})
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 1000);
})

// promiseFour.then( (user)=>{
//     console.log(user);
//     return user.username     //It returned in next .then
// }).then( (username) =>{
//     console.log(username);
// }).catch( (error)=>{                     //Behind the scene: catch is connected with reject
//     console.log('ERROR: Something went Wrong');
// }).finally(()=> console.log("The promise is either resolve or rejected"))





promiseFive = new Promise ( (resolve, reject) =>{
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: 'Adam', password: "s1234"})
        }else{
            reject('ERROR: JS went Wrong')
        }
    }, 1000);
});

// Another way instead of then/catch consuming above promise using async await

// Async/await is a syntactic sugar built on top of promises, making asynchronous code look synchronous.
// It allows you to write asynchronous code in a more readable and maintainable way.
// Async functions always return a promise, and the await keyword can only be used inside an async function.
// Await pauses the execution of the async function until the promise is resolved or rejected, making it easier to work with asynchronous code.



async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()




// -----------------REAL Example--------------------------


// get data using fetch method
// fetch API is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server.
// It is used to make HTTP requests to a server and handle the response.



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()       //Convert data in JSON from string format will take time so we use await here
        console.log(data);
    } 
    catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()



// Same using then/catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (response) => {return response.json()})
// .then( (data) => console.log(data))
// .catch( (error) => console.log(error))


// ********** MUST READ: Click to Know More *************
// https://developer.mozilla.org/en-US/docs/Web/API/fetch