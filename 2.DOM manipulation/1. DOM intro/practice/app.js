const head = document.querySelector('head');
console.log(head);

const body = document.querySelector('body');
console.log(body);

const children = document.querySelector('body').children;
console.log(children);

const firstDiv = document.getElementsByTagName('div');
console.log(firstDiv[0].children);

const someElems = Array.from(firstDiv[0].children).slice(1, -1);
console.log(someElems);