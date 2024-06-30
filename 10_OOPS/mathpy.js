// const des = Object.getOwnPropertyDescriptor(Math,'PI')
//  this function will provide the internal details about certain property which is not present in the Object prototype chain (we can inspect element and can see that this certain static method is not available for us in the Object.prototype)

// console.log(des);

// console.log(Math.PI);

// const coffee = Object.create()
// console.log(coffee);

const coffee = {
    name : 'starbucks coffee',
    price : 300,
    isAvailable : true,
    order : function(){
        console.log('coffee is not being prepared ');
    }
}

// console.log(coffee);
// console.log(Object.getOwnPropertyDescriptor(coffee,'name'));

Object.defineProperty(coffee,'name',{
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(coffee,'name'));

// coffee.price = 350
// console.log(coffee);

// coffee.name = "mcdonalds coffee"
// console.log(coffee.name);

// for (const [key,value] of Object.entries(coffee)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }



// console.log(Math.PI);
// Math.PI = 5
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

const myObj = {
    name : "starbucks coffee",
    price : 300
}

// for (const [key,value] of Object.entries(myObj)) {
//     console.log(`${key} : ${value}`);
// }
// console.log('After');
Object.defineProperty(myObj,'name',{
    // enumerable: false,
    writable : false       
})

myObj.name = "hello"
myObj.price = 1000
// for (const [key,value] of Object.entries(myObj)) {
//     console.log(`${key} : ${value}`);
// }