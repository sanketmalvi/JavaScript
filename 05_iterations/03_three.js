// for of loop

// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]


// On ARRAY 
const arr = [1, 2, 3, 3, 5, 6]

for (const num of arr) {
    // console.log(num);
}


// On String
const greetings = "Hello welcome"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



// Maps
// Same like objects but it has unique values and remember the original insertion order of the keys

const map = new Map()
map.set('state', "MP")
map.set('In', "India")
map.set('USA', "AMerica")

// console.log(map);



for (const [key, value] of map) {
    // console.log(key, '-', value);
}




// On Objects
const myObject = {
    'game1' : 'GTA',
    'game2' : 'NFS'
}
// for (const [key, value] of myObject) {        //Object is not iterable using forof
//     console.log(key, '-', value);
// }



