// for loop -Syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <=10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("Execute");
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} and Outer loop: ${i}`);   
    }
}


// Tables
for (let i = 1; i <= 10; i++) {
    // console.log(`Table no. : ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);   
    }
}




// Loops on Array
let myArray = ["bat", "cat", "rat"]

for (let index = 0; index < array.length; index++) {
    const element = myArray[index];
    // console.log(element);
}




// Break and Continue

// for (let index = 0; index <= 20; index++) {
//     if (index ==5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(`Value of i is ${index}`); 
// }


for (let index = 0; index <= 20; index++) {
    if (index ==5) {
        console.log("detected 5");
        continue           //It skips the condition one time
    }
    console.log(`Value of i is ${index}`); 
}

