
const button = document.getElementById('menu-button');
const nav = document.querySelector("nav");
button.addEventListener('click', () => {
    button.classList.toggle("open");
    nav.classList.toggle("open")
})