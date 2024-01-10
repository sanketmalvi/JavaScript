class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)  //behind the scene Super Keyword is doing same like .call method and passing the reference of this.

        this.email = email
        this.password = password
    }

    newLecture(){
        console.log(`New lecture is added by ${this.username}`);
    }
}
const result = new Teacher("thanos", "thanos@metaverse.com", "12ka")
result.newLecture()

const result2 = new User("Hulk")
result2.logMe()


console.log(result === Teacher);  //false
console.log(result instanceof Teacher);  //true
console.log(result instanceof User);  //true