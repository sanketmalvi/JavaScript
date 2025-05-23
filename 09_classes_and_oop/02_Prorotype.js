let  myname = 'Sanket'
let mywork = 'Developer'

console.log(myname.trueLength); //

// ---------- ------------------------
  

let myHeros = ['thor', 'spiderman' ]

let heroPower = {                //object
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is: ${this.spiderman} `);
    }
}

// Adding functionality to all the object i.e. Hulk
Object.prototype.Hulk = () => {
    console.log(`Hulk is present in all the objects`);
}

heroPower.Hulk()      //Access to object successfully
myHeros.Hulk()           //Access to arrays successfully



// Here, we added functionality to objects as a prototype and as we know all the strings, arrays and functions is eventually a object So that functionality can access by all the strings, arrays and functions.


// -------------------------------------



// Now we will adding functionality to Array and will check that it can acccess by Object and strings or not.

Array.prototype.HiJohn = ()=> console.log(`Hi there`);

// heroPower.HiJohn()         //Dont get access to objects
myHeros.HiJohn()              //Get access to Arrays


// ________________________________________________________

// inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailble: false
}

const TASupport = {
    makeAssignment: "JS Task",
    fulltime: true,
    __proto__: TeachingSupport       //Get Access of properties of object TeachingSupport 
}

Teacher.__proto__ = TASupport

// Modern SYNTAX
Object.setPrototypeOf(Teacher, TeachingSupport)


// ____________________________________________________________________
  
let game = "Snooker     "

String.prototype.trueLength = function(){     //Adding functionality to String
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

game.trueLength() 

"sanket".trueLength() 
console.log(game); // Snooker