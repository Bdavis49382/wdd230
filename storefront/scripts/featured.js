const data = await fetch("./data/products.json");
const products = await data.json();
document.getElementById('featured-cards').innerHTML = products
        .filter(product => product.featured)
        .map(product => 
        `<div class="card bg-${product.featured ? 'accent' : 'primary'}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <p>$${(product.price).toFixed(2)}</p>
            <a href="./products.html" class="link">View Products</a>
        </div>`
        ).join("");