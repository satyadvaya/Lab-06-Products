import cart from '../data/cart.js';
import rocks from '../data/rocks.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderTableRow from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

// go through the cart
for (let i = 0; i < cart.length; i++) {
    // for every item in the cart
    const cartItem = cart[i];
    // get the rock data from the rock spreadsheet that goes with this cart item
    const rock = findById(rocks, cartItem.id);
    // make a table row for it
    const dom = renderTableRow(cartItem, rock);

    // then put the table row on the tbody
    tbody.appendChild(dom);
}

// make a total row line that has all the cart items added up
const orderTotal = calcOrderTotal(cart, rocks);
orderTotalCell.textContent = toUSD(orderTotal);