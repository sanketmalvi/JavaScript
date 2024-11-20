const coding = ["java", "python", "c++", "ruby"]

const values = coding.forEach( (items) => {
    // console.log(items);
    return items                                 //forEach dont return anything
})

console.log(values);     //undefined





/* FILTERS:

-: Used to filter out elements from an array based on a condition.

-: Returns a new array containing only the elements that satisfy the given condition (i.e., where the condition is true).

-: The length of the returned array may be smaller than the original array because some elements may be filtered out.
*/

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let newNums = myNums.filter( (num) => num > 4)   // Return automatically when use implicit
console.log(newNums);


let newNums2 = myNums.filter( (num) => {
    return num > 7                      // When started a scope Then need to write return 
})    
console.log(newNums2);




// same operation using forEach

const newNums3 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums3.push(num)
    }
})

console.log(newNums3);



// ++++++++++++++++++++++++++++

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-Fiction', publish: 2001, edition: 2001},
    {title: 'Book three', genre: 'History', publish: 2005, edition: 2014},
    {title: 'Book four', genre: 'Fiction', publish: 1995, edition: 2006},
    {title: 'Book five', genre: 'Science    ', publish: 1999, edition: 2003},
    {title: 'Book six', genre: 'History', publish: 1999, edition: 2004},
    {title: 'Book Seven', genre: 'Fiction', publish: 1981, edition: 2004},  
    {title: 'Book eight', genre: 'Fiction', publish: 2000, edition: 2005},
    {title: 'Book nine', genre: 'Fiction', publish: 1981, edition: 2004}
];

// const userBooks = books.filter( (bks) => bks.genre === 'History')
// console.log(userBooks);


// const userBooks = books.filter( (bks) => {
//     return bks.publish >= 2000 && bks.genre === 'History' })
// console.log(userBooks);