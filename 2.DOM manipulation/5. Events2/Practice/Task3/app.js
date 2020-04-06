// При нажатии на любой узел документа показать в элементе
// с id=tag имя тега нажатого элемента.

const p = document.querySelector('p');
p.innerHTML += '<span></span>';
const span = document.querySelector('span');


document.body.addEventListener("click", e => {
   span.innerText = " " + e.target.tagName.toLowerCase();
});