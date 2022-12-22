function setInnerText(elemId, newValue) {
    let elem = document.getElementById(elemId);
    if(elem){
        elem.innerText = newValue;
        console.log('Your new InnerText: ', newValue);
        console.log('true')
    }
    else {
        console.log('false')
    }
}

let idName = 'text';

setInnerText(idName, 'i want this text');

idName = 'span';
let text = 'text text text';

setInnerText(idName, text);

text = 'run run run';

setInnerText('paragraph', text);