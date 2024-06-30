// Object.create()
// Singleton

// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    "name Hai":"Parth Gupta",
    [mySymbol]:"Ye mera cheese hai",
    age:19,
    location:"Bangalore",
    email: "parth@google.com",
    isLoggedIn: false,
    lastLoginDays:["Mon","Tues"]
}

// console.log(JsUser["name Hai"]);


// console.log(typeof JsUser);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser["name Hai"]);

// console.log(JsUser[mySymbol]);

JsUser.email = "parth@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser) //now objects properties won't change at all
// JsUser.email = "parth@microsoft.com"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log('Hello JsUser');
// }
// JsUser.greeting2 = function(){
//     console.log(`Hello Js User ${this["name Hai"]}`);
// }

// console.log(JsUser.greeting); //[ Function (anonymous)]
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};

// person.name.first = "Steve"
// person["name"]["first"] = "Steve"
// console.log(person["name"]["first"]);

person.newFun = function(){
    console.log("hey");
    return 1
}

// console.log(person.newFun());


function Rectangle(len,bre) {
    this.length = len
    this.breadth = bre
  this.height = 212
    this.draw = ()=>{
      console.log('drawing');
    }
}

let recObject = new Rectangle(2,4);
recObject.draw();

recObject.newProp = 56

// console.log(recObject);
delete recObject.newProp
// console.log(Rectangle.constructor);

let newFun = new Function('length','breadth',`this.length = len
this.breadth = bre
this.height = 212
this.draw = ()=>{
  console.log('drawing');
}`)

// console.log(newFun(2,3));


// console.log(Rectangle.length);

let courses = [
  {no:1,name:"Java"},
  {no:2,name:"Python"}
]
let myObj = courses.find(obj=>obj.name === "Python"
)
// console.log(myObj);

let numbers = [1,2,-5,-23]

let filtered = numbers
.filter(value=>value>=0)
.map(num=>{value:num});

// console.log(filtered); 

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function sort(a,b) {
  return a - b;
}
stringArray.sort();
// console.log(stringArray);

numberArray.sort(sort)
// console.log(numberArray);

// numericStringArray.join();
numericStringArray.sort().sort(sort);
// console.log(numericStringArray);

// mixedNumericArray.join();  
mixedNumericArray.sort().sort(sort);

// console.log(mixedNumericArray); 

let myObj1 = [
  {value:"Parth"},
  {value:"Anisha"},
  {value:"Steve"}
    ]

// myObj1.sort((a,b)=>{return a.value-b.value})
myObj1.sort((a,b)=>{

  const nameA = a.value.toLowerCase()
  const nameB = b.value.toLowerCase()

  if(nameA<nameB){
    return -1
  }
  if(nameA>nameB)
    return 1
  return 0
});
// console.log('myobj looks like ',myObj1);

function sum() {
  let total = 0
  // console.log(arguments);
  for (const iterator of arguments) {
    total+=iterator
  }
  return total;

}

// rest operator ...
// variable size arguments 
// this will act like an array
function sum2(a,...args) {
  console.log(args);
}



let a = sum2(1,3,23,21);
// console.log(a);

// let newObj = {
//   '0':1,'1':3,'2':23
// };
// // console.log(newObj);
// let total = 0
// for (const value of newObj) {
//   total+=value
// }
// console.log(a);


