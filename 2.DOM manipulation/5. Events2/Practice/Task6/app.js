const menuItems = document.querySelectorAll(".dropdown-menu");
const menu = document.querySelector(".menu");

menu.addEventListener("click", e => {
    menuItems.forEach(item => {
        item.className = 'dropdown-menu';
        item.classList.add('d-none');
        if (e.target.nextElementSibling === item) {
            item.classList.toggle('d-none');
        }
    });
});
