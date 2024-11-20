// for of loop

// Works With: Arrays, strings, sets, maps, NodeLists, and other iterable objects.
// What It Iterates: The values of the iterable.

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
map.set('USA', "America")

console.log(map);



for (const [key, value] of map) {        //Destructuring of array
    console.log(key, '-', value);
}




// On Objects
const myObject = {
    'game1' : 'GTA',
    'game2' : 'NFS'
}
// for (const [key, value] of myObject) {        //Object is not iterable using forof
//     console.log(key, '-', value);
// }




const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

    for(const item of menu) console.log(item);
// =====================


    for(const item of menu.entries()) {
        console.log(`${item[0] + 1}: ${item[1]}`);
        // console.log(`${item}`);
    }
// ------------------


    