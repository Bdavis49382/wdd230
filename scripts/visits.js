function updateVisitCounter() {
    const visitCounter = document.getElementById("visits");
    let numVisits = Number(window.localStorage.getItem("numVisits") || 0) + 1;
    window.localStorage.setItem("numVisits",numVisits);
    visitCounter.textContent = numVisits > 1 ? numVisits : "Welcome! This is your first time visiting us!";
}

updateVisitCounter();