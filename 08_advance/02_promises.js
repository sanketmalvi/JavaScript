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
//     // console.log(user);
//     return user.username
// }).then( (username) =>{
//     // console.log(username);
// }).catch( (error)=>{                     //Behind the scene: then is connected with resolve
//     // console.log('ERROR: Something went Wrong');
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

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}
consumePromiseFive()




// -----------------REAL Example--------------------------

// get data using fetch method

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()       //Convert data in JSON from string format will take time so we use await here
//         console.log(data);
//     } 
//     catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()



// Same using then/catch

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {return response.json()})
.then( (data) => console.log(data))
.catch( (error) => console.log(error))


// ********** MUST READ: Click to Know More *************
// https://developer.mozilla.org/en-US/docs/Web/API/fetch