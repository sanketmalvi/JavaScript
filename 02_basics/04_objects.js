// Declared as constructor

const tinderUser = new Object()                //Singleton Object

// const tinderUser = {}                           //NON Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);
  

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
const obj3 = {6: "a", 7: "b"}

const obj4 = {obj1, obj2}  // It will add object in object

const obj5 = Object.assign({}, obj1, obj2)  //Add all key-value pair in single object  

console.log("obj4", obj4);
console.log("obj5", obj5);

//Copy all the parameters of obj1 & obj2 in target object i.e obj5, but when do not add empty object then all values will goes in obj1.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Best Way  
const obj6 = {...obj1, ...obj2, ...obj4}         //Spread Operator
console.log('obj6',obj6);



const obj8 = obj2; // 
console.log(obj8); //Output: {3: "a", 4: "b"}
// It will create a reference of obj2 in obj8, so if we change the value of obj8 then it will also change the value of obj2


// Object clonning using spread operator
const obj7 = {...obj1}  // It will create a new object and copy all the values of obj1 in it

// check
obj7[1] = "c"
console.log(obj1); //Output: {1: "a", 2: "b"}
console.log(obj7); //Output: {1: "c", 2: "b"}


// +++++++++++++++++++++++++  IMPORTANT  +++++++++++++++++++++++++++++++


// console.log(tinderUser);

console.log(Object.keys(tinderUser));              //Take all the keys in Array
console.log(Object.values(tinderUser));            //Take all the values in Array


console.log(Object.entries(tinderUser));      //Returns array of key/values of Each Object


console.log(tinderUser.hasOwnProperty('name'));
// When checking the value in object and sometime its not exist in object so it can crash the code 
// To avoid this use the above method






// ++++++++++++++++++++++++ OBJECTS DeStructuring ++++++++++++++++++++++++++++



const course = {
    coursename: "JS Advance",
    price: "999",
    CourseInstructor: "Sam"
}


// One Way
// course.CourseInstructor


// Another Way : When we have to use same value again and again
const {CourseInstructor: Instructor} = course

// So here we can give short name to it and can use anywhere

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


// Tools to understand API data -  JsonFormatter