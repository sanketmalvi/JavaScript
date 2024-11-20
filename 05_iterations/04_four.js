// forin loop

// Works With: Objects and arrays, but mainly for objects.
// What It Iterates: The keys (property names or indices) of the object or array.

// This loop is iterable for object, Arrays, NOT for maps

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }



// On objecct
const myObject = {
    js: 'JAVASCRIPT',
    cpp: 'C++',
    rb : "ruby"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}




// On Array

const programming =["JS","PY","JS","CPP"]

for (const key in programming) {             //In array key will be the index numbers
    console.log(programming[key]);
    // console.log(key);                      // 0 1 2 3
    }



// On Map

const map = new Map()
map.set('state', "MP")
map.set('In', "India")                   //Map is not iterable
map.set('USA', "AMerica")

for (const key in map) {
   console.log(key);
}