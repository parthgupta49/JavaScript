let a = 12;

// function coffee() {
//     let a = 57
//     console.log("DB CONNECTED",a);
// }
// coffee()
/* 
    Need for IIFE ( Immediately Invoked Function Expression ):
    In JavaScript, variables declared with let and const have block scope, which means they are limited to the block (enclosed by curly braces) in which they are defined. Function declarations also create their own scope.

    The use of an IIFE (Immediately Invoked Function Expression) in this context might seem unnecessary with modern JavaScript and the availability of block-scoped variables using let and const. However, there are a few historical reasons and use cases where IIFE was more commonly used:

    Encapsulation: Before block-scoped variables (let and const) were introduced in ES6, the only way to create a new scope was by using a function. Developers often used IIFE to encapsulate variables, preventing them from polluting the global scope.
*/

(function chai() {
    let a = 24
    console.log("DB CONNECTED", a);
})();

(
    (name) => {
        console.log("DB CONNECTED", name);
    }
)("Parth")



