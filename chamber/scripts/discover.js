
const lastVisited = Number(localStorage.getItem("lastVisited"));
const date = new Date();
const lastVisitedMessage = document.getElementById("last-visited-message");
const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;

if (!lastVisited) {
    lastVisitedMessage.textContent = "Welcome! Let us know if you have any questions.";
}
else if (date - lastVisited < DAY_IN_MILLIS) {
    lastVisitedMessage.textContent = "Back so soon! Awesome!"
}
else {
    lastVisitedMessage.textContent = `You last visited ${Math.floor((date - lastVisited)/ DAY_IN_MILLIS)}`
}

localStorage.setItem("lastVisited",date.getTime());