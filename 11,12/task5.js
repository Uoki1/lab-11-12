function getCountOfByClassName(name) {
    let clss = document.getElementsByClassName(name);
    console.log('Amount of class ' + '" ' + name + ' "' + " :", clss.length)
}

let className = 'item';

getCountOfByClassName(className);

getCountOfByClassName('car');

className = 'part';

getCountOfByClassName(className);

