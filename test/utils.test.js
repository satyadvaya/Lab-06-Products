import { findById, calcLineItem } from '../common/utils.js';
import rocks from '../data/rocks.js';

const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'apatite';
    const expected = 'Apatite';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundRock = findById(rocks, id);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundRock.name, expected);
});

test('find product by id assigns null value to id if not found', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'not found';
    const expected = null;

    //Act 
    // Call the function you're testing and set the result to a const
    const foundRock = findById(rocks, id);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundRock, expected);
});

test('calculate line item', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 2;
    const price = 1.34;
    const expected = 2.68;

    //Act 
    // Call the function you're testing and set the result to a const
    const productCost = calcLineItem(quantity, price);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(productCost, expected);
});
