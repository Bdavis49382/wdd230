
const input = document.getElementById('favchap');
const button = document.getElementById('submitbutton');
const list = document.getElementById('list');

button.addEventListener('click',() => {

    // If there is an input and it isn't already in the list, add it.
    if (input.value == "") {
        input.focus();
    }
    else {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click',() => {
            li.remove();
            input.focus();
        });
        li.appendChild(deleteButton);
        input.textContent = "";
        list.appendChild(li);
    }
})