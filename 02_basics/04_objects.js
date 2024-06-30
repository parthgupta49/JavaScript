// const faceBook = new Object()
// SingleTon Object


const faceBook = {
    id:"steve@49",
    name:"Parth",
    isLoggedIn:false,
}
// console.log(faceBook);

const regularUser= {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Parth",
            lastName:"Gupta"
        }
    }
}
// console.log(regularUser.fullName.userFullName);

const obj1 = {
    1:"a",
    2:"b",
}
const obj2 = {
    3:"x",
    4:"z",
}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// obj3 = {...obj1,...obj2}
// console.log(obj3);

const Users = [
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:1,
        email:"p@gmail.com"
    },
    
]

// console.log(Users[0].email); // now every indices will act as a entry point to the object 0th index refers to object 1 similarly 1st index refers to object2 and then we can use the dot opertor to access the particular object basically its properties and all that stuff
// console.log(faceBook);

// console.log(Object.keys(faceBook));
// console.log(Object.values(faceBook));
// console.log(Object.entries(faceBook));

console.log(faceBook.hasOwnProperty("isLoggedIn")); //this property exists in the object so this will give true


const course = {
    name : "javaScript",
    price:"9999",
    courseInstructor:"Steve"
}

// Destructuring of an object

// const {name} = course  // now i can directly print the name which i was using before as Object.name but now i can use it directly
const {name:couse_naam} = course // here i have given another name to my object which is couse_naam now i should refer this property of the object as course_naam to get its value  
console.log(couse_naam);

