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

const darkModeButton = document.getElementById("dark-mode-button");
darkModeButton.addEventListener('click', () => {
    document.getElementById('body').classList.toggle('bg-dark');
    darkModeButton.textContent = darkModeButton.textContent == 'Dark Mode' ? 'Light Mode' : 'Dark Mode'

    // If needed later, it can also manually change all the variables
    // document.documentElement.style.setProperty('--light','black')
    // document.documentElement.style.setProperty('--dark','white')
})

updateYear();
updateLastModified();