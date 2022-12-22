function getNextNumber(arg) {
    if (arg === 0) {
        return arg = 0;
    }
    else if (arg < 0) {
        return ++arg;// arg = -6, попереднє до -6 буде -5
    }
    else if (arg > 0) {
        return ++arg;
    }
}

console.log(getNextNumber(5));

console.log(getNextNumber(-6));

let a = 15

console.log(getNextNumber(a));

let b = -15

let c = a + b;

console.log(getNextNumber(c));