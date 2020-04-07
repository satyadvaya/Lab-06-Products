import rocks from '../rocks.js';
import renderRock from './render-rock.js';

const list = document.getElementById('rocks');

for (let i = 0; i < rocks.length; i++) {
    const rock = rocks[i];
    const el = renderRock(rock);
    list.appendChild(el);
}