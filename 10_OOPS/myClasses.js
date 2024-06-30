

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
    

//     encryptPassword(){
//         return this.password+'abc'
//     }

//     changeUserName(){
//         return this.username.toUpperCase()
//     }
// }

// let user1 = new User('coffee','coffee@gmail.com','12345')
// console.log(user1);
// console.log(
//     user1.encryptPassword(), user1.changeUserName()
// );

// traditionally the above thing was done like this : 
// function User(username,email,password) {
//     this.username = username
//     this.email = email
//     this.password = password
    
//     this.printMe = function(){
//         console.log('printed');
//     }
// }


// User.prototype.changeUserName = function(){
//     return this.username.toUpperCase()
// }
// User.prototype.encryptPassword = function(){
//     return this.password+'abc'
// }

// const user2 = new User('Steve','steve@gmail.com',1234)
// console.log(user2.changeUserName())
// console.log(user2.encryptPassword())
// user2.printMe()


