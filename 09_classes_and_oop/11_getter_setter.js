
// Getter and Setter
class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password() {  
        return `${this._password} lmnop`       
    }

    set password(value){
        this._password = value
    }
}

const jack = new User("jack@ai", "abcd")
console.log(jack.password);