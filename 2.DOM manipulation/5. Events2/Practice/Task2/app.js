// При наведении указателя мыши на "btn-msg", кнопка становится красной;
// когда указатель мыши покидает кнопку, она становится прежнего цвета.
//     Цвет менять можно через добавление класса.

const btn = document.querySelector('#btn-msg');

btn.addEventListener("mouseover", e => {
   btn.setAttribute("style", "background-color:red; font-size: 25px");
});

btn.addEventListener("mouseout", e => {
   btn.removeAttribute("style");
});