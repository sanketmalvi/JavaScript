// const tinderUser = new Object()                //Singleton Object

const tinderUser = {}                           //NON Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);



// +++++++++++++++++++++++++++++++++++++++++++

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastname: "Jacob"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);



// +++++++++++++++++++++++++++++++++

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {6: "a", 7: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) 

//Copy all the parameters of obj1 & obj2 in target object i.e obj3, but when do not add empty object then all values will goes in obj1.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj3 = {...obj1, ...obj2, ...obj4}         //Spread Operator
// console.log(obj3);



// +++++++++++++++++++++++++  IMPORTANT  +++++++++++++++++++++++++++++++


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));              //Take all the keys in Array
// console.log(Object.values(tinderUser));            //Take all the values in Array

// console.log(Object.entries(tinderUser));         //Returns array of key/values of Each Object

// console.log(tinderUser.hasOwnProperty('name'));







// ++++++++++++++++++++++++ OBJECTS DeStructuring ++++++++++++++++++++++++++++

const course = {
    coursename: "JS Advance",
    price: "999",
    CourseInstructor: "Sam"
}


// course.CourseInstructor

const {CourseInstructor: Instructor} = course

console.log(Instructor);


// +++++++++++++++  JSON ++++++++++++++

// {
//     "name" : "abc",
//     "phone" : "55555555555",
//     "Address" : "xyz"
// }

[
    {},
    {},
    {}
]