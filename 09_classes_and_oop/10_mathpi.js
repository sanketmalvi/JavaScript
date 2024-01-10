const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);



const cars = {
    name: "Thar",
    price: "20 lakh",
    isavailable: true
}
// console.log(Object.getOwnPropertyDescriptor(cars, 'name'));


//Changing properties
// Object.defineProperty(cars, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(cars, 'name'));

// _________________________________________________________



const heros = {
    name: "Spiderman",
    power : "sling",
    isavailable: true,

    Teammate: function(){
        console.log('Ironmen');
    }
}
// console.log(Object.getOwnPropertyDescriptor(heros, 'name'));


Object.defineProperty(heros, 'name', {
        // writable: false,
        enumerable: false
    })
    console.log(Object.getOwnPropertyDescriptor(heros, 'name'));


for (let [key, value] of Object.entries(heros)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}
