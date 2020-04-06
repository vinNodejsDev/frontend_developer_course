// По нажатию на кнопку "btn-msg" должен появиться алерт
// с тем текстом который находится в атрибуте data-text у кнопки.
const btn = document.querySelector('#btn-msg');
// console.log(btn.getAttribute('data-text'));

btn.addEventListener("click", e => {
    const message = btn.getAttribute('data-text');
    console.log(message);
});