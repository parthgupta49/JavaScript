const balance = 300

console.log(typeof balance.toFixed(2)); // this will gonna fix 2 digits for the decimal after the number
// returns string
const otherNumber = 1123.8966

console.log(otherNumber.toPrecision(3)); 
// The toPrecision() method of Number values returns a string representing this number to the specified precision.
// the argument which we are gonna give to this function means that only that many number will be given priority and this function then will try to give the precise value for that many number which are specified


const hundreds = 1000000
console.log(typeof hundreds.toLocaleString('en-IN')); // to add commas to make the number more readible. By default it is of US Standard

const str = "PArth"
console.log(str.toLocaleString()); // will give the same string if string is passed to this function

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
// console.log(number.toLocaleString(["ban", "id"]));












// ####################### Maths ######################

// console.log(Math);

// console.log(Math.abs(-4))
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.sqrt(10).toPrecision(4));

// console.log(Math.min(53,32,234,34));
// console.log(Math.max(53,32,234,34));

// console.log(Math.random()); // by default from 0 to 1
// console.log((Math.random()*10) + 1); // i have added 1 over here to avoid getting 0

const min = 100
const max = 200

// console.log(Math.floor((Math.random()*(max-min + 1))+min)) 
// console.log();