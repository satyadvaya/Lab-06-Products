export function makeReadablePrice(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    
    return readablePrice;
}

function renderTableRow(cartItem, rock) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = rock.name;
    nameTd.classList.add;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = makeReadablePrice(rock.price);

    const totalTd = document.createElement('td');
    const totalPrice = (rock.price * cartItem.quantity);
    totalTd.textContent = makeReadablePrice(totalPrice);
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}

export default renderTableRow;