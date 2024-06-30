// datatypes - 2types (primitive , non-primitive)
// how is it placed in memory and how it is accessed (call by value for primitive and call by reference for referenced types) thts how the bifurcation has been done as per official docs

// primitives - 7types
// string, number, Boolean, null (completely empty), undefined, symbol (for uniqueness), BigInt

// non primitives (referenced type)
// Array , objects , Functions


const score = 100;
const scoreValue = 100.3; // this is also number no special datatype for this , like float


const temp = null
// console.table([temp,typeof(temp)])  

let userEmail; //undefined
// console.table([userEmail,typeof(userEmail)]); // its value is undefined and datatype is undefined as well

const id = Symbol('123')
const anotherId = Symbol('123')
// console.table([id,anotherId,typeof id,typeof anotherId,id===anotherId])

// const BigInt = 233334734444442679423n; // now this will be treated as bigInt

// REferenced

const heroes = ["shakimaan","iron man ","loki"]

let myObj = {
    name:"Parth",
    age:19,
}

const myFun = function sum() {
    console.log("Hello world");
}

// console.table([typeof heroes,typeof myObj,typeof myFun])
/*
    0    │  'object'  │
│    1    │  'object'  │
│    2    │ 'function'
*/

// console.log(typeof BigInt);




