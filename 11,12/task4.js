function getSeconds(value, type) {
    if(type == 'seconds') {
        let result = value;
        console.log('Result: ', result, 'sec');
    }
    else if(type == 'minutes') {
        let result = value * 60;
        console.log('Result: ', result, 'sec');
    }
    else if(type == 'hours') {
        let result = value * 3600;
        console.log('Result: ', result, 'sec');
    }
    else {
        let result = -1;
        console.log('Result: ', result);
    }
}

let value = 10;
let type = 'minutes';

getSeconds(value, type);

value = 1565;

getSeconds(value, 'seconds');

getSeconds(25, 'days');

type = 'hours';

getSeconds(36, type);