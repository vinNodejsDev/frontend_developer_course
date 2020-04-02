// 1. Создать функцию, которая принимает два элемента. Функция проверяет,
// является ли первый элемент родителем для второго:
//     isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

const span = document.querySelector('mark');
const spanParent = document.querySelector('div');


function isParent(parent, child) {
    let currentParent = child.parentElement;
    let isParent = false;
        while (currentParent) {
            isParent = parent === currentParent;
            if (isParent) {
                currentParent = null
            } else {
                currentParent = currentParent.parentElement;
            }
        }
    return isParent;
}

// console.log(isParent(spanParent, span));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const links = Array.from(document.querySelectorAll('a'));
const ul = document.querySelector('ul');
// links.map((link) => console.log(link, link.parentElement, isParent(ul, link)));
const pureLinks = links.filter((link) => !isParent(ul, link)).map((link) => console.log(link.parentElement));
console.log(pureLinks);




// 3. Найти элемент, который находится перед и после списка ul
console.log(ul.nextSibling)
console.log(ul.previousSibling)
