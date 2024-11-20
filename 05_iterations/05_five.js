/* forEach

Purpose: A method used to iterate over the elements of an array, executing a provided function once for each array element.

Works With: Arrays only.

What It Iterates: The values of the array.

Cannot Break Out: Unlike for...of or for...in, you cannot use break, continue, or return in forEach() to interrupt the iteration.

array.forEach(element => {
});
*/


const coding = ["java", "python", "c++", "ruby"]

coding.forEach( function (item) {
    console.log(item);
})


// or

// coding.forEach( (item) => console.log(item))


// ===================

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)




coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})




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

console.log(typeof myCoding);


myCoding.forEach( (item) => {
    console.log(item.fileExtension);
})






//Example of forof, forin, foreach

const books = [
    {
      title: 'Book 1',
      author: 'Author A',
      details: {
        pages: 300,
        publisher: 'Publisher X'
      },
      reviews: ['Great book!', 'Loved it!', 'Could be better.']
    },
    {
      title: 'Book 2',
      author: 'Author B',
      details: {
        pages: 250,
        publisher: 'Publisher Y'
      },
      reviews: ['Not my taste.', 'Fantastic read!']
    }
  ];
  
  for (const book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
  
    console.log('Details:');
    for (const key in book.details) {
      console.log(`${key}: ${book.details[key]}`);
    }
  
    console.log('Reviews:');
    book.reviews.forEach(review => {
      console.log(`- ${review}`);
    });
    console.log('---------------------------------');
  }
  