const numOrders = localStorage.getItem('numOrders');
document.getElementById('num-orders').textContent = numOrders ? numOrders : 0;