// ES6

// class User{
//     constructor(userName, email, password) {
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     } 

//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }

// }

// const result = new User("sanket", "sanket@example.com", "123")
// console.log(result);

// console.log(result.encryptPassword());

// console.log(result.changeUsername());




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

