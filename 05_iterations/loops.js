// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(index);
// }

// for (let i = 1 ; i <= 10; i++) {
//     console.log("table of",i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
// }

// let myArray = ["flash","superman","batman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index==5) {
//         console.log(`Oye 5 aagy`);
//         continue;
//     }
//     console.log('Value of i is',index);
// }


// let i = 1;
// while (i<10) {
//     console.log(`print maadi`);
//     i++;
// }

// for of loop

// const arr = [1,2,3,4,5]


// for (const num of arr) {
//     console.log(num);
// }

const names = ["Parth","Steve","David"]
// for (const name of names) {
//     console.log(name);
// }


// Objects are not iterable 
// forof loop wont work for the objects
// const myObject = {
//     game1 : "NFS",
//     game2 : "Spiderman"
// } 
// for (const [key,value] of myObject) {
//     console.log(key,":-",value);
// }



const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    java: "java"
}

// forin loop
// for the arrays the key will give the indexes starting form the zero 
// printing myObject using forin loop
for (const key in myObject) {
    console.log(myObject[key]);
}

const programming = ["js", "cpp", "java", "rb"]

// for (const key in programming) {
//     console.log(programming[key]);
// }


// forin loop can't be used for maps
// for (const [key,value] in map) {
//    console.log(key,value);
// }



// forEach loop
// programming.forEach((item) => {
//     console.log(item);
// })

// This can be done in this way as well
// function printMe(item) {
//     console.log(item);
// }

// programming.forEach(printMe)
// for each does not contain only one item instead for every time it iterates through the array 
// it has item, index, and array as well
// programming.forEach( (item,index,arr) => {
// console.log(item,index,arr);
// } )

// const myCoding = [
//     { languageName: "java", languageFileName: "java" },
//     { languageName: "javascript", languageFileName: "js" },
//     { languageName: "python", languageFileName: "py" }
// ]

// myCoding.forEach((item) => {
//     console.log(item.languageFileName);
// })