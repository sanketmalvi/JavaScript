// Using Define Property

// function User(email, password) {
//     this._email = email
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
// }
// const sanket = new User("sanket@ai", "asdf")
// console.log(sanket.email);



// ---------------------------------------------------------------------------

// Another approach: OBJECT Based 


const User = {
    _email: "s@ai",
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set(value){
        this._email = value
    }
}

console.log(User.email);


