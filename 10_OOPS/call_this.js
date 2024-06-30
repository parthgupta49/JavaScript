
// function setUserName(username){
//     this.username = username
// }

// function createUser(username,email,password){
//     setUserName.call(this,username)
//     this.email = email
//     this.password = password
// }

// const user1 = new createUser('Steve','steve@google.com',12345);
// console.log(user1);


// function outerFunction(x) {
//     const myVar = "Steve"
//     function innerFunction() {
//         console.log(myVar);
//     }
//     // innerFunction();
//     function innerFunction2(params) {
        
//     }
// }
// outerFunction()



// function outerFun(x) {
//     return function(y){
//         return x + y;
//     }
// }

// const add5 = outerFun(5);
// const add10 = outerFun(10);

// console.log(add5(10));

// const str = "    Parth  "
// const str2 = "    Parth  "
// String.prototype.trueLength = function () {
//     return this.trim().length
// }
// console.log(str.trueLength());
// console.log(str2.trueLength());

// Array.prototype.myFunction = function () {
//     console.log('my Functiom');
// }

// const myArray = []
// myArray.myFunction()

// function myName() {
//     console.log(str);
// }


// myName()
// let str = 2;

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12
  


// function outerFunction(x) {
    
//     return function(y){
//         return x+y;
//     }
// }

// const add5 = outerFunction(5);
// const add10 = outerFunction(10);

// let variable = add10(100)
// console.log(variable);

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//       console.log('hello mate !!');
//     }
//     console.log("hello mate2 !!");
//     return displayName;
//   }
  
// const myFunc = makeFunc();
// // myFunc();

// console.log(myFunc());
  
