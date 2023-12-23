// forin loop

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
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}




// On Array

const programming =["JS","PY","JS","CPP"]

for (const key in programming) {
    // console.log(programming[key]);    
    }



// On Map

const map = new Map()
map.set('state', "MP")
map.set('In', "India")                   //Map is not iterable
map.set('USA', "AMerica")

for (const key in map) {
//    console.log(key);
}