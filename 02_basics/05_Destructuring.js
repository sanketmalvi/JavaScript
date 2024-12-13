// DeStructuring Arrays

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}


const arr = [2, 3, 4]

const [x, y, z] = arr;
console.log(arr);   // [2, 3, 4]

// Switching variables
let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);


const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);



// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;         // 2 [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j);            // 2 5


// default values
const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r);

// -----------------------------------------------



// DeStructuring Objects

const restaurants = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };
  
  
  const {name, openingHours, categories} = restaurants;
  
  console.log(name, openingHours, categories);

 
  const {menu = [], starterMenu: starters = [] } = restaurants;
  console.log(menu, starters);




//   Mutating variables
let a = 111;
let b = 222;
const obj = { a:23, v:7, c:14};

({a, b} = obj);
console.log(a, b);


// nested
const { fri: {open, close} } = openingHours;
console.log(open, close);


//______________________Rest Operators Example___________________________

const [aa, bb, ...others] = [1, 2, 3, 4, 5];
console.log(aa, bb, others);


const { id, names, ...rest } = { id: 1, name: "John", age: 30, city: "New York" };
console.log(id); // 1
console.log(names); // "John"
console.log(rest); // { age: 30, city: "New York" } 
