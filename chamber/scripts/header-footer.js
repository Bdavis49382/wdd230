function updateYear() {
    const year = new Date().getFullYear();
    document.getElementById("currentYear").textContent = year;
}

function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = `Last Modified: ${lastModified}`;
}

const button = document.querySelector('.menu-button');
const nav = document.querySelector(".hamburger-menu");
button.addEventListener('click', () => {
    button.classList.toggle("open");
    nav.classList.toggle("open")
})

updateYear();
updateLastModified();