let myName = "Parth     "
let yourName = "       SteveSmith"
// myName.prototype.trueLength = function(){
//     return `True Length of the string : ${this.trim()}`
// }

// console.log(myName.trueLength());


String.prototype.trueLength = function(){
    return `True Length of the string : ${this.trim().length}`
}

// console.log(myName.trueLength())
// console.log(yourName.trueLength())


let myObj = {
    username : "Steve"
}
// console.log(myObj.trueLength());

// inheritance
// This was the traditional way of using inheritance concept however there is a modern way of doing the same as well
const User = {
    name : "Coffee",
    email : "coffee@google.com"
}
const Teacher = {
    makeVideo :  true
}
const TeachingSupport = {
    isAvailable : false,
    state : "burnout"
}

const TASupport = {
    makeAssignment : "js Assignment",
    fullTime : true,
    __proto__ : TeachingSupport  // way of providing the inheritance 
}

// console.log(TASupport.state);

Teacher.__proto__ = User // another way of giving the inheritance like this 
// However the modern way of doing the same is the following :
// Object.setPrototypeOf(Teacher,User) // this is how we set its protoytype
console.log(Teacher.email);
