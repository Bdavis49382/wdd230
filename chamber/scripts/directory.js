const cardArea = document.getElementById('members');

async function getData() {
    const data = await fetch("./data/members.json");
    return data;
}

const data = await getData();
displayMembers(await data.json());

const viewButton = document.getElementById("view-mode-button");
viewButton.addEventListener('click',() => {
    cardArea.classList.toggle('grid');
    viewButton.textContent = cardArea.classList.contains('grid') ? 'View as List' : 'View as Grid';
})

function displayMembers(members) {
    cardArea.innerHTML = members.map(info => 
            `
            <section class="card">
                <h2>${info.name}</h2>
                <p>${info.description}</p>
                <p>${info.membership_level} Member</p>
                <p>Founded ${info.founded_year}</p>
                <img src="${info.image}" alt="${info.name}" loading="lazy" height="400" >
                <p>${info.address}</p>
                <p>${info.phone}</p>
                <p>Visit us at ${info.website}</p>
            </section>
            `
    ).join('');
}