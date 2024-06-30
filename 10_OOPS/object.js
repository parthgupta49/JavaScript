function hello(str) {
    this.str = str
    return 'hello ' + str
}
// hello.power = 5 
// console.log(hello("steve"))
// console.log(hello.power);
// console.log(typeof hello.power);
// console.log(hello.prototype);
// console.log(hello);
// console.log(typeof hello);

function createUser(username,score) {
    this.username = username
    this.score = score
    this.increment2 = function(){
        this.score = this.score + 2
        return this.score
    }
}

createUser.prototype.increment = function(){
    return this.score++;
}

createUser.prototype.printMe = function(){
    console.log('score is',this.score);
}

const coffee = new createUser("coffee",250)
const tea = new createUser("tea",25)
tea.increment()
console.log(tea.score);
// tea.printMe()
// coffee.increment2(5)
// console.log(coffee.score);

coffee.printMe()