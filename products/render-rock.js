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

    const usd = '$' + rock.price.toFixed(2);
    // const usd = rock.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = rock.id;
    li.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderRock;