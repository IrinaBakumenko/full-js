'use strict';

// const now = new Date('2020-05-01');
// console.log(now);

// const now = new Date(2020, 5, 1, 20);
// console.log(now);

// const now = new Date(0);
// console.log(now);

// const now = new Date(-999999999999);
// console.log(now);

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

const now = new Date('2020-05-01');
// new Date.parse('2020-05-01');
// console.log(now.setHours(18, 40));
// console.log(now.setHours(40));
// console.log(now.setHours(40));
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);