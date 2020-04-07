// import rocks data
import rocks from './rocks.js';

// get elements from DOM
const container = document.getElementById('container');

// loop through array, create DOM elements
function createRocks() {
    rocks.forEach(rock => {
        const l1 = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const img = document.createElement('img');

        // populate html elements based on object values
        h3.textContent = rock.name
        img.textContent = rock.image // this isn't right ... !!!!!
        p.textContent = rock.description

        // append h3 and p to li
        li.classList.add('rock');
        li.appendChild(h3);
        li.appendChild(img);
        li.appendChild(p);

        // append li to div
        container.appendChild(li);
    })
}

createRocks();