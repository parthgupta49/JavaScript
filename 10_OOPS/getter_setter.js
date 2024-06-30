class User {
    constructor(email){
        this.email = email
    }

    get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        this.password = value
    }
}

const user1 = new User ('steve@google.com')
user1.password('hello')
console.log(user1.password());