// ES6
// Class is a blueprint for creating objects 

class Human {
    // Properties
    age = 15;   //public
    weight = 50;
    #height = 5.5; //private

    // Behavior
    walk() {   //this is a method
        console.log("Walking");
    }
    running() {
        console.log("Running", this.#height);
    }   
}

let obj = new Human(); // creating an object of Human class
console.log(obj.age); // 15
console.log(obj.weight); // 50

// console.log(obj.#height); // Error: Private field '#height' must be declared in an enclosing class

obj.walk(); // Walking

// ------------------------------




// constructor is a special method for creating and initializing an object created with a class.

class User{
    constructor(userName, email, password) {  
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    } 

    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }

}

const result = new User("sanket", "sanket@example.com", "123")
console.log(result);

console.log(result.encryptPassword()); // 123abc

console.log(result.changeUsername()); // SANKET




// Behind the scene:

function User(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}Four`
}
User.prototype.changeUsername = function () {
    return `${this.userName.toUpperCase()}`
}

const result2 = new User("thanos", "thanos@metaverse.com", "12ka")
console.log(result2);

console.log(result2.encryptPassword());
console.log(result2.changeUsername());

