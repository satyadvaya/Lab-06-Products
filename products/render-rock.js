import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';

function renderRock(rock) {
    const li = document.createElement('li');
    li.className = rock.category;
    li.title = rock.description;

    const h3 = document.createElement('h3');
    h3.textContent = rock.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + rock.image;
    img.alt = rock.name + ' image';
    li.appendChild(img);

    const description = document.createElement('p');
    description.textContent = rock.description;
    li.appendChild(description);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(rock.price);

    const usd = '$' + rock.price.toFixed(2);
    // const usd = rock.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = rock.id;
    button.addEventListener('click', () => {
        // set variable to the cart in local storage
        let cartInLocalStorage = localStorage.getItem('CART');
        // set a variable for the javascript cart
        let cart;
        // conditional: if THERE IS A CART in local storage
        if (cartInLocalStorage) {
            // turn the string cart into an object
            // set our js cart to this value
            cart = JSON.parse(cartInLocalStorage);
        }
        else {
            // if there is no cart in local storage,
            // go make an empty cart
            // and set the empty cart to our js cart variable
            cart = [];
        }

        // NOW THAT WE HAVE OUR CART . . .
        // go find if we already have a fruit of this kind in the cart
        let itemInCart = findById(cart, rock.id);

        // if there is no cart item...
        // if findById finds NOTHING of this type in the cart
        if (!itemInCart) {
            // cart item is the fruit id and the quantity.
            const itemInCart = {
                // the fruit is PASSED as a parameter
                id: rock.id,
                quantity: 1
            };

            // push a itemInCart into the cart
            cart.push(itemInCart);
        }
        else {
            // if there is a cart item, add one to the QUANTITY
            itemInCart.quantity++;
        }

        // stringify our shopping cart
        const stringCart = JSON.stringify(cart);
        // put the string cart in local storage
        localStorage.setItem('CART', stringCart);

        // tell user we added one apple to cart
        alert('1 ' + rock.name + ' added to cart');

    });

    li.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderRock;