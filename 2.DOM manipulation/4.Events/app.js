const btn = document.querySelector('button');
// console.dir(btn);
//
// btn.onclick = function () {
//     console.log('click!');
// }

// универсальный метод навешивание обработчиков
// btn.addEventListener("click", function () {
//    console.log('click')
// });
// btn.addEventListener("click", function (e) {
//    console.log(e);
// });


// function clickHandler(e) {
//     e.preventDefault();
//     console.log(this);
//     console.log('click');
// }
//
// // prevent default
// const link = document.querySelector('a');
// link.addEventListener('click', clickHandler);
//
// // link.removeEventListener("click", clickHandler)
//
// // Можем использовать также функции стрелки
// btn.addEventListener("click", e => {
//     console.log(this);
//    console.log(e);
// });

const container = document.querySelector(".container");

btn.addEventListener("click", (e) => {
    const div = document.createElement("div");
    const nestedBtn = document.createElement('button');
    div.textContent = Math.random();
    nestedBtn.textContent = 'button';
    div.appendChild(nestedBtn);
    container.appendChild(div);
});

container.addEventListener("click", e => {
    console.dir(e.target);
    if (e.target.tagName === 'BUTTON') {
        console.log('Button clicked');
    }
});