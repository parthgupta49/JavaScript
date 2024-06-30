// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(""<1);                   // => true   
// console.log("">1);                   // => false as "" is 0 when converted into a number 
// console.log("2">1);               // => true   
// console.log("-2">1);                   // => false as -2 is < 1
// console.log("steve">1);       // => always false   

// console.log(null < 0);
// console.log(null > 0);
// console.log(null <= 0);
// console.log(null == 0);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);

// === (checks datatype as well)

// console.log("2"==2); // true
// console.log("2"===2); // false as datatype is different




/* 
equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0
THts why null>=0  => true and  null> 0 => false
*/ 

