const user = {                             //object literal
    username: "jack",
    loginCount: 8,

    getUserDetails: function() {
        // console.log("Got user Details from Database");
        // console.log(`UserName: ${this.username}`);     
        console.log(this);         //this keyword is use to refer current context
    }
}
// console.log(user.loginCount);
console.log(user.getUserDetails());

// console.log(this);  // {}


// -------------------------------------------------------


// Constructor Function

function User (userName, logincount, isloggedin) {
    this.username = userName;
    this.loginCount = logincount;
    this.isLoggedIn = isloggedin;

    this.greetings = ( ()=> console.log(`Hello ${this.username}`))

    return this
}

// const userOne = User("sanket", 5, true)
// const userTwo = User("Jack", 4, false)
// console.log(userOne);

// In this case value of userTwo is overwrite in userOne

// To avoid prblms use (new) keyword

const userOne = new User("sanket", 5, true)
const userTwo = new User("Jack", 4, false)
console.log(userOne);




// new 

/*  Step1: Whenever using new keyword then very first creted a empty object i.e. instance   

    Step2: Constructor function is called using new keyword that will pack all the arguments and passed it.

    Step3: All the arguments injected in *this* keyword

*/