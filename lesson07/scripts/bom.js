function addListItem(inputElement,text) {
    // Create and set li
    const li = document.createElement('li');
    li.textContent = text;

    // Add delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click',() => {
        removeChapter(text);
        li.remove();
        inputElement.focus();
    });
    li.appendChild(deleteButton);

    // Clear Input Element
    inputElement.textContent = "";

    // Append to List
    const listElement = document.getElementById('list');
    listElement.appendChild(li);
}

function getChapters() {
    return JSON.parse(window.localStorage.getItem('chapters')) || [];
}

function addChapter(chapter) {
    const chapters = getChapters();
    chapters.push(chapter)
    window.localStorage.setItem('chapters',JSON.stringify(chapters))
}

function removeChapter(chapter) {
    window.localStorage.setItem('chapters', JSON.stringify(getChapters().filter(ch => ch !== chapter)))
}

const inputElement = document.getElementById('favchap');
const button = document.getElementById('submitbutton');

// Load list from storage
getChapters().forEach(chapter => addListItem(inputElement, chapter));

button.addEventListener('click',() => {

    if (inputElement.value == "") {
        inputElement.focus();
    }
    else {
        addListItem(inputElement,inputElement.value);
        addChapter(inputElement.value);
    }
})