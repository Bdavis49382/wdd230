const data = await fetch("./data/products.json");
const products = await data.json();
document.getElementById('product-cards').innerHTML = products.map(product => 
        `<div class="card bg-${product.featured ? 'accent' : 'primary'}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.name}" loading="lazy" height=200>
            <p>$${product.price.toFixed(2)}</p>
            <a href="./order.html?product=${product.sku}" class="link">Order Now!</a>
        </div>`
        ).join("");