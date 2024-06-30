

// if - ( shorthand notation )
// const balance = 400
// if ( balance > 300 ) console.log("yes it is greater than 300");

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break
//     case 3:
//         console.log("Mar");
//         break;
//     default:
//         console.log("Default");
//         break;
// }


// truthy and falsy
// const userEmail = "p@gmail.ai"
// const userEmail = "0"
// console.log(typeof userEmail);

if (typeof userEmail) {
    console.log("got the email mate");
}
else
    console.log("Dont have it");


// falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0" , "false", " ", [], {}, function(){}


// how to check if an object is empty ?
// const obj = {
//     userName : "Steve",
//     password : "steve49",
//     aadhar : null

// }
// console.log(Object.keys(obj));
// if ( Object.keys(obj).length === 0 )
//     console.log("Object is Empty");
// else
//     console.log("its not empty");

// Nullish Coalescing Operator (??) : null undefined

// let val;
// val = null ?? 5 
// val = null ?? undefined ?? 10
// console.log('value : ', val);

// Ternary Operator
// const coffeePrice = 50
// coffeePrice<60 ? console.log('Buy it') : console.log('dont buy it');



