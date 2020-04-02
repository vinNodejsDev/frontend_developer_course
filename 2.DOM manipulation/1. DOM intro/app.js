const div = document.querySelector('div');
console.dir(div);

const titles = document.querySelectorAll('h1');
const h1 = document.getElementsByTagName('h1');
// console.dir(titles);
// console.log(Array.from(titles));

console.log([...titles]);
console.dir(h1);