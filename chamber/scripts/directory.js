const cardArea = document.getElementById('members');

async function getData() {
    const data = await fetch("./data/members.json");
    return data;
}

const data = await getData();
console.log(data.json());