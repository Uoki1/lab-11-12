function generateCard(cardTitle, img, desc) {
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
    h4.innerText = card.title;
    div.appendChild(br);
    div.appendChild(span);
    span.innerHTML = card.imageUrl;
    div.appendChild(p);
    p.innerText = card.description;
};

imgSrc = '<img src="./2006-Chevrolet-Corvette-Z06-003-1080.jpg" alt="alternative text was not provided">';

const card = {
    title: 'My Card',
    imageUrl: imgSrc,
    description: 'Corvette Z06 2006 is so beautiful!'
};


generateCard(card.title, card.imageUrl, card.description)