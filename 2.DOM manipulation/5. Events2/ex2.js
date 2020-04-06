const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrap');


// Всплытие
btn.addEventListener('click', e => {
    e.stopPropagation(); // не вызывается лисенер родителя
   console.log('click btn');
});

wrap.addEventListener("click", e => {
    console.log("click wrap")
}, {capture: true});

document.body.addEventListener(
"click",
e => {
    console.log("click body");
}, true
);
