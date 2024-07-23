const product = new URL(window.location).searchParams.entries();
product.forEach(p => {
    const descriptor = document.createElement('p');
    descriptor.textContent = `${p[0]} : ${p[1]}`;
    document.getElementById('product-card').appendChild(descriptor);
});

const arrivalDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)
document.getElementById('arrive-date').textContent = arrivalDate.toDateString()