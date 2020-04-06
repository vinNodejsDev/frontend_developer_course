// При нажатии на кнопку btn-generate добавлять в список ul элемент списка
// Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const btnGen = document.querySelector('#btn-generate');
const ul = document.querySelector('ul');

btnGen.addEventListener("click", e => {
   const li = document.createElement('li');
   li.innerText = `Item ${ul.children.length+1}`;
   ul.appendChild(li);
});