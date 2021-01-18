'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'pink';
// box.style.width = '500px';
const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'pink';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
// const text = document.createTextNode('some text');

div.classList.add('black');

// document.body.append(div);
// document.querySelector('.wrapper').append(div);

wrapper.append(div);
// wrapper.appendChild(div);


// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);


// circles[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');