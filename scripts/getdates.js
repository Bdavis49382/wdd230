function updateYear() {
    const year = new Date().getFullYear();
    document.getElementById("currentYear").textContent = year;
}

function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = `Last Modified: ${lastModified}`;
}


updateYear();
updateLastModified();