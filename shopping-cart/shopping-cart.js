import rocks from '../data/rocks.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const cartInLocalStorage = localStorage.getItem('CART');
let cart;
// if there is a cart in local storage
if (cartInLocalStorage) {
    // parse it
    cart = JSON.parse(cartInLocalStorage);
}
else {
    // otherwise initialize the cart
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const rock = findById(rocks, lineItem.id);
    const dom = renderLineItem(lineItem, rock);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, rocks);
orderTotalCell.textContent = toUSD(orderTotal);

// if the cart is empty
if (cart.length === 0) {
    // disable the place order button
    placeOrderButton.disabled = true;
}
else {
    // if there IS something in the cart
    // add an event listener to the order button
    placeOrderButton.addEventListener('click', () => {
        // on click, remove the cart from local storage
        localStorage.removeItem('CART');
        // launch an alert with the current state of the  art
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        // redirect the user to the home page
        window.location = '../';
    });
}