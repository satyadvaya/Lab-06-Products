export function findById(items, id) {

    for (let i = 0; i < items.length; i++) {
        const item = items[i];


        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function calcLineItem(quantity, price) {
    const productCost = quantity * price;
    return roundedCost(productCost);
}

function roundedCost(productCost) {
    return Math.round(productCost * 100) / 100;
}