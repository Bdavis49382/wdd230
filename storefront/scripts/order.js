const sku = new URL(window.location).searchParams.get("product");
const data = await fetch("./data/products.json");
const products = await data.json();
document.getElementById('selected-card').innerHTML = products
        .filter(product => product.sku == sku)
        .map(product => 
        `<div class="card bg-${product.featured ? 'accent' : 'primary'}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <table>
                <tr>
                    <th>Price</th>
                    <td>$${(product.price).toFixed(2)}</td>
                </tr>
                <tr>
                    <th>Tax</th>
                    <td>$${(product.price*.05).toFixed(2)}</td>
                </tr>
                <tr id="total">
                    <th>Total Price</th>
                    <td>$${(product.price*1.05).toFixed(2)}</td>
                </tr>
            </table>
        </div>`
        ).join("");

const orders = localStorage.getItem('num-orders');
localStorage.setItem('num-orders',orders + 1);
document.getElementById('sku').value = sku;