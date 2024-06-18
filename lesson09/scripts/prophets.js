const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.getElementById('cards')

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok)
        return await response.json();
    else
        console.error(response);
}

const data = await getProphetData(url);
displayProphets(data.prophets)

function displayProphets(prophets) {
    cards.innerHTML = prophets.map(info => 
            `<section class="card">
                <h2>${info.name} ${info.lastname}</h2>
                <p>Date of Birth: ${info.birthdate}</p>
                <p>Place of Birth: ${info.birthplace}</p>
                <img src="${info.imageurl}" alt="${info.name}" loading="lazy" height="400" >
            </section>
            `
    ).join('');
}