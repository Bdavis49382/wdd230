
async function getData() {
    const data = await fetch("./data/members.json");
    return await data.json();
}

function choices(arr,num=1) {
    const results = [];
    for (let i = 0; i < num; i++) {
        let index = Math.floor(Math.random() * arr.length);
        results.push(arr[index]);
    }
    return results;
}

function displaySpotlight(spotlights) {
    const box = document.getElementById('spotlights');
    box.innerHTML = spotlights.map(spotlight => `
                <section class="spotlight">
                    <h3>${spotlight.name}</h3>
                    <p>${spotlight.description}</p>
                    <p>${spotlight.address}</p>
                    <p>${spotlight.phone}</p>
                    <a href="${spotlight.website}">Website</a>
                </section>
        `)
}
const data = await getData();
displaySpotlight(choices(data,3));

