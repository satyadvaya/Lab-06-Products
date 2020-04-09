import renderLineItem, { makeReadablePrice } from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('makeReadablePrice', assert => {
    //Arrange
    // Set up your parameters and expectations
    const price = '2';
    const expected = '$2.00';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeReadablePrice(price);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actual, expected);
});

test('renders a line item', assert => {
    //Arrange
    // Set up your parameters and expectations
    const cartItem = {
        id: 'apatite',
        quantity: 2
    };

    const rock = {
        id: 'apatite',
        name: 'Apatite',
        image: 'apatite.jpg',
        description: 'Often mistaken for other minerals',
        category: 'phosphate mineral',
        price: 1.04,
        cost: 0.54
    };
    const expected = '<tr><td>Apatite</td><td>2</td><td>$1.04</td><td>$2.08</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderLineItem(cartItem, rock);
    const html = dom.outerHTML;
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});