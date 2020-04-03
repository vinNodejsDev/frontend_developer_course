const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');


const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));

div.classList.add('article', 'custom');
div.classList.remove('article')
// console.log(div.classList);

// div.classList.toggle('classname') - delete if there is class and add if not
// console.dir(link)
// console.log(lin k.href);
//
// div.setAttribute("id", "myId");
// div.getAttribute("id");
// div.hasAttribute("id");

const title = document.querySelector('h1');
// title.innerHTML = "<span>Text</span>";
// title.textContent = "<span>Text</span>";

// title.appendChild('<span>Child</span>'); //Node only
// title.insertAdjacentHTML('beforebegin', '<h2>title</h2>'); // paste str

//Почему небезопасно использовать innerHTML
// title.innerHTML += '<span>TEXT</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>TEXT2</span>';
// span.textContent = 'feferfer';

// Create tag
const span = document.createElement('span');
span.textContent = ' span created by createElement';
span.classList.add('myClass');
console.log(span);
title.appendChild(span);

// div.appendChild(span)

// Add fragment
const fragment = document.createDocumentFragment();
const colors = ["black", "red", "yellow"];
colors.forEach((color) => {
    const item = document.createElement('div');
    item.style.background = color;
    item.classList.add(`bg-${color}`);
    item.textContent = color;
    fragment.appendChild(item);
});

document.body.appendChild(fragment);


// Remove elements
// title.remove();
title.parentElement.removeChild(title);