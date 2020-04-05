// 1. Найти параграф и получить его текстовое содержимое (только текст!)

const p = document.querySelector('p');
const text = p.innerText;
// console.log(text);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает
// информацию (в виде объекта) о типе узла, об имени узла
// и о количестве дочерних узлов (если детей нет - 0).

function getInfo(node) {
    return {
        type: node.nodeType,
        name: node.nodeName,
        children: node.children.length
    }
}

// console.dir(getInfo(p));


// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
//     getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

function getTextFromUl(ul) {
    const resArr = [];
    const children = Array.from(ul.children);
    // console.log(children)
    children.forEach((child) => resArr.push(child.innerText));
    return resArr
}

const ul = document.querySelector('ul');
// console.log(getTextFromUl(ul));


// 4. В параграфе заменить все дочерние текстовые узлы на “-text-”
// (вложенные теги должны остаться). Конечный результат:
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
// Array.from(p.children).forEach((child) => child.outerHTML = '-text-')

const p4 = document.querySelector('p');
const [...childNodes] = p4.childNodes;

childNodes.forEach(node => {
   if (node.nodeType === 3) {
       node.textContent = '-text-'
   }
});
// console.log(childNodes);

// 5. Найти в коде список ul и добавить класс “list”
const ul5 = document.querySelector('ul');
ul5.classList += 'list';

// 6. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const nextElem = ul5.nextElementSibling;
nextElem.setAttribute("id", "link");
// console.log(nextElem);

// 7. На li через один (начиная с самого первого) установить класс “item”
const li7 = ul.children;
// console.log(li7);
for (let i = 0; i < li7.length; i++) {
    if (i%2===0) {
        li7[i].className = 'item';
    }
    // console.log(li7[i].className)
}

// 8. На все ссылки в примере установить класс “custom-link”
const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.className = "custom-link";
    console.log(link.className);
});
// console.log(links);

// 9.  Не используя innerHTML, добавить в список несколько li
// с классом ‘new-item’ и текстом ‘item’ + номер li:

// console.log(ul.children);
let taskValue = 4;
let ulLength = ul.children.length;
// console.log(ulLength);

for (let i = 0; i < taskValue; i++) {
    let li = document.createElement('li');
    li.className = 'new-item';
    li.innerText = `item ${i + 1 + ulLength}`;
    ul.appendChild(li);
}
// console.log(ul.children);

// 10. В каждую ссылку, которая находятся внутри списка ul
// добавить по тегу strong (в каждую ссылку один - strong).
const ulLinks = [...document.querySelectorAll('a')]
    .filter((link) => link.parentElement.tagName==='LI');

ulLinks.forEach((link) => {
    console.log(link.innerText)
    const strongElem = document.createElement('strong');
    strongElem.innerText = link.innerText;
    link.innerText = '';
    link.appendChild(strongElem);
});

// console.log(ulLinks);

// 11. В начало документа (в начало body) добавить картинку img с атрибутами src
// и alt (текст придумайте сами). В src добавьте реальный url к картинке.
// Для создания элемента используйте метод createElement.

// const img = document.createElement('img');
// img.setAttribute('src', 'https://habrastorage.org/webt/xc/4n/a1/xc4na1sca8xlufsjkj3yyo1z9m8.jpeg')
// img.setAttribute('alt', 'nodejs picture');
// // console.log(img);
// document.querySelector('body').insertBefore(img, document.querySelector('div'));




// 12. Найти на странице элемент mark, добавить в конец содержимого
// текст “green” и на элемент установить класс green

const mark = document.querySelector('mark');
mark.innerText += 'green';
mark.className = 'green';
// console.log(mark);

// 13. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const ul13 = [...ul.children];
ul13.reverse();
console.log(ul13[0])