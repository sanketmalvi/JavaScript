function setUsername(username){
    // Complex DB Calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUsername(username)    //It is calling but instantly execution context is popped out and It is not holding anything
    
    setUsername.call(this, username)  //Using .call method and giving reference of (this) to hold the varibale.

    this.email = email
    this.password = password
}

const Avenger = new createUser('Thor', 'thor@example.com', "1234")
console.log(Avenger);