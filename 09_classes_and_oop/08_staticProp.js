class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sanket = new User ("sanket")
// console.log(sanket.createId());



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const student = new Teacher("palak", "palak@example.com")
student.logMe()

student.createId()