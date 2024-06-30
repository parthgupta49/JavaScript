/*
function sayMyName() {
    console.log("My name is Parth");

}

// sayMyName()

function logInUserMessage(userFullName="steve") {
    if (!userFullName) {
        console.log("Please enter a username")
        return
    }
    return userFullName + " just logged in "
}

console.log(logInUserMessage("Parth"))
*/

// function capitalize(word) {
//     word = word.toLowerCase()
//     word = word[0].toUpperCase()+word.substring(1)
//     return word
// }


// console.log(capitalize("SAM"));

// <<<<<<< HEAD
const str = "50px"
// console.log(Number.parseInt(str,10));

// =======
// const str = "50px"
// console.log(Number.parseInt(str,10));


function sum(a,b) {
    // console.log(a+b);
}

const variable = sum(5,6)
// console.log(variable);

// ... rest and spread operator
function calculateCartPrice(var1,var2,...num) {
    return num
}

// console.log(calculateCartPrice(200,400,600,800));
// Now as per our function which we wrote var1 = 200 , var = 400 and the remaining stuff will go into the array

const user = {
    username : "steve",
    price : 199
}

function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// we can directly pass the object as well in the function argument

// handleObject({username:"Smith",price:299})

const myArray = [200,400,500,600]

function returnSecondValue(getArray) {
    // return getArray[1]
}

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([100,200,300]));
// >>>>>>> 7802cd11c56c8edafcdf5a3cb019fabc8156a116


// functions
// # function declaration
// function run() {
    
// }

// #function assignment/ expression
// 1. Named function
// let a = function nameA() {
    
// };
// 2. anonymous function
// let a = function(){

// }

// default parameters
// imp rule regarding default parameters which is 
// if in the following line i provided the default para to q then 
// it is mandatory for me to give the default para to all the parameteres coming here after and 
// its not a choice, its a rule and mandatory to provide
// function interest(p=1000,q,r) {
//     return p * q * r /100;
// }
// console.log(interest(1000,10,1 ));


// getter and setter function

let person = {
    firstname : "Parth",
    lastname : "Gupta",
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    },
    set fullName(name){
        if(typeof(name) !== String)
            throw new Error("Not a String")
        let splittedName = name.split(" ");
        this.firstname = splittedName[0]
        this.lastname = splittedName[1]
    }

}
try {
    person.fullName = 1
} catch (error) {
    console.log(""+error);
}
console.log(person.fullName);

