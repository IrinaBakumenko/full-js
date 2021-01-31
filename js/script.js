'use strict';

// const num = new Number(3);
// console.log(num);

// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`)
    }
    exit() {
        console.log(`User ${this.name} left`)
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 18);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);