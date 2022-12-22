let i = 0;

function generateCards(cardTitle, img, desc) {
    const card = {
        title: cardTitle,
        imageUrl: img,
        description: desc
    };
    const body = document.querySelector('body');
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let br = document.createElement('br');
    let span = document.createElement('span');
    let p = document.createElement('p');
    body.appendChild(div);
    div.classList.add('card');
    div.appendChild(h4);
    if (i % 2 == 0) {
        h4.innerText = `[` + i + `]` + card.title;
    }
    else {
        h4.innerText = card.title;
    }
    div.appendChild(br);
    div.appendChild(span);
    span.innerHTML = card.imageUrl;
    div.appendChild(p);
    p.innerText = card.description;
    i++;
};

const cards = [
    { title: 'My card A', imageUrl: '<img src="./2006-Chevrolet-Corvette-Z06-003-1080.jpg" alt="alternative text was not provided">', description: 'Corvette Z06 2006 is so beautiful!' },
    { title: 'My card B', imageUrl: '<img src="./28deed066ed2c6e1eda5fd99eb0574ac0749b9dc.jpg" alt="alternative text was not provided">', description: 'Ford Raptor F-150 my fav truck!' },
    { title: 'My card C', imageUrl: '<img src="./audi-rs6-avant.jpg" alt="alternative text was not provided">', description: 'Best car in the world!' },
    { title: 'My card D', imageUrl: '<img src="./maxresdefault.jpg" alt="alternative text was not provided">', description: 'Hellcat just a brutal car!' },
   ];

generateCards(cards[0].title, cards[0].imageUrl, cards[0].description)
generateCards(cards[1].title, cards[1].imageUrl, cards[1].description)
generateCards(cards[2].title, cards[2].imageUrl, cards[2].description)
generateCards(cards[3].title, cards[3].imageUrl, cards[3].description)