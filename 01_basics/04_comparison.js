// Same data type both side...

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// Different data type....(it makes prblm in conversion)

console.log("2" > 1);
console.log("02" > 1);
console.log("2" < true);


// Avoid this type of conversion....it makes u confused

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);

