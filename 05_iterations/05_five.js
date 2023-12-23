// forEach

// array.forEach(element => {
    
// });


const coding = ["java", "python", "c++", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// })


// or

// coding.forEach( (item) => console.log(item))


// ===================

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)




// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })




// -------------------------------


const myCoding = [
    {
        language : "JAVA",
        fileExtension : ".java"
    },
    {
        language : "PYTHON",
        fileExtension : ".py"
    },
    {
        language : "JavaScript",
        fileExtension : ".js"
    }
]


myCoding.forEach( (item) => {
    console.log(item.fileExtension);
})